"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequiredFunction = void 0;
const getRequiredFunction = (contract, functionName) => {
    const fragment = contract.interface.getFunction(functionName);
    if (!fragment) {
        throw new Error(`Function ${functionName} not found in contract interface`);
    }
    return fragment;
};
exports.getRequiredFunction = getRequiredFunction;
