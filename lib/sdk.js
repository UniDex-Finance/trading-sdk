"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingSDK = void 0;
const getProvider_1 = require("./utils/getProvider");
const constants_1 = require("./config/constants");
const multicallHelper_1 = require("./utils/multicallHelper");
const sdk_1 = require("@gainsnetwork/sdk");
const contracts_1 = require("./types/contracts");
const ethers_1 = require("ethers");
const ERC20_json_1 = __importDefault(require("./abi/ERC20.json"));
const tx_1 = require("./types/tx");
const tx_2 = require("./libs/tx");
const dataConverter_1 = require("./utils/dataConverter");
const backend_1 = require("./services/backend");
class TradingSDK {
    constructor({ chainId, signer, rpcProviderUrl }) {
        this.state = {};
        this.lastRefreshedTs = Date.now();
        this.initialized = false;
        this.chainId = chainId;
        this.signer = signer;
        this.runner = this.signer ?? (0, getProvider_1.getProvider)(chainId, rpcProviderUrl);
        this.gnsDiamond = contracts_1.GNSDiamond__factory.connect(constants_1.GNS_DIAMOND_ADDRESSES[chainId], this.runner);
        this.multicall3 = new ethers_1.ethers.Contract(constants_1.MULTICALL3_ADDRESS, contracts_1.Multicall3__factory.abi, this.runner);
        this.backend = new backend_1.Backend(chainId);
    }
    async initialize() {
        await this.refreshState();
        this.initialized = true;
    }
    async refreshState() {
        const [collaterals, maxPairLeverages, groupsCount, feesCount, feeTiersCount] = await Promise.all([
            this.gnsDiamond.getCollaterals(),
            this.gnsDiamond.getAllPairsRestrictedMaxLeverage(),
            this.gnsDiamond.groupsCount(),
            this.gnsDiamond.feesCount(),
            this.gnsDiamond.getFeeTiersCount(),
        ]);
        const pairCount = Object.keys(sdk_1.pairs).length;
        const pairCalls = Array.from({ length: pairCount }, (_, index) => ({
            functionName: "pairs",
            args: [index],
        }));
        const groupCalls = Array.from({ length: Number(groupsCount) }, (_, index) => ({
            functionName: "groups",
            args: [index],
        }));
        const feesCalls = Array.from({ length: Number(feesCount) }, (_, index) => ({
            functionName: "fees",
            args: [index],
        }));
        const feeTiersCalls = Array.from({ length: Number(feeTiersCount) }, (_, index) => ({
            functionName: "getFeeTier",
            args: [index],
        }));
        const feeMultipliersCalls = Array.from({ length: Number(groupsCount) }, (_, index) => ({
            functionName: "getGroupVolumeMultiplier",
            args: [index],
        }));
        const pairBorrowingFeesCalls = collaterals.map(({ collateral }, index) => {
            return {
                functionName: "getAllBorrowingPairs",
                args: [index + 1],
            };
        });
        const pairLiquidationParamsCalls = Array.from({ length: pairCount }, (_, index) => ({
            functionName: "getPairLiquidationParams",
            args: [index],
        }));
        const groupLiquidationParamsCalls = Array.from({ length: Number(groupsCount) }, (_, index) => ({
            functionName: "getGroupLiquidationParams",
            args: [index],
        }));
        const [pairResults, groupsResults, feesResults, feeTiersResults, feeMultipliersResults, pairBorrowingFeesResults, pairLiquidationParamsResults, groupLiquidationParamsResults,] = (await Promise.all([
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, pairCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, groupCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, feesCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, feeTiersCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, feeMultipliersCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, pairBorrowingFeesCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, pairLiquidationParamsCalls),
            (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, groupLiquidationParamsCalls),
        ]));
        const pairs = (0, dataConverter_1.convertTradingPairs)(pairResults.map((pair) => pair[0]));
        const groups = (0, dataConverter_1.convertTradingGroups)(groupsResults.map((group) => group[0]));
        const fees = (0, dataConverter_1.convertFees)(feesResults.map((fee) => fee[0]));
        const feeTiers = (0, dataConverter_1.convertFeeTiers)({
            tiers: feeTiersResults.map((feeTier) => feeTier[0]),
            multipliers: feeMultipliersResults.map((feeMultiplier) => feeMultiplier[0]),
        });
        const pairBorrowingFees = collaterals.map(({ collateral }, index) => {
            const borrowingDataArr = pairBorrowingFeesResults[index][0];
            const borrowingOiArr = pairBorrowingFeesResults[index][1];
            const borrowingPairGroups = pairBorrowingFeesResults[index][2];
            return borrowingDataArr.map((borrowingData, pairIndex) => {
                const pairGroups = borrowingPairGroups[pairIndex];
                return (0, dataConverter_1.convertPairBorrowingFee)({
                    accFeeLong: borrowingData.accFeeLong,
                    accFeeShort: borrowingData.accFeeShort,
                    accLastUpdatedBlock: borrowingData.accLastUpdatedBlock,
                    feeExponent: borrowingData.feeExponent,
                    feePerBlock: borrowingData.feePerBlock,
                    oi: borrowingOiArr[pairIndex],
                    groups: pairGroups?.length ? pairGroups : [],
                });
            });
        });
        // group borrowing fees
        const groupBorrowingFeesCalls = collaterals.map(({ collateral }, index) => {
            const pairBorrowingResult = pairBorrowingFeesResults[index];
            const borrowingFeesGroupIds = [
                ...new Set(pairBorrowingResult[2].map((pair) => pair.map((pair) => pair.groupIndex)).flat()),
            ].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
            return {
                functionName: "getBorrowingGroups",
                args: [
                    index + 1,
                    Array.from(Array(Number(borrowingFeesGroupIds[borrowingFeesGroupIds.length - 1]) + 1).keys()),
                ],
            };
        });
        const groupBorrowingFeesResults = await (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, groupBorrowingFeesCalls);
        const groupBorrowingFees = collaterals.map(({ collateral }, index) => {
            const borrowingDataArr = groupBorrowingFeesResults[index][0];
            const borrowingOiArr = groupBorrowingFeesResults[index][1];
            return borrowingDataArr.map((borrowingData, groupIndex) => {
                return (0, dataConverter_1.convertGroupBorrowingFee)({
                    accFeeLong: borrowingData.accFeeLong,
                    accFeeShort: borrowingData.accFeeShort,
                    accLastUpdatedBlock: borrowingData.accLastUpdatedBlock,
                    feeExponent: borrowingData.feeExponent,
                    feePerBlock: borrowingData.feePerBlock,
                    oi: borrowingOiArr[groupIndex],
                });
            });
        });
        // collateral configs
        const tokenData = await Promise.all(collaterals.map(({ collateral }) => {
            const token = new ethers_1.Contract(collateral, ERC20_json_1.default, this.runner);
            return Promise.all([token.decimals(), token.symbol()]);
        }));
        const collateralsWithDecimalsAndSymbols = collaterals.map(({ collateral, precision, precisionDelta, isActive }, index) => {
            const [decimals, symbol] = tokenData[index];
            return {
                collateral,
                decimals,
                symbol,
                isActive,
                precision,
                precisionDelta,
            };
        });
        const collateralConfigs = collateralsWithDecimalsAndSymbols.map(dataConverter_1.convertCollateralConfig);
        const pairLiquidationParams = pairLiquidationParamsResults.map(([liqParams]) => (0, dataConverter_1.convertLiquidationParams)(liqParams));
        const groupLiquidationParams = groupLiquidationParamsResults.map(([liqParams]) => (0, dataConverter_1.convertLiquidationParams)(liqParams));
        this.lastRefreshedTs = Date.now();
        this.state = {
            collaterals: collateralConfigs,
            groups,
            pairs,
            fees,
            maxPairLeverages: maxPairLeverages.map((maxLev) => Number(maxLev) / 1e3),
            groupBorrowingFees,
            pairBorrowingFees,
            feeTiers,
            liquidationParams: { pairs: pairLiquidationParams, groups: groupLiquidationParams },
        };
    }
    async getState() {
        return this.state;
    }
    async getUserTrades(account) {
        const { collaterals } = this.state;
        const [trades, tradeInfos, liquidationParams] = await Promise.all([
            this.gnsDiamond.getTrades(account),
            this.gnsDiamond.getTradeInfos(account),
            this.gnsDiamond.getTradesLiquidationParams(account),
        ]);
        const initialAccFeesCalls = trades
            .map((trade) => ({
            collateralIndex: trade.collateralIndex,
            user: trade.user,
            index: trade.index,
        }))
            .map(({ collateralIndex, user, index }) => {
            return {
                functionName: "getBorrowingInitialAccFees",
                args: [collateralIndex, user, index],
            };
        });
        const initialAccFeesResults = await (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, initialAccFeesCalls);
        const initialAccFees = initialAccFeesResults.map((result) => result[0]);
        return trades.map((trade, index) => {
            const tradeInfo = tradeInfos[index];
            const liqParams = liquidationParams[index];
            const initialAccFee = initialAccFees[index];
            return (0, dataConverter_1.convertTradeContainer)({
                trade,
                tradeInfo,
                liquidationParams: liqParams,
                initialAccFees: initialAccFee,
            }, collaterals);
        });
    }
    async getTraderFeeTiers(account) {
        const currentDay = (0, sdk_1.getCurrentDay)();
        const expiringDay = currentDay - 30;
        const [{ lastDayUpdated: lastDayUpdatedRaw, trailingPoints: trailingPointsRaw }, { feeMultiplierCache: currentFeeMultiplierCacheRaw, points: currentPointsRaw }, { feeMultiplierCache: expiringFeeMultiplierCacheRaw, points: expiringPointsRaw }, traderEnrollment,] = (await (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, [
            {
                functionName: "getFeeTiersTraderInfo",
                args: [account],
            },
            {
                functionName: "getFeeTiersTraderDailyInfo",
                args: [account, currentDay],
            },
            {
                functionName: "getFeeTiersTraderDailyInfo",
                args: [account, expiringDay],
            },
            {
                functionName: "getTraderFeeTiersEnrollment",
                args: [account],
            },
        ])).map((result) => result[0]);
        const traderInfo = {
            lastDayUpdated: lastDayUpdatedRaw,
            trailingPoints: trailingPointsRaw,
        };
        const currentTraderDailyInfo = {
            feeMultiplierCache: currentFeeMultiplierCacheRaw,
            points: currentPointsRaw,
        };
        const expiringTraderDailyInfo = {
            feeMultiplierCache: expiringFeeMultiplierCacheRaw,
            points: expiringPointsRaw,
        };
        const calls = [];
        if (Number(traderInfo.lastDayUpdated) > Number(0)) {
            const earliestExpiredDay = Math.max(Number(traderInfo.lastDayUpdated) - 30, expiringDay - 30);
            for (let day = expiringDay - 1; day >= earliestExpiredDay; day--) {
                calls.push({
                    functionName: "getFeeTiersTraderDailyInfo",
                    args: [account, day],
                });
            }
        }
        calls.push({
            functionName: "getFeeTiersTraderDailyInfo",
            args: [account, Number(traderInfo.lastDayUpdated)],
        });
        const daysInfoResults = await (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, calls);
        const daysInfo = daysInfoResults.map((dayInfoResult) => {
            const dayInfo = dayInfoResult[0];
            return {
                points: dayInfo.points,
                feeMultiplierCache: dayInfo.feeMultiplierCache,
            };
        });
        const expiredDaysInfo = daysInfo.slice(0, -1);
        const lastDayUpdatedInfo = daysInfo[daysInfo.length - 1];
        return (0, dataConverter_1.convertTraderFeeTiers)({
            traderInfo,
            traderEnrollment,
            lastDayUpdatedPoints: lastDayUpdatedInfo.points,
            inboundPoints: currentTraderDailyInfo.points,
            outboundPoints: expiringTraderDailyInfo.points,
            expiredPoints: expiredDaysInfo.map((dayInfo) => dayInfo.points),
        });
    }
    async getTraderHistory(account) {
        const addHistoryEntries = (trade, traderBackendData) => {
            return {
                ...trade,
                history: traderBackendData
                    .filter((it) => it.tradeIndex === trade.index)
                    .map((t) => {
                    return {
                        action: t.action,
                        date: t.date,
                        block: t.block,
                        leverage: t.leverage,
                        collateralAmount: t.size,
                        collateralPriceUsd: t.collateralPriceUsd,
                        tx: t.tx,
                        marketPrice: t.marketPrice,
                        pnl: t.pnl_net,
                        openPrice: t.price,
                        leverageDelta: t.leverageDelta,
                        collateralDelta: t.collateralDelta,
                    };
                })
                    .reverse(),
            };
        };
        const { collaterals } = this.state;
        const accountCounters = await this.gnsDiamond.getCounters(account, 0);
        const userTradesBackend = await this.backend.getTraderHistory(account);
        const userTradesAndOrdersCalls = Array.from({ length: Number(accountCounters.currentIndex) }, (_, index) => ({
            functionName: "getTrade",
            args: [account, index],
        }));
        const userTradesAndOrdersResults = await (0, multicallHelper_1.multiCall)(this.multicall3, this.gnsDiamond, userTradesAndOrdersCalls);
        const userTradesAndOrders = userTradesAndOrdersResults
            .map((trade) => (0, dataConverter_1.convertTrade)(trade[0], collaterals))
            .map((trade) => addHistoryEntries(trade, userTradesBackend));
        const userTrades = userTradesAndOrders.filter((trade) => trade.tradeType === sdk_1.TradeType.TRADE);
        const userOrders = userTradesAndOrders.filter((trade) => trade.tradeType === sdk_1.TradeType.LIMIT || trade.tradeType === sdk_1.TradeType.STOP);
        return {
            trades: userTrades,
            orders: userOrders,
        };
    }
    get build() {
        return {
            modifyPosition: async (args) => {
                if (args.type === tx_1.ModifyPositionTxType.INCREASE_POSITION_SIZE ||
                    args.type === tx_1.ModifyPositionTxType.DECREASE_POSITION_SIZE) {
                    return (0, tx_2.buildUpdatePositionSizeTx)(this.gnsDiamond, args);
                }
                if (args.type === tx_1.ModifyPositionTxType.UPDATE_SL) {
                    return (0, tx_2.buildUpdateSlTx)(this.gnsDiamond, args);
                }
                if (args.type === tx_1.ModifyPositionTxType.UPDATE_TP) {
                    return (0, tx_2.buildUpdateTpTx)(this.gnsDiamond, args);
                }
                if (args.type === tx_1.ModifyPositionTxType.UPDATE_LEVERAGE) {
                    return (0, tx_2.buildUpdateLeverageTx)(this.gnsDiamond, args);
                }
                if (args.type === tx_1.ModifyPositionTxType.UPDATE_OPEN_ORDER) {
                    return (0, tx_2.buildUpdateOpenOrderTx)(this.gnsDiamond, args);
                }
                if (args.type === tx_1.ModifyPositionTxType.UPDATE_MAX_CLOSING_SLIPPAGE_P) {
                    return (0, tx_2.buildUpdateMaxClosingSlippagePTx)(this.gnsDiamond, args);
                }
            },
            openTrade: async (args) => {
                return (0, tx_2.buildOpenTradeTx)(this.gnsDiamond, args);
            },
            closeTradeMarket: async (args) => {
                return (0, tx_2.buildCloseTradeMarketTx)(this.gnsDiamond, args);
            },
            cancelOpenOrder: async (index) => {
                return (0, tx_2.buildCancelOpenOrderTx)(this.gnsDiamond, index);
            },
            cancelOrderAfterTimeout: async (index) => {
                return (0, tx_2.buildCancelOrderAfterTimeoutTx)(this.gnsDiamond, index);
            },
            delegatedTradingAction: async (args) => {
                return (0, tx_2.buildDelegatedTradingAction)(this.gnsDiamond, args);
            },
            multicall: async (calls) => {
                return (0, tx_2.buildMulticallTx)(this.gnsDiamond, calls);
            },
        };
    }
    get write() {
        if (!this.signer) {
            throw new Error("Signer requried for write methods");
        }
        return {
            modifyPosition: async (args) => {
                const tx = await this.build.modifyPosition(args);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
            openTrade: async (args) => {
                const tx = await this.build.openTrade(args);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
            closeTradeMarket: async (args) => {
                const tx = await this.build.closeTradeMarket(args);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
            cancelOpenOrder: async (index) => {
                const tx = await this.build.cancelOpenOrder(index);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
            cancelOrderAfterTimeout: async (index) => {
                const tx = await this.build.cancelOrderAfterTimeout(index);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
            multicall: async (calls) => {
                const tx = await this.build.multicall(calls);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
            delegatedTradingAction: async (args) => {
                const tx = await this.build.delegatedTradingAction(args);
                const hash = await this.signer?.sendTransaction({ ...tx, chainId: this.chainId });
                return hash;
            },
        };
    }
}
exports.TradingSDK = TradingSDK;
