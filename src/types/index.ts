export interface Market {
  from: string; // => marketName
  to: string; /// => marketName
  groupIndex: bigint; // => category
  index: number; // => marketKey
  pairBorrowingFees: any;
  groupBorrowingFees: any;
  openInterests: any;
  spreadP: bigint;
  feeIndex: bigint; // => feeRates
  maxLeverage: bigint;
  isActive: boolean; // => isSuspended
}

export type Pair = {
  name: string;
  description: string;
  from: string;
  to: string;
  feeIndex: bigint;
  groupIndex: bigint;
  pairIndex: bigint;
  spreadP: bigint;
};

export enum ModifyPositionDirection {
  INCREASE,
  DECREASE,
}

export type ModifyPositionParams = {
  index: number; // => marketId
  collateralDelta: bigint; // => sizeDelta
  leverageDelta: number; // => marginDelta
  direction: ModifyPositionDirection;
  slippageP: number;
  expectedPrice: number;
};

export type SubmitConditionalOrderParams = {
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

export type CancelConditionalOrderParams = {
  index: number;
  expectedPrice: number;
  slippageP?: number;
};
