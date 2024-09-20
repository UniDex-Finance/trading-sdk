import { getProvider } from "./utils/provider";
import { GNS_DIAMOND_ADDRESSES, MULTICALL3_ADDRESS, SupportedChainId } from "./config/constants";
import { multiCall } from "./utils/multicallHelper";
import { getCurrentDay, pairs as pairsSdk } from "@gainsnetwork/sdk";
import { GNSDiamond, GNSDiamond__factory, Multicall3__factory } from "./types/contracts";
import { Contract, ContractTransactionResponse, ethers, keccak256 } from "ethers";
import { Market, Pair, Position } from "./types";
import { ModifyPositionTxType, ModifyPositionTxArgs, OpenTradeTxArgs, CloseTradeMarketTxArgs } from "./types/tx";
import {
  buildCancelOpenOrderTx,
  buildCancelOrderAfterTimeoutTx,
  buildCloseTradeMarketTx,
  buildOpenTradeTx,
  buildUpdateLeverageTx,
  buildUpdateMaxClosingSlippagePTx,
  buildUpdateOpenOrderTx,
  buildUpdatePositionSizeTx,
  buildUpdateSlTx,
  buildUpdateTpTx,
} from "./libs/tx";

export class SDK {
  private chainId: SupportedChainId;
  private signer?: ethers.Signer;
  private gnsDiamond: GNSDiamond;
  private multicall3: Contract;
  private state: any; // @todo add type
  public lastRefreshedTs: number = Date.now();
  public initialized: boolean = false;

  constructor(chainId: SupportedChainId, signer?: ethers.Signer) {
    this.chainId = chainId;
    this.signer = signer;

    const runner = this.signer ?? getProvider(chainId);

    this.gnsDiamond = GNSDiamond__factory.connect(GNS_DIAMOND_ADDRESSES[chainId], runner);
    this.multicall3 = new ethers.Contract(MULTICALL3_ADDRESS, Multicall3__factory.abi, runner);
  }

  public async initialize() {
    await this.refreshState();
    this.initialized = true;
  }

