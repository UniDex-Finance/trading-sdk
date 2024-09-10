import { ethers } from "ethers";

export const getRequiredFunction = (contract: ethers.Contract, functionName: string): ethers.FunctionFragment => {
  const fragment = contract.interface.getFunction(functionName);
  if (!fragment) {
    throw new Error(`Function ${functionName} not found in contract interface`);
  }
  return fragment;
};
