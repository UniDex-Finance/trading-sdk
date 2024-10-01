import { Fee, OpenInterest, Pair, TradeContainer, TradingGroup } from "@gainsnetwork/sdk";
import { State, TradeWithHistory } from "../types";

export enum PositionSide {
  LONG,
  SHORT,
}

export interface Position {
  marketKey: number;
  user: string;
  index: number;
  side: PositionSide;
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

export interface PositionHistory {
  id: string;
  openTimestamp: number;
  closeTimestamp: number | null;
  marketKey: number;
  isOpen: boolean;
  isLiquidated: boolean;
  size: number;
  avgEntryPrice: number;
  exitPrice: number | null;
  side: PositionSide;
  pnl: number;
  totalVolume: number;
  trades: number;
}

export const getMarkets = (state: State): Market[] => {
  return state.pairs.map((pair, pairIndex) => getMarket(state, pair, pairIndex));
};

export const getMarket = (state: State, pair: Pair, pairIndex: number) => {
  const { collaterals, groups, maxPairLeverages, pairBorrowingFees, groupBorrowingFees, fees } = state;
  const maxLeverage =
    maxPairLeverages[pairIndex] === 0 ? groups[pair.groupIndex].maxLeverage : maxPairLeverages[pairIndex];
  const minLeverage = groups[pair.groupIndex].minLeverage;

  return {
    marketName: `${pair.from}${pair.to}`,
    category: pair.groupIndex,
    marketKey: pairIndex,
    pairBorrowingFees: collaterals.map(({ collateral }, collateralIndex) => {
      const { feePerBlock, accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent } =
        pairBorrowingFees[collateralIndex][pairIndex];
      return {
        feePerBlock,
        accFeeLong,
        accFeeShort,
        accLastUpdatedBlock,
        feeExponent,
        group: pairBorrowingFees[collateralIndex][pairIndex].groups[0],
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
      const { long, short, max } = pairBorrowingFees[collateralIndex][pairIndex].oi;
      const groupIndex = pairBorrowingFees[collateralIndex][pairIndex].groups[0]?.groupIndex || 0;
      return {
        pair: {
          long,
          short,
          max,
        },
        group: groupBorrowingFees[collateralIndex][groupIndex].oi,
      };
    }),
    spreadP: pair.spreadP,
    feeRates: fees[pair.feeIndex],
    minLeverage: minLeverage,
    maxLeverage: maxLeverage,
    isSuspended: maxLeverage < 1,
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
    side: long ? PositionSide.LONG : PositionSide.SHORT,
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
    maxLeverage: maxLeverages[pairIndex] === 0 ? groups[groupIndex].maxLeverage : maxLeverages[pairIndex],
  };
};

export const getPositionsHistory = (userTrades: TradeWithHistory[]) => {
  return userTrades.map((tradeWithHistory) => getPositionHistory(tradeWithHistory));
};

export const getPositionHistory = (tradeWithHistory: TradeWithHistory): PositionHistory => {
  const { index, user, isOpen, pairIndex, history, openPrice, long, leverage, collateralAmount } = tradeWithHistory;
  const tradeCloseHistoryEntry = !isOpen && history[history.length - 1];
  return {
    id: `${user}-${index}`,
    openTimestamp: new Date(history[0].date).getTime(),
    closeTimestamp: tradeCloseHistoryEntry ? new Date(tradeCloseHistoryEntry.date).getTime() : null,
    marketKey: pairIndex,
    isOpen: isOpen,
    isLiquidated: tradeCloseHistoryEntry && tradeCloseHistoryEntry.action === "TradeClosedLIQ",
    avgEntryPrice: openPrice,
    exitPrice: tradeCloseHistoryEntry ? tradeCloseHistoryEntry.marketPrice : null,
    side: long ? PositionSide.LONG : PositionSide.SHORT,
    pnl: history.reduce((acc, entry) => acc + entry.pnl * entry.collateralPriceUsd, 0),
    size: leverage * collateralAmount,
    totalVolume: history
      .filter((it) => it.action !== "TradeLeverageUpdate")
      .reduce(
        (acc, entry) =>
          acc +
          (entry.collateralDelta || entry.collateralAmount) *
            (entry.leverageDelta || entry.leverage) *
            entry.collateralPriceUsd,
        0
      ),
    trades: history.filter((it) => it.action !== "TradeLeverageUpdate").length,
  };
};
