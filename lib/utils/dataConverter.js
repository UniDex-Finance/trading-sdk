"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTraderFeeTiers = exports.convertFeeTiers = exports.convertCollateralConfig = exports.convertOiWindowsSettings = exports.convertOiWindows = exports.convertPairOi = exports.convertGroupBorrowingFee = exports.convertGroupBorrowingFees = exports.convertPairBorrowingFee = exports.convertPairGroupBorrowingFee = exports.convertPairBorrowingFees = exports.convertPairDepth = exports.convertPairDepths = exports.convertOpenInterest = exports.convertOpenInterests = exports.convertFee = exports.convertFees = exports.convertTradingPair = exports.convertTradingPairs = exports.convertTradingGroup = exports.convertTradingGroups = exports.convertTradeInitialAccFees = exports.convertTradeInfo = exports.convertTrade = exports.convertPairFactor = exports.convertLiquidationParams = exports.convertTradeContainer = exports.convertTradesAndLimitOrders = void 0;
const sdk_1 = require("@gainsnetwork/sdk");
const convertTradesAndLimitOrders = (allItems, collaterals) => allItems?.map((item) => {
    return (0, exports.convertTradeContainer)(item, collaterals);
});
exports.convertTradesAndLimitOrders = convertTradesAndLimitOrders;
const convertTradeContainer = (tradeContainer, collaterals) => ({
    trade: (0, exports.convertTrade)(tradeContainer.trade, collaterals),
    tradeInfo: (0, exports.convertTradeInfo)(tradeContainer.tradeInfo),
    initialAccFees: tradeContainer.initialAccFees === undefined
        ? {
            accPairFee: 0,
            accGroupFee: 0,
            block: 0,
        }
        : (0, exports.convertTradeInitialAccFees)(tradeContainer.initialAccFees),
    liquidationParams: tradeContainer.liquidationParams === undefined
        ? {
            maxLiqSpreadP: 0,
            startLiqThresholdP: 0,
            endLiqThresholdP: 0,
            startLeverage: 0,
            endLeverage: 0,
        }
        : (0, exports.convertLiquidationParams)(tradeContainer.liquidationParams),
});
exports.convertTradeContainer = convertTradeContainer;
const convertLiquidationParams = (liquidationParams) => {
    return {
        maxLiqSpreadP: Number(liquidationParams.maxLiqSpreadP) / 1e12,
        startLiqThresholdP: Number(liquidationParams.startLiqThresholdP) / 1e12,
        endLiqThresholdP: Number(liquidationParams.endLiqThresholdP) / 1e12,
        startLeverage: Number(liquidationParams.startLeverage) / 1e3,
        endLeverage: Number(liquidationParams.endLeverage) / 1e3,
    };
};
exports.convertLiquidationParams = convertLiquidationParams;
const convertPairFactor = (pairFactor) => ({
    cumulativeFactor: Number(pairFactor.cumulativeFactor) / 1e10,
    protectionCloseFactor: Number(pairFactor.protectionCloseFactor) / 1e10,
    protectionCloseFactorBlocks: Number(pairFactor.protectionCloseFactorBlocks),
    exemptOnOpen: pairFactor.exemptOnOpen,
    exemptAfterProtectionCloseFactor: pairFactor.exemptAfterProtectionCloseFactor,
});
exports.convertPairFactor = convertPairFactor;
const convertTrade = (trade, collaterals) => {
    const { long, user } = trade;
    const collateralIndex = Number(trade.collateralIndex);
    return {
        user: user,
        index: Number(trade.index),
        pairIndex: Number(trade.pairIndex),
        leverage: Number(trade.leverage) / 1e3,
        long,
        isOpen: trade.isOpen,
        collateralIndex,
        tradeType: Number(trade.tradeType),
        collateralAmount: Number(trade.collateralAmount) / 10 ** Number(collaterals[collateralIndex - 1].decimals),
        openPrice: Number(trade.openPrice) / 1e10,
        sl: Number(trade.sl) / 1e10,
        tp: Number(trade.tp) / 1e10,
    };
};
exports.convertTrade = convertTrade;
const convertTradeInfo = (tradeInfo) => ({
    createdBlock: Number(tradeInfo.createdBlock),
    tpLastUpdatedBlock: Number(tradeInfo.tpLastUpdatedBlock),
    slLastUpdatedBlock: Number(tradeInfo.slLastUpdatedBlock),
    maxSlippageP: Number(tradeInfo.maxSlippageP) / 1e3 || 1,
    lastOiUpdateTs: Number(tradeInfo.lastOiUpdateTs),
    collateralPriceUsd: tradeInfo.collateralPriceUsd && tradeInfo.collateralPriceUsd !== "0"
        ? Number(tradeInfo.collateralPriceUsd) / 1e8
        : 1,
    contractsVersion: Number(tradeInfo.contractsVersion),
    lastPosIncreaseBlock: Number(tradeInfo.lastPosIncreaseBlock),
});
exports.convertTradeInfo = convertTradeInfo;
const convertTradeInitialAccFees = (initialAccFees) => ({
    accPairFee: Number(initialAccFees.accPairFee || "0") / 1e10,
    accGroupFee: Number(initialAccFees.accGroupFee || "0") / 1e10,
    block: Number(initialAccFees.block || "0"),
});
exports.convertTradeInitialAccFees = convertTradeInitialAccFees;
const convertTradingGroups = (groups) => groups?.map((group) => (0, exports.convertTradingGroup)(group));
exports.convertTradingGroups = convertTradingGroups;
const convertTradingGroup = (group) => ({
    maxLeverage: Number(group.maxLeverage) / 1e3,
    minLeverage: Number(group.minLeverage) / 1e3,
    name: group.name,
});
exports.convertTradingGroup = convertTradingGroup;
const convertTradingPairs = (pairs) => pairs?.filter((pair) => pair.from !== "").map((pair, index) => (0, exports.convertTradingPair)(pair, index));
exports.convertTradingPairs = convertTradingPairs;
const convertTradingPair = (pair, index) => ({
    name: !pair ? "" : pair.from.split("_")[0] + "/" + pair.to,
    description: (0, sdk_1.getPairDescription)(index),
    from: pair.from,
    to: pair.to,
    pairIndex: index,
    feeIndex: Number(pair.feeIndex),
    groupIndex: Number(pair.groupIndex),
    spreadP: Number(pair.spreadP) / 1e12,
});
exports.convertTradingPair = convertTradingPair;
const convertFees = (fees) => fees?.map((fee) => (0, exports.convertFee)(fee));
exports.convertFees = convertFees;
const convertFee = (fee) => ({
    totalPositionSizeFeeP: Number(fee.totalPositionSizeFeeP) / 1e12,
    totalLiqCollateralFeeP: Number(fee.totalLiqCollateralFeeP) / 1e12,
    oraclePositionSizeFeeP: Number(fee.oraclePositionSizeFeeP) / 1e12,
    minPositionSizeUsd: Number(fee.minPositionSizeUsd) / 1e3,
});
exports.convertFee = convertFee;
const convertOpenInterests = (interests) => interests?.map((interest) => (0, exports.convertOpenInterest)(interest));
exports.convertOpenInterests = convertOpenInterests;
const convertOpenInterest = (interest) => ({
    long: Number(interest.long) / 1e10,
    short: Number(interest.short) / 1e10,
    max: Number(interest.max) / 1e10,
});
exports.convertOpenInterest = convertOpenInterest;
const convertPairDepths = (pairDepths) => pairDepths?.map((pairDepth) => (0, exports.convertPairDepth)(pairDepth));
exports.convertPairDepths = convertPairDepths;
const convertPairDepth = (pairDepth) => ({
    onePercentDepthAboveUsd: Number(pairDepth.onePercentDepthAboveUsd),
    onePercentDepthBelowUsd: Number(pairDepth.onePercentDepthBelowUsd),
});
exports.convertPairDepth = convertPairDepth;
const convertPairBorrowingFees = (pairParams) => pairParams?.pairs.map((pairParam) => (0, exports.convertPairBorrowingFee)(pairParam));
exports.convertPairBorrowingFees = convertPairBorrowingFees;
const convertPairGroupBorrowingFee = (pairParam) => ({
    groupIndex: Number(pairParam.groupIndex),
    initialAccFeeLong: Number(pairParam.initialAccFeeLong) / 1e10,
    initialAccFeeShort: Number(pairParam.initialAccFeeShort) / 1e10,
    pairAccFeeLong: Number(pairParam.pairAccFeeLong) / 1e10,
    pairAccFeeShort: Number(pairParam.pairAccFeeShort) / 1e10,
    prevGroupAccFeeLong: Number(pairParam.prevGroupAccFeeLong) / 1e10,
    prevGroupAccFeeShort: Number(pairParam.prevGroupAccFeeShort) / 1e10,
    block: Number(pairParam.block),
});
exports.convertPairGroupBorrowingFee = convertPairGroupBorrowingFee;
const convertPairBorrowingFee = (pairParams) => ({
    groups: pairParams.groups.map((pairParam) => (0, exports.convertPairGroupBorrowingFee)(pairParam)),
    feePerBlock: Number(pairParams.feePerBlock) / 1e10,
    accFeeLong: Number(pairParams.accFeeLong) / 1e10,
    accFeeShort: Number(pairParams.accFeeShort) / 1e10,
    accLastUpdatedBlock: Number(pairParams.accLastUpdatedBlock),
    oi: {
        max: Number(pairParams.oi.max) / 1e10 || 0,
        long: Number(pairParams.oi.long) / 1e10 || 0,
        short: Number(pairParams.oi.short) / 1e10 || 0,
    },
    feeExponent: Number(pairParams.feeExponent) || 0,
});
exports.convertPairBorrowingFee = convertPairBorrowingFee;
const convertGroupBorrowingFees = (pairParams) => pairParams?.groups.map((pairParam) => (0, exports.convertGroupBorrowingFee)(pairParam));
exports.convertGroupBorrowingFees = convertGroupBorrowingFees;
const convertGroupBorrowingFee = (pairParams) => ({
    oi: {
        long: Number(pairParams.oi.long) / 1e10,
        short: Number(pairParams.oi.short) / 1e10,
        max: Number(pairParams.oi.max) / 1e10 || 0,
    },
    feePerBlock: Number(pairParams.feePerBlock) / 1e10,
    accFeeLong: Number(pairParams.accFeeLong) / 1e10,
    accFeeShort: Number(pairParams.accFeeShort) / 1e10,
    accLastUpdatedBlock: Number(pairParams.accLastUpdatedBlock),
    feeExponent: Number(pairParams.feeExponent) || 0,
});
exports.convertGroupBorrowingFee = convertGroupBorrowingFee;
const convertPairOi = (collateral) => ({
    oiLongUsd: Number(collateral.oiLongUsd) / 1e18,
    oiShortUsd: Number(collateral.oiShortUsd) / 1e18,
});
exports.convertPairOi = convertPairOi;
const convertOiWindows = (oiWindows) => {
    return oiWindows?.map((pairWindows) => Object.fromEntries(Object.entries(pairWindows).map(([key, oiWindow]) => [key, (0, exports.convertPairOi)(oiWindow)])));
};
exports.convertOiWindows = convertOiWindows;
const convertOiWindowsSettings = (oiWindowsSettings) => ({
    startTs: Number(oiWindowsSettings.startTs),
    windowsDuration: Number(oiWindowsSettings.windowsDuration),
    windowsCount: Number(oiWindowsSettings.windowsCount),
});
exports.convertOiWindowsSettings = convertOiWindowsSettings;
const convertCollateralConfig = (collateral) => ({
    collateral: collateral.collateral,
    isActive: collateral.isActive,
    precision: Number(collateral.precision),
    precisionDelta: Number(collateral.precisionDelta),
    decimals: Number(collateral.decimals),
    symbol: collateral.symbol,
});
exports.convertCollateralConfig = convertCollateralConfig;
const convertFeeTiers = (feeTiers) => ({
    tiers: feeTiers?.tiers.map((tier) => ({
        feeMultiplier: Number(tier.feeMultiplier) / 1e3,
        pointsThreshold: Number(tier.pointsThreshold),
    })),
    multipliers: feeTiers?.multipliers.map((mult) => Number(mult) / 1e3),
    currentDay: (0, sdk_1.getCurrentDay)(),
});
exports.convertFeeTiers = convertFeeTiers;
const convertTraderFeeTiers = (traderFeeTiers) => ({
    traderEnrollment: {
        status: Number(traderFeeTiers.traderEnrollment.status),
    },
    traderInfo: {
        lastDayUpdated: Number(traderFeeTiers.traderInfo.lastDayUpdated),
        trailingPoints: Number(traderFeeTiers.traderInfo.trailingPoints) / 1e18,
    },
    inboundPoints: Number(traderFeeTiers.inboundPoints) / 1e18,
    outboundPoints: Number(traderFeeTiers.outboundPoints) / 1e18,
    lastDayUpdatedPoints: Number(traderFeeTiers.lastDayUpdatedPoints) / 1e18,
    expiredPoints: traderFeeTiers.expiredPoints.map((point) => Number(point) / 1e18),
    unclaimedPoints: Number(traderFeeTiers.inboundPoints) / 1e18,
});
exports.convertTraderFeeTiers = convertTraderFeeTiers;
