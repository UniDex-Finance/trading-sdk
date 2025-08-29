import { BaseContract, Contract } from "ethers";
export declare const multiCall: (multicall3: Contract, targetContract: BaseContract, calls: {
    functionName: string;
    args: any[];
}[]) => Promise<any[]>;