  public async refreshState() {
    const [collaterals, maxPairLeverages, groupsCount, feesCount, feeTiersCount] = await Promise.all([
      this.gnsDiamond.getCollaterals(),
      this.gnsDiamond.getAllPairsRestrictedMaxLeverage(),
      this.gnsDiamond.groupsCount(),
      this.gnsDiamond.feesCount(),
      this.gnsDiamond.getFeeTiersCount(),
    ]);
    const pairCount = true ? 5 : Object.keys(pairsSdk).length; // @kuko todo: remove 5 to get all markets

    const pairCalls = Array.from({ length: pairCount }, (_, index) => ({
      functionName: "pairs",
      args: [index],
    }));

    const pairResults: [Pair][] = await multiCall(this.multicall3, this.gnsDiamond, pairCalls);

    const pairs = pairResults.map((pairResult) => {
      const pair = pairResult[0];
      return {
        from: pair.from,
        to: pair.to,
        groupIndex: pair.groupIndex,
        spreadP: pair.spreadP,
        feeIndex: pair.feeIndex,
      };
    });

    const groupCalls = Array.from({ length: Number(groupsCount) }, (_, index) => ({
      functionName: "groups",
      args: [index],
    }));

    const groupsResults = await multiCall(this.multicall3, this.gnsDiamond, groupCalls);

    const groups = groupsResults.map((groupResult) => {
      const group = groupResult[0];
      return {
        name: group.name,
        minLeverage: group.minLeverage,
        maxLeverage: group.maxLeverage,
      };
    });

    const feesCalls = Array.from({ length: Number(feesCount) }, (_, index) => ({
      functionName: "fees",
      args: [index],
    }));

    const feesResults = await multiCall(this.multicall3, this.gnsDiamond, feesCalls);

    const fees = feesResults.map((feeResult) => {
      const fee = feeResult[0];
      return {
        openFeeP: fee.openFeeP,
        closeFeeP: fee.closeFeeP,
        oracleFeeP: fee.oracleFeeP,
        triggerOrderFeeP: fee.triggerOrderFeeP,
        minPositionSizeUsd: fee.minPositionSizeUsd,
      };
    });

    const feeTiersCalls = Array.from({ length: Number(feeTiersCount) }, (_, index) => ({
      functionName: "getFeeTier",
      args: [index],
    }));

    const feeTiersResults = await multiCall(this.multicall3, this.gnsDiamond, feeTiersCalls);
    const feeTiers = feeTiersResults.map((feeTierResult) => {
      const feeTier = feeTierResult[0];
      return {
        feeMultiplier: feeTier.feeMultiplier,
        pointsThreshold: feeTier.pointsThreshold,
      };
    });

    const feeMultipliersCalls = Array.from({ length: Number(groupsCount) }, (_, index) => ({
      functionName: "getGroupVolumeMultiplier",
      args: [index],
    }));

    const feeMultipliersResults = await multiCall(this.multicall3, this.gnsDiamond, feeMultipliersCalls);
    const feeMultipliers = feeMultipliersResults.map((feeMultiplierResult) => feeMultiplierResult[0]);

    const pairBorrowingFeesCalls = collaterals.map(({ collateral }, index) => {
      return {
        functionName: "getAllBorrowingPairs",
        args: [index + 1],
      };
    });

    const pairBorrowingFees = await multiCall(this.multicall3, this.gnsDiamond, pairBorrowingFeesCalls);

    const groupBorrowingFeesCalls = collaterals.map(({ collateral }, index) => {
      const pairBorrowingResult = pairBorrowingFees[index];
      const borrowingFeesGroupIds = [
        ...new Set<bigint>(pairBorrowingResult[2].map((pair: Pair[]) => pair.map((pair) => pair.groupIndex)).flat()),
      ].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
      return {
        functionName: "getBorrowingGroups",
        args: [
          index + 1,
          Array.from(Array(Number(borrowingFeesGroupIds[borrowingFeesGroupIds.length - 1]) + 1).keys()),
        ],
      };
    });

    const groupBorrowingFees = await multiCall(this.multicall3, this.gnsDiamond, groupBorrowingFeesCalls);

    this.lastRefreshedTs = Date.now();
    this.state = {
      collaterals,
      groups,
      pairs,
      fees,
      maxPairLeverages,
      groupBorrowingFees,
      pairBorrowingFees,
      maxGainP: 900,
      feeTiers: {
        multipliers: feeMultipliers,
        tiers: feeTiers,
      },
    };
  }

  public async getState(): Promise<any> {
    return this.state;
  }

