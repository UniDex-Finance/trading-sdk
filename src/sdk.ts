import { ethers } from "ethers";
import { provider } from "./utils/provider";
import { DIAMOND_ADDRESS } from "./config/constants";
import { getRequiredFunction } from "./utils/diamondHelper";
import { multiCall } from "./utils/multicallHelper";
import { Pair, pairs } from "@gainsnetwork/sdk";
import diamondAbi from "./abi/GNSDiamond.json";

export class SDK {
  private diamondContract: ethers.Contract;

  constructor() {
    this.diamondContract = new ethers.Contract(DIAMOND_ADDRESS, diamondAbi, provider);
  }

  public async getAllTrades(offset: number, limit: number): Promise<any> {
    const getAllTradesFn = getRequiredFunction(this.diamondContract, "getAllTrades");

    return await this.diamondContract[getAllTradesFn.name](offset, limit);
  }

  public async getUserTrades(userAddress: string): Promise<any> {
    const getTradesFn = getRequiredFunction(this.diamondContract, "getTrades");

    return await this.diamondContract[getTradesFn.name](userAddress);
  }

  public async getMarkets(): Promise<any[]> {
    const pairCount = true ? 20 : Object.keys(pairs).length;

    const calls = Array.from({ length: pairCount }, (_, index) => ({
      functionName: "pairs",
      args: [index],
    }));

    const results: Pair[] = await multiCall(this.diamondContract, calls);

    return results.map((result) => {
      const { from, to } = result;
      return `${from}/${to}`;
    });
  }
}
