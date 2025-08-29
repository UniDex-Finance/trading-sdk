"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MULTICALL3_ADDRESS = exports.BACKEND_ADDRESSES = exports.GNS_DIAMOND_ADDRESSES = exports.SupportedChainId = void 0;
var SupportedChainId;
(function (SupportedChainId) {
    SupportedChainId[SupportedChainId["Arbitrum"] = 42161] = "Arbitrum";
    SupportedChainId[SupportedChainId["ArbitrumSepolia"] = 421614] = "ArbitrumSepolia";
    SupportedChainId[SupportedChainId["Polygon"] = 137] = "Polygon";
    SupportedChainId[SupportedChainId["Base"] = 8453] = "Base";
    SupportedChainId[SupportedChainId["Apechain"] = 33139] = "Apechain";
})(SupportedChainId || (exports.SupportedChainId = SupportedChainId = {}));
exports.GNS_DIAMOND_ADDRESSES = {
    [SupportedChainId.Arbitrum]: "0xFF162c694eAA571f685030649814282eA457f169",
    [SupportedChainId.ArbitrumSepolia]: "0xd659a15812064C79E189fd950A189b15c75d3186",
    [SupportedChainId.Base]: "0x6cD5aC19a07518A8092eEFfDA4f1174C72704eeb",
    [SupportedChainId.Polygon]: "0x209A9A01980377916851af2cA075C2b170452018",
    [SupportedChainId.Apechain]: "0x2BE5D7058AdBa14Bc38E4A83E94A81f7491b0163",
};
exports.BACKEND_ADDRESSES = {
    [SupportedChainId.Arbitrum]: "https://backend-arbitrum.gains.trade",
    [SupportedChainId.ArbitrumSepolia]: "https://backend-sepolia.gains.trade",
    [SupportedChainId.Base]: "https://backend-base.gains.trade",
    [SupportedChainId.Polygon]: "https://backend-polygon.gains.trade",
    [SupportedChainId.Apechain]: "https://backend-apechain.gains.trade",
};
exports.MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
