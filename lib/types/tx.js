"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyPositionTxType = void 0;
var ModifyPositionTxType;
(function (ModifyPositionTxType) {
    ModifyPositionTxType[ModifyPositionTxType["INCREASE_POSITION_SIZE"] = 0] = "INCREASE_POSITION_SIZE";
    ModifyPositionTxType[ModifyPositionTxType["DECREASE_POSITION_SIZE"] = 1] = "DECREASE_POSITION_SIZE";
    ModifyPositionTxType[ModifyPositionTxType["UPDATE_SL"] = 2] = "UPDATE_SL";
    ModifyPositionTxType[ModifyPositionTxType["UPDATE_TP"] = 3] = "UPDATE_TP";
    ModifyPositionTxType[ModifyPositionTxType["UPDATE_LEVERAGE"] = 4] = "UPDATE_LEVERAGE";
    ModifyPositionTxType[ModifyPositionTxType["UPDATE_OPEN_ORDER"] = 5] = "UPDATE_OPEN_ORDER";
    ModifyPositionTxType[ModifyPositionTxType["UPDATE_MAX_CLOSING_SLIPPAGE_P"] = 6] = "UPDATE_MAX_CLOSING_SLIPPAGE_P";
})(ModifyPositionTxType || (exports.ModifyPositionTxType = ModifyPositionTxType = {}));
