import { BorrowingFee, CollateralConfig, Fee, FeeTiers, Pair, TradingGroup } from "@gainsnetwork/sdk";

export type State = {
  collaterals: CollateralConfig[];
  groups: TradingGroup[];
  pairs: Pair[];
  fees: Fee[];
  maxPairLeverages: number[];
  groupBorrowingFees: BorrowingFee.Group[][];
  pairBorrowingFees: BorrowingFee.Pair[][];
  maxGainP: number;
  feeTiers: FeeTiers;
};

export type PendingTransactionDetails = {
  count: number;
  latestNonce: number;
};

export * from "./contracts";
export * from "./tx";
