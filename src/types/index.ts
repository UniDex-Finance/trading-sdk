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
