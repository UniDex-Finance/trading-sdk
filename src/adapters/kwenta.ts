import { Fee, OpenInterest, Pair, TradeContainer, TradingGroup } from "@gainsnetwork/sdk";
import { State } from "../types";

export interface Position {
  marketKey: number;
  user: string;
  index: number;
  side: boolean;
  avgEntryPrice: number;
  notionalValue: number;
  size: number;
  owedInterest: number;
  totalFees: number;
  liquidationPrice: number;
  leverage: number;
  unrealizedPnl: {
    pnl: number;
    netPnlPct: number;
  };
  realizedPnl: {
    pnl: number;
    netPnl: number;
    netPnlPct: number;
  };
  maxLeverage: number;
}

export interface Market {
  marketName: string;
  category: number;
  marketKey: number;
  pairBorrowingFees: any;
  groupBorrowingFees: any;
  openInterests: { pair: OpenInterest; group: OpenInterest }[];
  spreadP: number;
  feeRates: Fee;
  minLeverage: number;
  maxLeverage: number;
  isSuspended: boolean;
}

export const getMarkets = (state: State): Market[] => {
  return state.pairs.map((pair, pairIndex) => getMarket(state, pair, pairIndex));
};

export const getMarket = (state: State, pair: Pair, pairIndex: number) => {
  const { collaterals, groups, pairs, maxPairLeverages, pairBorrowingFees, groupBorrowingFees, fees } = state;
  const maxLeverage =
    maxPairLeverages[pairIndex] === 0 ? groups[Number(pair.groupIndex)].maxLeverage : maxPairLeverages[pairIndex];
  const minLeverage = groups[Number(pair.groupIndex)].minLeverage;

  return {
    marketName: `${pair.from}${pair.to}`,
    category: pair.groupIndex,
    marketKey: pairIndex,
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
      return groupBorrowingFees[collateralIndex].map((groupBorrowingFees) => {
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
    feeRates: fees[pair.feeIndex],
    minLeverage: minLeverage,
    maxLeverage: maxLeverage,
    isSuspended: Number(maxLeverage) > 1,
  };
};

export const getPositions = (state: State, tradeContainers: TradeContainer[]): Position[] => {
  return tradeContainers.map((tradeContainer) =>
    getPosition(tradeContainer, state.pairs, state.groups, state.maxPairLeverages)
  );
};

export const getPosition = (
  tradeContainer: TradeContainer,
  pairs: Pair[],
  groups: TradingGroup[],
  maxLeverages: number[]
): Position => {
  const { trade, tradeInfo } = tradeContainer;
  const { pairIndex, collateralAmount, leverage, openPrice, user, index, long } = trade;
  const posSize = collateralAmount * leverage;
  const posSizeInToken = (posSize * tradeInfo.collateralPriceUsd) / openPrice;

  const groupIndex = pairs[pairIndex]?.groupIndex || 0;
  return {
    user,
    marketKey: pairIndex,
    index,
    side: long,
    avgEntryPrice: openPrice,
    notionalValue: posSize,
    size: posSizeInToken,
    owedInterest: 0, // @calc using getBorrowingFee()
    totalFees: 0, // @calc using getClosingFee() + getBorrowingFee()
    liquidationPrice: 0, // @calc using getLiquidationPrice()
    leverage: leverage,
    realizedPnl: {
      // @calc using getPnl()
      pnl: 0,
      netPnl: 0,
      netPnlPct: 0,
    },
    unrealizedPnl: {
      // @calc using getPnl()
      netPnlPct: 0,
      pnl: 0,
    },
    maxLeverage: maxLeverages[pairIndex] === 0 ? groups[Number(groupIndex)].maxLeverage : maxLeverages[pairIndex],
  };
};

export const getPositionsHistory = () => null; // @todo
