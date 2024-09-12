import { ethers } from "ethers";
import { provider } from "./utils/provider";
import { CONTRACT_ADDRESSES } from "./config/constants";
import diamondAbi from "./abi/GNSDiamond.json";
import { getRequiredFunction } from "./utils/diamondHelper";
import { multiCall } from "./utils/multicallHelper";
import { Pair, pairs } from "@gainsnetwork/sdk";

export class SDK {
  private diamondContract: ethers.Contract;

  constructor() {
    this.diamondContract = new ethers.Contract(CONTRACT_ADDRESSES.GNS_DIAMOND, diamondAbi, provider);
  }

  public async getAllTrades(offset: number, limit: number): Promise<any> {
    const getAllTradesFn = getRequiredFunction(this.diamondContract, "getAllTrades");

    return await this.diamondContract[getAllTradesFn.name](offset, limit);
  }

  public async getUserTrades(userAddress: string): Promise<any> {
    const getTradesFn = getRequiredFunction(this.diamondContract, "getTrades");

    return await this.diamondContract[getTradesFn.name](userAddress);
  }

  public async getMarkets(): Promise<string[]> {
    const pairCount = 15;

    const calls = Array.from({ length: pairCount }, (_, index) => ({
      functionName: "pairs",
      args: [index],
    }));

    const pairsResponse = (await multiCall(this.diamondContract, calls)).map(
      ({ from, to, spreadP, groupIndex, feeIndex }) => ({
        from,
        to,
        spreadP,
        groupIndex,
        feeIndex,
      })
    ) as Pair[];

    return pairsResponse.map((pair: Pair) => `${pair.from}/${pair.to}`);
  }
}
