import { ethers } from "ethers";
import { SupportedChainId } from "../config/constants";

export const getProvider = (chainId: SupportedChainId, providerUrl?: string) => {
  if (providerUrl) {
    return new ethers.JsonRpcProvider(providerUrl);
  }
  // default providers
  if (chainId === SupportedChainId.Arbitrum) {
    return new ethers.JsonRpcProvider("https://arbitrum-one.public.blastapi.io");
  }
  if (chainId === SupportedChainId.ArbitrumSepolia) {
    return new ethers.JsonRpcProvider("https://sepolia-rollup.arbitrum.io/rpc");
  }
  if (chainId === SupportedChainId.Base) {
    return new ethers.JsonRpcProvider("https://base-mainnet.public.blastapi.io");
  }
  return new ethers.JsonRpcProvider("https://polygon-rpc.com");
};
