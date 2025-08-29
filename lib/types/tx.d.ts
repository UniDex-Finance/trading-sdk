export type BuildTransactionOutput = {
    data: string;
    to: string;
};
export declare enum ModifyPositionTxType {
    INCREASE_POSITION_SIZE = 0,
    DECREASE_POSITION_SIZE = 1,
    UPDATE_SL = 2,
    UPDATE_TP = 3,
    UPDATE_LEVERAGE = 4,
    UPDATE_OPEN_ORDER = 5,
    UPDATE_MAX_CLOSING_SLIPPAGE_P = 6
}
export type UpdatePositionSizeTxType = ModifyPositionTxType.INCREASE_POSITION_SIZE | ModifyPositionTxType.DECREASE_POSITION_SIZE;
export type UpdatePositionSizeTxArgs = {
    type: UpdatePositionSizeTxType;
    index: number;
    collateralDelta: bigint;
    leverageDelta: number;
    maxSlippageP: number;
    expectedPrice: number;
    updateMaxClosingSlippageP?: boolean;
};
export type UpdateSlTxArgs = {
    type: ModifyPositionTxType.UPDATE_SL;
    index: number;
    stopLossPrice: number;
    maxSlippageP?: number;
};
export type UpdateTpTxArgs = {
    type: ModifyPositionTxType.UPDATE_TP;
    index: number;
    takeProfitPrice: number;
    maxSlippageP?: number;
};
export type UpdateLeverageTxArgs = {
    type: ModifyPositionTxType.UPDATE_LEVERAGE;
    index: number;
    leverage: number;
};
export type UpdateOpenOrderTxArgs = {
    type: ModifyPositionTxType.UPDATE_OPEN_ORDER;
    index: number;
    triggerPrice: number;
    takeProfitPrice: number;
    stopLossPrice: number;
    maxSlippageP: number;
};
export type updateMaxClosingSlippagePTxArgs = {
    type: ModifyPositionTxType.UPDATE_MAX_CLOSING_SLIPPAGE_P;
    index: number;
    maxSlippageP: number;
};
export type ModifyPositionTxArgs = UpdatePositionSizeTxArgs | UpdateSlTxArgs | UpdateTpTxArgs | UpdateLeverageTxArgs | UpdateOpenOrderTxArgs | updateMaxClosingSlippagePTxArgs;
export type OpenTradeTxArgs = {
    user: string;
    pairIndex: number;
    collateralAmount: bigint;
    openPrice: number;
    long: boolean;
    leverage: number;
    tp: number;
    sl: number;
    collateralIndex: number;
    tradeType: number;
    maxSlippage: number;
    ref?: string;
};
export type CloseTradeMarketTxArgs = {
    index: number;
    expectedPrice: number;
    maxSlippageP?: number;
};
export type DelegatedTradingActionTxArgs = {
    trader: string;
    data: string;
};
export type MulticallTxArgs = BuildTransactionOutput[] | string[];
