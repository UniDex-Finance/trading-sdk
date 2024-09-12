import { Contract } from "ethers";

export const multiCall = async (contract: Contract, calls: { functionName: string; args: any[] }[]) => {
  try {
    const encodedCalls = calls.map((call) => contract.interface.encodeFunctionData(call.functionName, call.args));
    
    const rawResponses = await contract.runner!.provider!.call({
      to: contract.target,
      data: contract.interface.encodeFunctionData("multicall", [encodedCalls]),
    });

    const decodedMulticallResponse = contract.interface.decodeFunctionResult("multicall", rawResponses)[0];
    return decodedMulticallResponse.map((response: string, index: number) => {
      return contract.interface.decodeFunctionResult(calls[index].functionName, response)[0];
    });
  } catch (error) {
    console.error("Multicall failed", error);
    throw new Error("Multicall operation failed.");
  }
};
