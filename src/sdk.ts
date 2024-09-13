import { getProvider } from "./utils/provider";
import { GNS_DIAMOND_ADDRESSES, MULTICALL3_ADDRESS, SupportedChainId } from "./config/constants";
import { multiCall } from "./utils/multicallHelper";
import { Pair, pairs } from "@gainsnetwork/sdk";
import { GNSDiamond, GNSDiamond__factory, Multicall3__factory } from "./types/contracts";
import { Contract, ethers } from "ethers";

export class SDK {
  private chainId: SupportedChainId;
  private gnsDiamond: GNSDiamond;
  private multicall3: Contract;

  constructor(chainId: SupportedChainId) {
    this.chainId = chainId;

    const provider = getProvider(chainId);

    this.gnsDiamond = GNSDiamond__factory.connect(GNS_DIAMOND_ADDRESSES[chainId], provider);
    this.multicall3 = new ethers.Contract(MULTICALL3_ADDRESS, Multicall3__factory.abi, provider);
  }

  public async getAllTrades(offset: number, limit: number): Promise<any> {
    const allTrades = await this.gnsDiamond.getAllTrades(offset, limit);

    return allTrades;
  }

  public async getUserTrades(userAddress: string): Promise<any> {
    const userTrades = await this.gnsDiamond.getTrades(userAddress);

    return userTrades;
  }

  public async getMarkets(): Promise<any[]> {
    const pairCount = true ? 20 : Object.keys(pairs).length;

    const calls = Array.from({ length: pairCount }, (_, index) => ({
      functionName: "pairs",
      args: [index],
    }));

    const results: Pair[] = await multiCall(this.multicall3, this.gnsDiamond, calls);

    return results.map((result) => {
      const { from, to } = result;
      return `${from}/${to}`;
    });
  }
}
