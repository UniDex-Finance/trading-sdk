import { getProvider } from "./utils/provider";
import { GNS_DIAMOND_ADDRESSES, MULTICALL3_ADDRESS, SupportedChainId } from "./config/constants";
import { multiCall } from "./utils/multicallHelper";
import { pairs } from "@gainsnetwork/sdk";
import { GNSDiamond, GNSDiamond__factory, Multicall3__factory } from "./types/contracts";
import { Contract, ContractTransactionResponse, ethers, parseUnits } from "ethers";
import {
  Market,
  Pair,
  ModifyPositionDirection,
  ModifyPositionParams,
  SubmitConditionalOrderParams,
  CancelConditionalOrderParams,
} from "./types";

export class SDK {
  private chainId: SupportedChainId;
  private signer?: ethers.Signer;
  private gnsDiamond: GNSDiamond;
  private multicall3: Contract;

  constructor(chainId: SupportedChainId, signer?: ethers.Signer) {
    this.chainId = chainId;
    this.signer = signer;

    const runner = this.signer ?? getProvider(chainId);

    this.gnsDiamond = GNSDiamond__factory.connect(GNS_DIAMOND_ADDRESSES[chainId], runner);
    this.multicall3 = new ethers.Contract(MULTICALL3_ADDRESS, Multicall3__factory.abi, runner);
  }

  public async getAllTrades(offset: number, limit: number): Promise<any> {
    const allTrades = await this.gnsDiamond.getAllTrades(offset, limit);

    return allTrades;
  }

  public async getUserTrades(userAddress: string): Promise<any> {
    const userTrades = await this.gnsDiamond.getTrades(userAddress);

    return userTrades;
  }

