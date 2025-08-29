import { BigNumberish } from "ethers";
import { Fee, OpenInterest, Pair, Trade, TradeContainer, TradeInfo, TradeInitialAccFees, TradingGroup, BorrowingFee, OiWindows, OiWindowsSettings, PairDepth, PairOi, CollateralConfig, FeeTiers, TraderFeeTiers, LiquidationParams, PairFactor } from "@gainsnetwork/sdk";
import { ITradingStorage, IBorrowingFees, IPriceImpact, IFeeTiers, IPairsStorage } from "../types/contracts/GNSDiamond";
import { ExtendedCollateralConfig } from "../types";
export declare const convertTradesAndLimitOrders: (allItems: {
    trade: ITradingStorage.TradeStruct;
    tradeInfo: ITradingStorage.TradeInfoStruct;
    initialAccFees: IBorrowingFees.BorrowingInitialAccFeesStruct;
    liquidationParams: IPairsStorage.GroupLiquidationParamsStruct;
}[], collaterals: CollateralConfig[]) => TradeContainer[];
export declare const convertTradeContainer: (tradeContainer: {
    trade: ITradingStorage.TradeStruct;
    tradeInfo: ITradingStorage.TradeInfoStruct;
    initialAccFees: IBorrowingFees.BorrowingInitialAccFeesStruct;
    liquidationParams: IPairsStorage.GroupLiquidationParamsStruct;
}, collaterals: CollateralConfig[]) => TradeContainer;
export declare const convertLiquidationParams: (liquidationParams: IPairsStorage.GroupLiquidationParamsStruct) => LiquidationParams;
export declare const convertPairFactor: (pairFactor: IPriceImpact.PairFactorsStruct) => PairFactor;
export declare const convertTrade: (trade: ITradingStorage.TradeStruct, collaterals: CollateralConfig[]) => Trade;
export declare const convertTradeInfo: (tradeInfo: ITradingStorage.TradeInfoStruct) => TradeInfo;
export declare const convertTradeInitialAccFees: (initialAccFees: IBorrowingFees.BorrowingInitialAccFeesStruct) => TradeInitialAccFees;
export declare const convertTradingGroups: (groups: IPairsStorage.GroupStruct[]) => TradingGroup[];
export declare const convertTradingGroup: (group: IPairsStorage.GroupStruct) => TradingGroup;
export declare const convertTradingPairs: (pairs: IPairsStorage.PairStruct[]) => Pair[];
export declare const convertTradingPair: (pair: IPairsStorage.PairStruct, index: number) => Pair;
export declare const convertFees: (fees: IPairsStorage.FeeGroupStruct[]) => Fee[];
export declare const convertFee: (fee: IPairsStorage.FeeGroupStruct) => Fee;
export declare const convertOpenInterests: (interests: IBorrowingFees.OpenInterestStruct[]) => OpenInterest[];
export declare const convertOpenInterest: (interest: IBorrowingFees.OpenInterestStruct) => OpenInterest;
export declare const convertPairDepths: (pairDepths: IPriceImpact.PairDepthStruct[]) => PairDepth[];
export declare const convertPairDepth: (pairDepth: IPriceImpact.PairDepthStruct) => PairDepth;
export declare const convertPairBorrowingFees: (pairParams: {
    pairs: (IBorrowingFees.BorrowingDataStruct & {
        oi: IBorrowingFees.OpenInterestStruct;
    } & {
        groups: IBorrowingFees.BorrowingPairGroupStruct[];
    })[];
}) => BorrowingFee.Pair[];
export declare const convertPairGroupBorrowingFee: (pairParam: IBorrowingFees.BorrowingPairGroupStruct) => BorrowingFee.PairGroup;
export declare const convertPairBorrowingFee: (pairParams: IBorrowingFees.BorrowingDataStruct & {
    oi: IBorrowingFees.OpenInterestStruct;
} & {
    groups: IBorrowingFees.BorrowingPairGroupStruct[];
}) => BorrowingFee.Pair;
export declare const convertGroupBorrowingFees: (pairParams: {
    groups: (IBorrowingFees.BorrowingDataStruct & {
        oi: IBorrowingFees.OpenInterestStruct;
    })[];
}) => BorrowingFee.Group[];
export declare const convertGroupBorrowingFee: (pairParams: IBorrowingFees.BorrowingDataStruct & {
    oi: IBorrowingFees.OpenInterestStruct;
}) => BorrowingFee.Group;
export declare const convertPairOi: (collateral: IPriceImpact.PairOiStruct) => PairOi;
export declare const convertOiWindows: (oiWindows: {
    [key: string]: IPriceImpact.PairOiStruct;
}[]) => OiWindows[];
export declare const convertOiWindowsSettings: (oiWindowsSettings: IPriceImpact.OiWindowsSettingsStruct) => OiWindowsSettings;
export declare const convertCollateralConfig: (collateral: Omit<ITradingStorage.CollateralStruct, "__placeholder"> & {
    decimals: BigNumberish;
    symbol: string;
}) => ExtendedCollateralConfig;
export declare const convertFeeTiers: (feeTiers: {
    tiers: IFeeTiers.FeeTierStruct[];
    multipliers: BigNumberish[];
}) => FeeTiers;
export declare const convertTraderFeeTiers: (traderFeeTiers: {
    traderEnrollment: IFeeTiers.TraderEnrollmentStruct;
    traderInfo: IFeeTiers.TraderInfoStruct;
    lastDayUpdatedPoints: IFeeTiers.TraderDailyInfoStruct;
    inboundPoints: BigNumberish;
    outboundPoints: BigNumberish;
    expiredPoints: BigNumberish[];
}) => TraderFeeTiers;