  public async getMarkets(): Promise<Market[]> {
    const { collaterals, groups, pairs, maxPairLeverages, pairBorrowingFees, groupBorrowingFees } = this.state;

    const markets: Market[] = pairs.map((pair, pairIndex) => {
      const maxLeverage =
        maxPairLeverages[pairIndex] === BigInt(0)
          ? groups[Number(pair.groupIndex)].maxLeverage
          : maxPairLeverages[pairIndex];
      const minLeverage = groups[Number(pair.groupIndex)].minLeverage;

      return {
        from: pair.from,
        to: pair.to,
        groupIndex: pair.groupIndex,
        index: pairIndex,
        pairBorrowingFees: collaterals.map(({ collateral }, collateralIndex) => {
          const { feePerBlock, accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent } =
            pairBorrowingFees[collateralIndex][0][pairIndex];
          const {
            groupIndex,
            block,
            initialAccFeeLong,
            initialAccFeeShort,
            prevGroupAccFeeLong,
            prevGroupAccFeeShort,
            pairAccFeeLong,
            pairAccFeeShort,
          } = pairBorrowingFees[collateralIndex][2][pairIndex][0];
          return {
            feePerBlock,
            accFeeLong,
            accFeeShort,
            accLastUpdatedBlock,
            feeExponent,
            group: {
              groupIndex,
              block,
              initialAccFeeLong,
              initialAccFeeShort,
              prevGroupAccFeeLong,
              prevGroupAccFeeShort,
              pairAccFeeLong,
              pairAccFeeShort,
            },
          };
        }),
        groupBorrowingFees: collaterals.map(({ collateral }, collateralIndex) => {
          return groupBorrowingFees[collateralIndex][0].map((groupBorrowingFees) => {
            const { accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent, feePerBlock } = groupBorrowingFees;
            return {
              accFeeLong,
              accFeeShort,
              accLastUpdatedBlock,
              feeExponent,
              feePerBlock,
            };
          });
        }),
        openInterests: collaterals.map(({ collateral }, collateralIndex) => {
          const { long, short, max } = pairBorrowingFees[collateralIndex][1][pairIndex];
          const { groupIndex } = pairBorrowingFees[collateralIndex][2][pairIndex][0];
          const {
            long: groupLong,
            short: groupShort,
            max: groupMax,
          } = groupBorrowingFees[collateralIndex][1][Number(groupIndex)];
          return {
            pair: {
              long,
              short,
              max,
            },
            group: {
              long: groupLong,
              short: groupShort,
              max: groupMax,
            },
          };
        }),
        spreadP: pair.spreadP,
        feeIndex: pair.feeIndex,
        minLeverage: minLeverage,
        maxLeverage: maxLeverage,
        isActive: Number(maxLeverage) > 1,
      };
    });
    return markets;
  }

  public async getPositions(account: string): Promise<Position[]> {
    const { maxPairLeverages, groups } = this.state;
    const [trades, tradeInfos, liquidationParams] = await Promise.all([
      this.gnsDiamond.getTrades(account),
      this.gnsDiamond.getTradeInfos(account),
      this.gnsDiamond.getTradesLiquidationParams(account),
    ]);

    const initialAccFeesCalls = trades
      .map((trade) => ({
        collateralIndex: trade.collateralIndex,
        user: trade.user,
        index: trade.index,
      }))
      .map(({ collateralIndex, user, index }) => {
        return {
          functionName: "getBorrowingInitialAccFees",
          args: [collateralIndex, user, index],
        };
      });
    const initialAccFeesResults = await multiCall(this.multicall3, this.gnsDiamond, initialAccFeesCalls);
    const initialAccFees = initialAccFeesResults.map((initialAccFeesResult) => {
      const initialAccFee = initialAccFeesResult[0];
      return {
        accPairFee: initialAccFee.accPairFee,
        accGroupFee: initialAccFee.accGroupFee,
        block: initialAccFee.block,
      };
    });

    const userTrades = trades.map((trade, index) => {
      const tradeInfo = tradeInfos[index];
      const liqParams = liquidationParams[index];
      const initialAccFee = initialAccFees[index];
      return {
        trade: {
          user: trade.user,
          index: trade.index,
          pairIndex: trade.pairIndex,
          leverage: trade.leverage,
          long: trade.long,
          isOpen: trade.isOpen,
          collateralIndex: trade.collateralIndex,
          tradeType: trade.tradeType,
          collateralAmount: trade.collateralAmount,
          openPrice: trade.openPrice,
          tp: trade.tp,
          sl: trade.sl,
        },
        tradeInfo: {
          createdBlock: tradeInfo.createdBlock,
          tpLastUpdatedBlock: tradeInfo.tpLastUpdatedBlock,
          slLastUpdatedBlock: tradeInfo.slLastUpdatedBlock,
          maxSlippageP: tradeInfo.maxSlippageP,
          lastOiUpdateTs: tradeInfo.lastOiUpdateTs,
          collateralPriceUsd: tradeInfo.collateralPriceUsd,
          contractsVersion: tradeInfo.contractsVersion,
          lastPosIncreaseBlock: tradeInfo.lastPosIncreaseBlock,
        },
        liquidationParams: {
          maxLiqSpreadP: liqParams.maxLiqSpreadP,
          startLiqThresholdP: liqParams.startLiqThresholdP,
          endLiqThresholdP: liqParams.endLiqThresholdP,
          startLeverage: liqParams.startLeverage,
          endLeverage: liqParams.endLeverage,
        },
        initialAccFees: initialAccFee,
      };
    });

    return userTrades.map((tradeContainer) => {
      const { trade, tradeInfo } = tradeContainer;
      const posSize = trade.collateralAmount * trade.leverage;
      const posSizeInToken = (posSize * tradeInfo.collateralPriceUsd) / trade.openPrice;
      const pairIndexNum = Number(trade.pairIndex);
      const groupIndexNum = Number(this.state.pairs[pairIndexNum]?.groupIndex || 0);
      return {
        user: trade.user,
        pairIndex: pairIndexNum,
        index: trade.index,
        long: trade.long,
        openPrice: trade.openPrice,
        positionSize: posSize,
        positionSizeInToken: posSizeInToken,
        borrowingFee: 0n, // @calc
        closingFee: 0n, // @calc
        liquidationPrice: 0n, // @calc
        leverage: trade.leverage,
        pnl: {
          // @calc
          netPnl: 0n,
          netPnlP: 0n,
          uPnL: 0n,
          uPnLP: 0n,
        },
        maxLeverage:
          maxPairLeverages[pairIndexNum] === BigInt(0)
            ? groups[Number(groupIndexNum)].maxLeverage
            : maxPairLeverages[pairIndexNum],
      };
    });
  }

