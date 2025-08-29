"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiCall = void 0;
const multiCall = async (multicall3, targetContract, calls) => {
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
            return targetContract.interface.decodeFunctionResult(calls[index].functionName, returnData);
        });
    }
    catch (error) {
        console.error("Multicall failed", error);
        throw new Error("Multicall operation failed.");
    }
};
exports.multiCall = multiCall;
