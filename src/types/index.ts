import { CollateralConfig } from "@gainsnetwork/sdk";

// export type State = {
//   collaterals: CollateralConfig[],
//   groups,
//   pairs,
//   fees,
//   maxPairLeverages,
//   groupBorrowingFees,
//   pairBorrowingFees,
//   maxGainP: 900,
//   feeTiers,
// }

export interface Market {
  from: string; // => marketName
  to: string; // => marketName
  groupIndex: bigint; // => category
  index: number; // => marketKey
  pairBorrowingFees: any;
  groupBorrowingFees: any;
  openInterests: any;
  spreadP: bigint;
  feeIndex: bigint; // => feeRates
  minLeverage: bigint;
  maxLeverage: bigint;
  isActive: boolean; // => isSuspended
}

export interface Position {
  pairIndex: number; // => marketKey
  user: string;
  index: bigint;
  long: boolean; // => side
  openPrice: bigint; // => avgEntryPrice
  positionSize: bigint; // => notionalValue
  positionSizeInToken: bigint; // => size
  borrowingFee: bigint; // => owedInterest
  closingFee: bigint; // => borrowingFee + closingFee => totalFees
  liquidationPrice: bigint;
  leverage: bigint;
  pnl: {
    netPnl: bigint; // => realizedPnl.netPnl
    netPnlP: bigint; // => realizedPnl.netPnlPct
    uPnL: bigint; // => unrealizedPnl.pnl
    uPnLP: bigint; // => unrealizedPnl.netPnlPct
  };
  maxLeverage: bigint;
}

export enum PositionSide {
  LONG,
  SHORT,
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

export type PendingTransactionDetails = {
  count: number;
  latestNonce: number;
};