  public async getTraderFeeTiers(account: string): Promise<any> {
    const currentDay = getCurrentDay();
    const expiringDay = currentDay - 30;
    const [
      { lastDayUpdated: lastDayUpdatedRaw, trailingPoints: trailingPointsRaw },
      { feeMultiplierCache: currentFeeMultiplierCacheRaw, points: currentPointsRaw },
      { feeMultiplierCache: expiringFeeMultiplierCacheRaw, points: expiringPointsRaw },
      { status: traderEnrollmentStatus },
    ] = (
      await multiCall(this.multicall3, this.gnsDiamond, [
        {
          functionName: "getFeeTiersTraderInfo",
          args: [account],
        },
        {
          functionName: "getFeeTiersTraderDailyInfo",
          args: [account, currentDay],
        },
        {
          functionName: "getFeeTiersTraderDailyInfo",
          args: [account, expiringDay],
        },
        {
          functionName: "getTraderFeeTiersEnrollment",
          args: [account],
        },
      ])
    ).map((result) => result[0]);

    const traderInfo = {
      lastDayUpdated: lastDayUpdatedRaw,
      trailingPoints: trailingPointsRaw,
    };

    const currentTraderDailyInfo = {
      feeMultiplierCache: currentFeeMultiplierCacheRaw,
      points: currentPointsRaw,
    };

    const expiringTraderDailyInfo = {
      feeMultiplierCache: expiringFeeMultiplierCacheRaw,
      points: expiringPointsRaw,
    };

    const calls: { functionName: string; args: (string | number)[] }[] = [];

    if (traderInfo.lastDayUpdated > BigInt(0)) {
      const earliestExpiredDay = Math.max(Number(traderInfo.lastDayUpdated) - 30, expiringDay - 30);

      for (let day = expiringDay - 1; day >= earliestExpiredDay; day--) {
        calls.push({
          functionName: "getFeeTiersTraderDailyInfo",
          args: [account, day],
        });
      }
    }
    calls.push({
      functionName: "getFeeTiersTraderDailyInfo",
      args: [account, traderInfo.lastDayUpdated],
    });

    const daysInfoResults = await multiCall(this.multicall3, this.gnsDiamond, calls);
    const daysInfo = daysInfoResults.map((dayInfoResult) => {
      const dayInfo = dayInfoResult[0];
      return {
        points: dayInfo.points,
        feeMultiplierCache: dayInfo.feeMultiplierCache,
      };
    });
    const expiredDaysInfo = daysInfo.slice(0, -1);
    const lastDayUpdatedInfo = daysInfo[daysInfo.length - 1];
    return {
      traderInfo: {
        lastDayUpdated: traderInfo.lastDayUpdated,
        trailingPoints: traderInfo.trailingPoints,
      },
      traderEnrollment: { status: traderEnrollmentStatus },
      lastDayUpdatedPoints: lastDayUpdatedInfo.points,
      inboundPoints: currentTraderDailyInfo.points,
      outboundPoints: expiringTraderDailyInfo.points,
      expiredPoints: expiredDaysInfo.map((dayInfo) => dayInfo.points),
    };
  }