  public async getMarkets(): Promise<Market[]> {
    const [collaterals, maxPairLeverages, groupCount] = await Promise.all([
      this.gnsDiamond.getCollaterals(),
      this.gnsDiamond.getAllPairsRestrictedMaxLeverage(),
      this.gnsDiamond.groupsCount(),
    ]);

    const pairCount = true ? 5 : Object.keys(pairs).length; // @kuko todo: remove 5 to get all markets

    const pairCalls = Array.from({ length: pairCount }, (_, index) => ({
      functionName: "pairs",
      args: [index],
    }));

    const pairResults: [Pair][] = await multiCall(this.multicall3, this.gnsDiamond, pairCalls);

    const groupCalls = Array.from({ length: Number(groupCount) }, (_, index) => ({
      functionName: "groups",
      args: [index],
    }));

    const groupResults = await multiCall(this.multicall3, this.gnsDiamond, groupCalls);

    const groups = groupResults.map((groupResult) => {
      const group = groupResult[0];
      return {
        name: group.name,
        minLeverage: group.minLeverage,
        maxLeverage: group.maxLeverage,
      };
    });

    const pairBorrowingCalls = collaterals.map(({ collateral }, index) => {
      return {
        functionName: "getAllBorrowingPairs",
        args: [index + 1],
      };
    });

    const pairBorrowingResultsPerCollateral = await multiCall(this.multicall3, this.gnsDiamond, pairBorrowingCalls);

    const groupBorrowingCalls = collaterals.map(({ collateral }, index) => {
      const pairBorrowingResult = pairBorrowingResultsPerCollateral[index];
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

    const groupBorrowingResultsPerCollateral = await multiCall(this.multicall3, this.gnsDiamond, groupBorrowingCalls);

    const markets: Market[] = pairResults.map((pairResult, pairIndex) => {
      const pair = pairResult[0];
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
            pairBorrowingResultsPerCollateral[collateralIndex][0][pairIndex];
          const {
            groupIndex,
            block,
            initialAccFeeLong,
            initialAccFeeShort,
            prevGroupAccFeeLong,
            prevGroupAccFeeShort,
            pairAccFeeLong,
            pairAccFeeShort,
          } = pairBorrowingResultsPerCollateral[collateralIndex][2][pairIndex][0];
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
          return groupBorrowingResultsPerCollateral[collateralIndex][0].map((groupBorrowingFees) => {
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
          const { long, short, max } = pairBorrowingResultsPerCollateral[collateralIndex][1][pairIndex];
          const { groupIndex } = pairBorrowingResultsPerCollateral[collateralIndex][2][pairIndex][0];
          const {
            long: groupLong,
            short: groupShort,
            max: groupMax,
          } = groupBorrowingResultsPerCollateral[collateralIndex][1][Number(groupIndex)];
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

  public async getPositions(account: string): Promise<any> {

  }

  public async getPositionsHistory(account: string): Promise<any> {
    
  }

  // Write functions
  public async createAccount() {}

  public async modifyPosition({
    index,
    collateralDelta,
    leverageDelta,
    direction,
    slippageP,
    expectedPrice,
  }: ModifyPositionParams) {
    if (!this.signer) {
      return null;
    }

    const _leveragedDelta = Math.floor(leverageDelta * 1e3);
    const _slippageP = BigInt(Math.floor(slippageP * 1e3));
    const _expectedPrice = BigInt(Math.floor(expectedPrice * 1e10));

    let tx: ContractTransactionResponse | null = null;

    if (direction === ModifyPositionDirection.INCREASE) {
      tx = await this.gnsDiamond.increasePositionSize(
        index,
        collateralDelta,
        _leveragedDelta,
        _expectedPrice,
        _slippageP
      );
    } else if (direction === ModifyPositionDirection.DECREASE) {
      const trader = await this.signer.getAddress();
      const tradeInfo = await this.gnsDiamond.getTradeInfo(trader, index);

      if (tradeInfo.maxSlippageP === _slippageP) {
        tx = await this.gnsDiamond.decreasePositionSize(index, collateralDelta, _leveragedDelta, _expectedPrice);
      } else {
        tx = await this.gnsDiamond.multicall([
          this.gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, _slippageP]),
          this.gnsDiamond.interface.encodeFunctionData("decreasePositionSize", [
            index,
            collateralDelta,
            _leveragedDelta,
            _expectedPrice,
          ]),
        ]);
      }
    }

    return tx;
  }

  public async submitConditionalOrder({
    user,
    pairIndex,
    collateralAmount,
    openPrice,
    long,
    leverage,
    tp,
    sl,
    collateralIndex,
    tradeType,
    maxSlippage,
    ref,
  }: SubmitConditionalOrderParams) {
    if (!this.signer) {
      return null;
    }

    const tradeData = {
      user,
      pairIndex,
      index: 0,
      collateralAmount,
      openPrice: openPrice.toString(),
      long,
      leverage: Math.floor(leverage * 1e3),
      tp: Math.floor(tp).toString(),
      sl: Math.floor(sl).toString(),
      isOpen: true,
      collateralIndex,
      tradeType,
      __placeholder: "0",
    };

    const tx = await this.gnsDiamond.openTrade(
      tradeData,
      Math.floor(maxSlippage * 1e3).toString(),
      ref ?? "0x0000000000000000000000000000000000000000"
    );

    return tx;
  }

  public async cancelConditionalOrder({ index, slippageP, expectedPrice }: CancelConditionalOrderParams) {
    if (!this.signer) {
      return null;
    }

    const _expectedPrice = BigInt(Math.floor(expectedPrice * 1e10));
    const _slippageP = slippageP !== undefined ? BigInt(Math.floor(slippageP * 1e3)) : undefined;

    if (_slippageP !== undefined) {
      const trader = await this.signer.getAddress();
      const tradeInfo = await this.gnsDiamond.getTradeInfo(trader, index);
      if (tradeInfo.maxSlippageP !== _slippageP) {
        return await this.gnsDiamond.multicall([
          this.gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, _slippageP]),
          this.gnsDiamond.interface.encodeFunctionData("closeTradeMarket", [index, _expectedPrice]),
        ]);
      }
    }

    return await this.gnsDiamond.closeTradeMarket(index, _expectedPrice);
  }

  public async modifyAccountMargin() {}

  public async addDelegate() {}

  public async removeDelegate() {}
}
