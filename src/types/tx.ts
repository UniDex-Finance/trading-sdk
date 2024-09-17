export enum ModifyPositionTxType {
  INCREASE_POSITION_SIZE,
  DECREASE_POSITION_SIZE,
  UPDATE_SL,
  UPDATE_TP,
  UPDATE_LEVERAGE,
}

export type UpdatePositionSizeTxArgs = {
  type: ModifyPositionTxType.INCREASE_POSITION_SIZE | ModifyPositionTxType.DECREASE_POSITION_SIZE;
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

export type ModifyPositionTxArgs = UpdatePositionSizeTxArgs | UpdateSlTxArgs | UpdateTpTxArgs | UpdateLeverageTxArgs;

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
