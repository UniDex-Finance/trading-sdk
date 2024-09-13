import { BaseContract, Contract } from "ethers";

export const multiCall = async (
  multicall3: Contract,
  targetContract: BaseContract,
  calls: { functionName: string; args: any[] }[]
): Promise<any[]> => {
  try {
    const formattedCalls = calls.map((call) => ({
      target: targetContract.getAddress(),
      allowFailure: false,
      callData: targetContract.interface.encodeFunctionData(call.functionName, call.args),
    }));

    const response = await multicall3.aggregate3.staticCall(formattedCalls);

    return response.map(({ success, returnData }, index) => {
      if (!success) {
        throw new Error(`Call failed for function ${calls[index].functionName} at index ${index}`);
      }

      return targetContract.interface.decodeFunctionResult(calls[index].functionName, returnData)[0];
    });
  } catch (error) {
    console.error("Multicall failed", error);
    throw new Error("Multicall operation failed.");
  }
};
