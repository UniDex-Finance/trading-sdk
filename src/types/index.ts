export interface Market {
  from: string; // => marketName
  to: string; /// => marketName
  groupIndex: number; // => category
  index: number; // => marketKey
  pairBorrowingFees: any;
  groupBorrowingFees: any;
  openInterests: any;
  spreadP: number;
  feeIndex: number; // => feeRates
  maxLeverage: number;
  isActive: boolean // => isSuspended
}
