"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionHistory = exports.getPositionsHistory = exports.getPosition = exports.getPositions = exports.getMarket = exports.getMarkets = exports.PositionSide = void 0;
var PositionSide;
(function (PositionSide) {
    PositionSide[PositionSide["LONG"] = 0] = "LONG";
    PositionSide[PositionSide["SHORT"] = 1] = "SHORT";
})(PositionSide || (exports.PositionSide = PositionSide = {}));
const getMarkets = (state) => {
    return state.pairs.map((pair, pairIndex) => (0, exports.getMarket)(state, pair, pairIndex));
};
exports.getMarkets = getMarkets;
const getMarket = (state, pair, pairIndex) => {
    const { collaterals, groups, maxPairLeverages, pairBorrowingFees, groupBorrowingFees, fees } = state;
    const maxLeverage = maxPairLeverages[pairIndex] === 0 ? groups[pair.groupIndex].maxLeverage : maxPairLeverages[pairIndex];
    const minLeverage = groups[pair.groupIndex].minLeverage;
    return {
        marketName: `${pair.from}/${pair.to}`,
        from: pair.from,
        to: pair.to,
        category: pair.groupIndex,
        marketKey: pairIndex,
        pairBorrowingFees: collaterals.map(({ collateral }, collateralIndex) => {
            const { groups } = pairBorrowingFees[collateralIndex][pairIndex];
            const { feePerBlock, accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent } = pairBorrowingFees[collateralIndex][pairIndex];
            return {
                feePerBlock,
                accFeeLong,
                accFeeShort,
                accLastUpdatedBlock,
                feeExponent,
                group: groups[groups.length - 1],
            };
        }),
        groupBorrowingFees: collaterals.map(({ collateral }, collateralIndex) => {
            const { groups } = pairBorrowingFees[collateralIndex][pairIndex];
            const groupIndex = groups[groups.length - 1]?.groupIndex;
            if (!groupIndex)
                return undefined;
            const groupBorrowingFee = groupBorrowingFees[collateralIndex][groupIndex];
            const { accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent, feePerBlock } = groupBorrowingFee;
            return {
                accFeeLong,
                accFeeShort,
                accLastUpdatedBlock,
                feeExponent,
                feePerBlock,
            };
        }),
        openInterests: collaterals.map(({ collateral }, collateralIndex) => {
            const { long, short, max } = pairBorrowingFees[collateralIndex][pairIndex].oi;
            const { groups } = pairBorrowingFees[collateralIndex][pairIndex];
            const groupIndex = groups[groups.length - 1]?.groupIndex;
            return {
                pair: {
                    long,
                    short,
                    max,
                },
                group: groupBorrowingFees[collateralIndex][groupIndex]?.oi || undefined,
            };
        }),
        spreadP: pair.spreadP,
        feeRates: fees[pair.feeIndex],
        minLeverage: minLeverage,
        maxLeverage: maxLeverage,
        isSuspended: maxLeverage < 1,
    };
};
exports.getMarket = getMarket;
const getPositions = (state, tradeContainers) => {
    return tradeContainers.map((tradeContainer) => (0, exports.getPosition)(tradeContainer, state.pairs, state.groups, state.maxPairLeverages));
};
exports.getPositions = getPositions;
const getPosition = (tradeContainer, pairs, groups, maxLeverages) => {
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
exports.getPosition = getPosition;
const getPositionsHistory = (userTrades) => {
    return userTrades.map((tradeWithHistory) => (0, exports.getPositionHistory)(tradeWithHistory));
};
exports.getPositionsHistory = getPositionsHistory;
const getPositionHistory = (tradeWithHistory) => {
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
            .reduce((acc, entry) => acc +
            (entry.collateralDelta || entry.collateralAmount) *
                (entry.leverageDelta || entry.leverage) *
                entry.collateralPriceUsd, 0),
        trades: history.filter((it) => it.action !== "TradeLeverageUpdate").length,
    };
};
exports.getPositionHistory = getPositionHistory;
