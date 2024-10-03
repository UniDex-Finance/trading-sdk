export enum SupportedChainId {
  Arbitrum = 42161,
  ArbitrumSepolia = 421614,
  Polygon = 137,
  Base = 8453,
}

export const GNS_DIAMOND_ADDRESSES: { [chainId in SupportedChainId]: string } = {
  [SupportedChainId.Arbitrum]: "0xFF162c694eAA571f685030649814282eA457f169",
  [SupportedChainId.ArbitrumSepolia]: "0xd659a15812064C79E189fd950A189b15c75d3186",
  [SupportedChainId.Base]: "0x6cD5aC19a07518A8092eEFfDA4f1174C72704eeb",
  [SupportedChainId.Polygon]: "0x209A9A01980377916851af2cA075C2b170452018",
};

export const BACKEND_ADDRESSES: { [chainId in SupportedChainId]: string } = {
  [SupportedChainId.Arbitrum]: "https://backend-arbitrum.gains.trade",
  [SupportedChainId.ArbitrumSepolia]: "https://backend-sepolia.gains.trade",
  [SupportedChainId.Base]: "https://backend-base.gains.trade",
  [SupportedChainId.Polygon]: "https://backend-polygon.gains.trade",
};

export const MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
