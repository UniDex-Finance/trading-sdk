import { getProvider } from "./utils/provider";
import { GNS_DIAMOND_ADDRESSES, MULTICALL3_ADDRESS, SupportedChainId } from "./config/constants";
import { multiCall } from "./utils/multicallHelper";
import { pairs } from "@gainsnetwork/sdk";
import { GNSDiamond, GNSDiamond__factory, Multicall3__factory } from "./types/contracts";
import { Contract, ethers } from "ethers";
import { Market, Pair } from "./types";

export class SDK {
  private chainId: SupportedChainId;
  private gnsDiamond: GNSDiamond;
  private multicall3: Contract;

  constructor(chainId: SupportedChainId) {
    this.chainId = chainId;

    const provider = getProvider(chainId);

    this.gnsDiamond = GNSDiamond__factory.connect(GNS_DIAMOND_ADDRESSES[chainId], provider);
    this.multicall3 = new ethers.Contract(MULTICALL3_ADDRESS, Multicall3__factory.abi, provider);
  }

  public async getAllTrades(offset: number, limit: number): Promise<any> {
    const allTrades = await this.gnsDiamond.getAllTrades(offset, limit);

    return allTrades;
  }

  public async getUserTrades(userAddress: string): Promise<any> {
    const userTrades = await this.gnsDiamond.getTrades(userAddress);

    return userTrades;
  }

  public async getMarkets(): Promise<any> {
    const collaterals = await this.gnsDiamond.getCollaterals();

    const pairCount = true ? 5 : Object.keys(pairs).length; // @kuko todo: remove 5 to get all markets

    const pairCalls = Array.from({ length: pairCount }, (_, index) => ({
      functionName: "pairs",
      args: [index],
    }));

    const pairResults: [Pair][] = await multiCall(this.multicall3, this.gnsDiamond, pairCalls);

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
        maxLeverage: 150n, // @todo
        isActive: true, // @todo
      };
    });
    return markets;
  }
}