  public async getPositionsHistory(account: string): Promise<Position[]> {
    return [];
  }

  get build() {
    return {
      modifyPosition: async (args: ModifyPositionTxArgs) => {
        if (
          args.type === ModifyPositionTxType.INCREASE_POSITION_SIZE ||
          args.type === ModifyPositionTxType.DECREASE_POSITION_SIZE
        ) {
          return buildUpdatePositionSizeTx(this.gnsDiamond, args);
        }

        if (args.type === ModifyPositionTxType.UPDATE_SL) {
          return buildUpdateSlTx(this.gnsDiamond, args);
        }

        if (args.type === ModifyPositionTxType.UPDATE_TP) {
          return buildUpdateTpTx(this.gnsDiamond, args);
        }

        if (args.type === ModifyPositionTxType.UPDATE_LEVERAGE) {
          return buildUpdateLeverageTx(this.gnsDiamond, args);
        }

        if (args.type === ModifyPositionTxType.UPDATE_OPEN_ORDER) {
          return buildUpdateOpenOrderTx(this.gnsDiamond, args);
        }

        if (args.type === ModifyPositionTxType.UPDATE_MAX_CLOSING_SLIPPAGE_P) {
          return buildUpdateMaxClosingSlippagePTx(this.gnsDiamond, args);
        }
      },
      openTrade: async (args: OpenTradeTxArgs) => {
        return buildOpenTradeTx(this.gnsDiamond, args);
      },
      closeTradeMarket: async (args: CloseTradeMarketTxArgs) => {
        return buildCloseTradeMarketTx(this.gnsDiamond, args);
      },
      cancelOpenOrder: async (index: number) => {
        return buildCancelOpenOrderTx(this.gnsDiamond, index);
      },
      cancelOrderAfterTimeout: async (index: number) => {
        return buildCancelOrderAfterTimeoutTx(this.gnsDiamond, index);
      },
    };
  }

  get write() {
    if (!this.signer) {
      throw new Error("Signer requried for write methods");
    }

    return {
      modifyPosition: async (args: ModifyPositionTxArgs) => {
        const tx = await this.build.modifyPosition(args);
        const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });

        return hash;
      },
      openTrade: async (args: OpenTradeTxArgs) => {
        const tx = await this.build.openTrade(args);
        const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });

        return hash;
      },
      closeTradeMarket: async (args: CloseTradeMarketTxArgs) => {
        const tx = await this.build.closeTradeMarket(args);
        const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });

        return hash;
      },
      cancelOpenOrder: async (index: number) => {
        const tx = await this.build.cancelOpenOrder(index);
        const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });

        return hash;
      },
      cancelOrderAfterTimeout: async (index: number) => {
        const tx = await this.build.cancelOrderAfterTimeout(index);
        const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });

        return hash;
      },
      multicall: async (args: string[]) => {
        const { hash } = await this.gnsDiamond.multicall(args);

        return hash;
      },
      delegatedTradingAction: async (trader: string, calldata: string) => {
        const { hash } = await this.gnsDiamond.delegatedTradingAction(trader, calldata);

        return hash;
      },
    };
  }
}
