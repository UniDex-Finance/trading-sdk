import { ethers } from "ethers";
import { SupportedChainId } from "../config/constants";
export declare const getProvider: (chainId: SupportedChainId, providerUrl?: string) => ethers.JsonRpcProvider;
