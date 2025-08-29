"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUpdatePositionSizeTx = buildUpdatePositionSizeTx;
exports.buildUpdateSlTx = buildUpdateSlTx;
exports.buildUpdateTpTx = buildUpdateTpTx;
exports.buildUpdateLeverageTx = buildUpdateLeverageTx;
exports.buildUpdateOpenOrderTx = buildUpdateOpenOrderTx;
exports.buildUpdateMaxClosingSlippagePTx = buildUpdateMaxClosingSlippagePTx;
exports.buildOpenTradeTx = buildOpenTradeTx;
exports.buildCloseTradeMarketTx = buildCloseTradeMarketTx;
exports.buildCancelOpenOrderTx = buildCancelOpenOrderTx;
exports.buildCancelOrderAfterTimeoutTx = buildCancelOrderAfterTimeoutTx;
exports.buildDelegatedTradingAction = buildDelegatedTradingAction;
exports.buildMulticallTx = buildMulticallTx;
const tx_1 = require("../types/tx");
async function buildUpdatePositionSizeTx(gnsDiamond, args) {
    const { index, collateralDelta } = args;
    const leveragedDelta = Math.floor(args.leverageDelta * 1e3);
    const expectedPrice = BigInt(Math.floor(args.expectedPrice * 1e10));
    const maxSlippageP = BigInt(Math.floor(args.maxSlippageP * 1e3));
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    if (args.type === tx_1.ModifyPositionTxType.INCREASE_POSITION_SIZE) {
        const data = gnsDiamond.interface.encodeFunctionData("increasePositionSize", [
            index,
            collateralDelta,
            leveragedDelta,
            expectedPrice,
            maxSlippageP,
        ]);
        return { data, to: gnsDiamondAddress };
    }
    if (args.updateMaxClosingSlippageP) {
        const data = gnsDiamond.interface.encodeFunctionData("multicall", [
            [
                gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, maxSlippageP]),
                gnsDiamond.interface.encodeFunctionData("decreasePositionSize", [
                    index,
                    collateralDelta,
                    leveragedDelta,
                    expectedPrice,
                ]),
            ],
        ]);
        return { data, to: gnsDiamondAddress };
    }
    const data = gnsDiamond.interface.encodeFunctionData("decreasePositionSize", [
        index,
        collateralDelta,
        leveragedDelta,
        expectedPrice,
    ]);
    return { data, to: gnsDiamondAddress };
}
async function buildUpdateSlTx(gnsDiamond, args) {
    const { index } = args;
    const stopLossPrice = BigInt(Math.floor(args.stopLossPrice * 1e10));
    const maxSlippageP = args.maxSlippageP !== undefined ? BigInt(Math.floor(args.maxSlippageP * 1e3)) : undefined;
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    if (maxSlippageP !== undefined) {
        const data = gnsDiamond.interface.encodeFunctionData("multicall", [
            [
                gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, maxSlippageP]),
                gnsDiamond.interface.encodeFunctionData("updateSl", [index, stopLossPrice]),
            ],
        ]);
        return { data, to: gnsDiamondAddress };
    }
    const data = gnsDiamond.interface.encodeFunctionData("updateSl", [index, stopLossPrice]);
    return { data, to: gnsDiamondAddress };
}
async function buildUpdateTpTx(gnsDiamond, args) {
    const { index } = args;
    const takeProfitPrice = BigInt(Math.floor(args.takeProfitPrice * 1e10));
    const maxSlippageP = args.maxSlippageP !== undefined ? BigInt(Math.floor(args.maxSlippageP * 1e3)) : undefined;
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    if (maxSlippageP !== undefined) {
        const data = gnsDiamond.interface.encodeFunctionData("multicall", [
            [
                gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, maxSlippageP]),
                gnsDiamond.interface.encodeFunctionData("updateTp", [index, takeProfitPrice]),
            ],
        ]);
        return { data, to: gnsDiamondAddress };
    }
    const data = gnsDiamond.interface.encodeFunctionData("updateTp", [index, takeProfitPrice]);
    return { data, to: gnsDiamondAddress };
}
async function buildUpdateLeverageTx(gnsDiamond, args) {
    const { index } = args;
    const leverage = Math.floor(args.leverage * 1e3);
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("updateLeverage", [index, leverage]);
    return { data, to: gnsDiamondAddress };
}
async function buildUpdateOpenOrderTx(gnsDiamond, args) {
    const { index } = args;
    const triggerPrice = BigInt(Math.floor(args.triggerPrice * 1e10));
    const takeProfitPrice = BigInt(Math.floor(args.takeProfitPrice * 1e10));
    const stopLossPrice = BigInt(Math.floor(args.stopLossPrice * 1e10));
    const maxSlippageP = BigInt(Math.floor(args.maxSlippageP * 1e3));
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("updateOpenOrder", [
        index,
        triggerPrice,
        takeProfitPrice,
        stopLossPrice,
        maxSlippageP,
    ]);
    return { data, to: gnsDiamondAddress };
}
async function buildUpdateMaxClosingSlippagePTx(gnsDiamond, args) {
    const { index } = args;
    const maxSlippageP = BigInt(Math.floor(args.maxSlippageP * 1e3));
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, maxSlippageP]);
    return { data, to: gnsDiamondAddress };
}
async function buildOpenTradeTx(gnsDiamond, args) {
    const tradeData = {
        user: args.user,
        pairIndex: args.pairIndex,
        index: 0,
        collateralAmount: args.collateralAmount,
        openPrice: Math.round(args.openPrice * 1e10).toString(),
        long: args.long,
        leverage: Math.floor(args.leverage * 1e3),
        tp: Math.floor(args.tp * 1e10).toString(),
        sl: Math.floor(args.sl * 1e10).toString(),
        isOpen: true,
        collateralIndex: args.collateralIndex,
        tradeType: args.tradeType,
        __placeholder: "0",
    };
    const maxSlippage = Math.floor(args.maxSlippage * 1e3);
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const ref = args.ref ?? "0x0000000000000000000000000000000000000000";
    const data = gnsDiamond.interface.encodeFunctionData("openTrade", [tradeData, maxSlippage, ref]);
    return { data, to: gnsDiamondAddress };
}
async function buildCloseTradeMarketTx(gnsDiamond, args) {
    const { index } = args;
    const expectedPrice = BigInt(Math.floor(args.expectedPrice * 1e10));
    const maxSlippageP = args.maxSlippageP !== undefined ? BigInt(Math.floor(args.maxSlippageP * 1e3)) : undefined;
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    if (maxSlippageP !== undefined) {
        const data = gnsDiamond.interface.encodeFunctionData("multicall", [
            [
                gnsDiamond.interface.encodeFunctionData("updateMaxClosingSlippageP", [index, maxSlippageP]),
                gnsDiamond.interface.encodeFunctionData("closeTradeMarket", [index, expectedPrice]),
            ],
        ]);
        return { data, to: gnsDiamondAddress };
    }
    const data = gnsDiamond.interface.encodeFunctionData("closeTradeMarket", [index, expectedPrice]);
    return { data, to: gnsDiamondAddress };
}
async function buildCancelOpenOrderTx(gnsDiamond, index) {
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("cancelOpenOrder", [index]);
    return { data, to: gnsDiamondAddress };
}
async function buildCancelOrderAfterTimeoutTx(gnsDiamond, index) {
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("cancelOrderAfterTimeout", [index]);
    return { data, to: gnsDiamondAddress };
}
async function buildDelegatedTradingAction(gnsDiamond, args) {
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("delegatedTradingAction", [args.trader, args.data]);
    return { data, to: gnsDiamondAddress };
}
async function buildMulticallTx(gnsDiamond, calls) {
    const gnsDiamondAddress = await gnsDiamond.getAddress();
    const data = gnsDiamond.interface.encodeFunctionData("multicall", [
        calls.map((call) => (typeof call === "string" ? call : call.data)),
    ]);
    return { data, to: gnsDiamondAddress };
}
