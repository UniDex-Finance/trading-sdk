import { Contract } from "ethers";
import { provider } from "./provider"; // Ensure this is a read-only provider
import { MULTICALL3_ADDRESS } from "../config/constants";
import multicall3Abi from "../abi/Multicall3.json";

const multicallContract = new Contract(MULTICALL3_ADDRESS, multicall3Abi, provider);

export const multiCall = async (contract: Contract, calls: { functionName: string; args: any[] }[]): Promise<any[]> => {
  try {
    const formattedCalls = calls.map((call) => ({
      target: contract.getAddress(),
      allowFailure: false,
      callData: contract.interface.encodeFunctionData(call.functionName, call.args),
    }));

    const response = await multicallContract.aggregate3.staticCall(formattedCalls);

    return response.map(({ success, returnData }, index) => {
      if (!success) {
        throw new Error(`Call failed for function ${calls[index].functionName} at index ${index}`);
      }

      return contract.interface.decodeFunctionResult(calls[index].functionName, returnData)[0];
    });
  } catch (error) {
    console.error("Multicall failed", error);
    throw new Error("Multicall operation failed.");
  }
};
