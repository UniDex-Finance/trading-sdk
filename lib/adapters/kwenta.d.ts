import { Fee, OpenInterest, Pair, TradeContainer, TradingGroup } from "@gainsnetwork/sdk";
import { State, TradeWithHistory } from "../types";
import { BorrowingData } from "@gainsnetwork/sdk/lib/trade/fees/borrowing/types";
export declare enum PositionSide {
    LONG = 0,
    SHORT = 1
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
    from: string;
    to: string;
    category: number;
    marketKey: number;
    pairBorrowingFees: BorrowingData[];
    groupBorrowingFees: (BorrowingData | undefined)[];
    openInterests: {
        pair: OpenInterest;
        group: OpenInterest;
    }[];
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
export declare const getMarkets: (state: State) => Market[];
export declare const getMarket: (state: State, pair: Pair, pairIndex: number) => Market;
export declare const getPositions: (state: State, tradeContainers: TradeContainer[]) => Position[];
export declare const getPosition: (tradeContainer: TradeContainer, pairs: Pair[], groups: TradingGroup[], maxLeverages: number[]) => Position;
export declare const getPositionsHistory: (userTrades: TradeWithHistory[]) => PositionHistory[];
export declare const getPositionHistory: (tradeWithHistory: TradeWithHistory) => PositionHistory;
