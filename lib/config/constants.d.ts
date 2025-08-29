export declare enum SupportedChainId {
    Arbitrum = 42161,
    ArbitrumSepolia = 421614,
    Polygon = 137,
    Base = 8453,
    Apechain = 33139
}
export declare const GNS_DIAMOND_ADDRESSES: {
    [chainId in SupportedChainId]: string;
};
export declare const BACKEND_ADDRESSES: {
    [chainId in SupportedChainId]: string;
};
export declare const MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
