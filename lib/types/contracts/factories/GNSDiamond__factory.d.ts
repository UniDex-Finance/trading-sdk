import { type ContractRunner } from "ethers";
import type { GNSDiamond, GNSDiamondInterface } from "../GNSDiamond";
export declare class GNSDiamond__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AboveMax";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BelowMin";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BlockOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DoesntExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InitError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_initializationContractAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }];
        readonly name: "InitializationFunctionReverted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAddresses";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCollateralIndex";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFacetCutAction";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInputLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotAuthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotFound";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Overflow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Paused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsupportedChain";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongAccess";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongIndex";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongOrderType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongParams";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongTradeType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroValue";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "enum IAddressStore.Role";
            readonly name: "role";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "access";
            readonly type: "bool";
        }];
        readonly name: "AccessControlUpdated";
        readonly type: "event";
        readonly signature: "0x8d7fdec37f50c07219a6a0859420936836eb9254bf412035e3acede18b8b093d";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "gns";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gnsStaking";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasury";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct IAddressStore.Addresses";
            readonly name: "addresses";
            readonly type: "tuple";
        }];
        readonly name: "AddressesUpdated";
        readonly type: "event";
        readonly signature: "0x7b2fde61973b60e9083bea5f934d31d97c530deecb02e158dfa0280c8bc3f71a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "enum IDiamondStorage.FacetCutAction";
                readonly name: "action";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly indexed: false;
            readonly internalType: "struct IDiamondStorage.FacetCut[]";
            readonly name: "_diamondCut";
            readonly type: "tuple[]";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_init";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }];
        readonly name: "DiamondCut";
        readonly type: "event";
        readonly signature: "0x8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
        readonly signature: "0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "enum IDiamondStorage.FacetCutAction";
                readonly name: "action";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct IDiamondStorage.FacetCut[]";
            readonly name: "_faceCut";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "_init";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }];
        readonly name: "diamondCut";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x1f931c1c";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_functionSelector";
            readonly type: "bytes4";
        }];
        readonly name: "facetAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "facetAddress_";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xcdffacc6";
    }, {
        readonly inputs: readonly [];
        readonly name: "facetAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "facetAddresses_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x52ef6b2c";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_facet";
            readonly type: "address";
        }];
        readonly name: "facetFunctionSelectors";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "facetFunctionSelectors_";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xadfca15e";
    }, {
        readonly inputs: readonly [];
        readonly name: "facets";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "facetAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "functionSelectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct IGNSDiamondLoupe.Facet[]";
            readonly name: "facets_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x7a0ed627";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAddresses";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "gns";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "gnsStaking";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "treasury";
                readonly type: "address";
            }];
            readonly internalType: "struct IAddressStore.Addresses";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa39fac12";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "enum IAddressStore.Role";
            readonly name: "_role";
            readonly type: "uint8";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x95a8c58d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }, {
            readonly internalType: "enum IAddressStore.Role";
            readonly name: "_roleA";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum IAddressStore.Role";
            readonly name: "_roleB";
            readonly type: "uint8";
        }];
        readonly name: "hasRoles";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb9c97229";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_govTimelock";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc4d66de8";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_accounts";
            readonly type: "address[]";
        }, {
            readonly internalType: "enum IAddressStore.Role[]";
            readonly name: "_roles";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "_values";
            readonly type: "bool[]";
        }];
        readonly name: "setRoles";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x101e6503";
    }, {
        readonly inputs: readonly [];
        readonly name: "EndLeverageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EndLiqThresholdTooLow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FeeNotListed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "GroupNotListed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MaxLiqSpreadPTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PairAlreadyListed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PairNotListed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StartLeverageTooLow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StartLiqThresholdTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongFees";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongLeverages";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongLiqParamsLeverages";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongLiqParamsThresholds";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "totalPositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "totalLiqCollateralFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "oraclePositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint32";
                readonly name: "minPositionSizeUsd";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint104";
                readonly name: "__placeholder";
                readonly type: "uint104";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPairsStorage.FeeGroup";
            readonly name: "feeGroup";
            readonly type: "tuple";
        }];
        readonly name: "FeeAdded";
        readonly type: "event";
        readonly signature: "0x13b1e39f208d3f600b2dfd43c294bc9fb9518d7b57f027fdb0572d8a84cee278";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "totalPositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "totalLiqCollateralFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "oraclePositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint32";
                readonly name: "minPositionSizeUsd";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint104";
                readonly name: "__placeholder";
                readonly type: "uint104";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPairsStorage.FeeGroup";
            readonly name: "feeGroup";
            readonly type: "tuple";
        }];
        readonly name: "FeeUpdated";
        readonly type: "event";
        readonly signature: "0xb38258bbe4602eb8456888a284ddf8f9f9acc06f4699fce677ddd34941ed35cb";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "referralFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "govFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "triggerOrderFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gnsOtcFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gTokenFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint136";
                readonly name: "__placeholder";
                readonly type: "uint136";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPairsStorage.GlobalTradeFeeParams";
            readonly name: "feeParams";
            readonly type: "tuple";
        }];
        readonly name: "GlobalTradeFeeParamsUpdated";
        readonly type: "event";
        readonly signature: "0xbbd4d37e525bc0d0bf80d0c56879b81ebcccbe7bfd22e484e19eb0f369c011a4";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "GroupAdded";
        readonly type: "event";
        readonly signature: "0xaf17de8e82beccc440012117a600dc37e26925225d0f1ee192fc107eb3dcbca4";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
            readonly name: "params";
            readonly type: "tuple";
        }];
        readonly name: "GroupLiquidationParamsUpdated";
        readonly type: "event";
        readonly signature: "0x7e8e79d406657a52635b68c3f3ad15d2526e71077df1b40afad9d323eacbabfc";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "GroupUpdated";
        readonly type: "event";
        readonly signature: "0xcfde8f228364c70f12cbbac5a88fc91ceca76dd750ac93364991a333b34afb8e";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "from";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "to";
            readonly type: "string";
        }];
        readonly name: "PairAdded";
        readonly type: "event";
        readonly signature: "0x3adfd40f2b74073df2a84238acdb7f460565a557b3cc13bddc8833289bf38e09";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maxLeverage";
            readonly type: "uint256";
        }];
        readonly name: "PairCustomMaxLeverageUpdated";
        readonly type: "event";
        readonly signature: "0x5d6c9d6dd6c84fa315e799a455ccb71230e5b88e171c48c4853425ce044e9bce";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "PairUpdated";
        readonly type: "event";
        readonly signature: "0x123a1b961ae93e7acda9790b318237b175b45ac09277cd3614305d8baa3f1953";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "totalPositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "totalLiqCollateralFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "oraclePositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint32";
                readonly name: "minPositionSizeUsd";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint104";
                readonly name: "__placeholder";
                readonly type: "uint104";
            }];
            readonly internalType: "struct IPairsStorage.FeeGroup[]";
            readonly name: "_fees";
            readonly type: "tuple[]";
        }];
        readonly name: "addFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x0e5c75af";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "bytes32";
                readonly name: "job";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxLeverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IPairsStorage.Group[]";
            readonly name: "_groups";
            readonly type: "tuple[]";
        }];
        readonly name: "addGroups";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x60283cba";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum IPairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IPairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IPairsStorage.Pair[]";
            readonly name: "_pairs";
            readonly type: "tuple[]";
        }];
        readonly name: "addPairs";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xdb7c3f9d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "fees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "totalPositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "totalLiqCollateralFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "oraclePositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint32";
                readonly name: "minPositionSizeUsd";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint104";
                readonly name: "__placeholder";
                readonly type: "uint104";
            }];
            readonly internalType: "struct IPairsStorage.FeeGroup";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4acc79ed";
    }, {
        readonly inputs: readonly [];
        readonly name: "feesCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x658de48a";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllPairsRestrictedMaxLeverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x678b3fb0";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGlobalTradeFeeParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "referralFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "govFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "triggerOrderFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gnsOtcFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gTokenFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint136";
                readonly name: "__placeholder";
                readonly type: "uint136";
            }];
            readonly internalType: "struct IPairsStorage.GlobalTradeFeeParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x48fc3ef3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_groupIndex";
            readonly type: "uint256";
        }];
        readonly name: "getGroupLiquidationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x3572929c";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getPairLiquidationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x6633ced6";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "groups";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "bytes32";
                readonly name: "job";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxLeverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IPairsStorage.Group";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x96324bd4";
    }, {
        readonly inputs: readonly [];
        readonly name: "groupsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x885e2750";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams[]";
            readonly name: "_groupLiquidationParams";
            readonly type: "tuple[]";
        }];
        readonly name: "initializeGroupLiquidationParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x85d4390e";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "referralFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "govFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "triggerOrderFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gnsOtcFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gTokenFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint136";
                readonly name: "__placeholder";
                readonly type: "uint136";
            }];
            readonly internalType: "struct IPairsStorage.GlobalTradeFeeParams";
            readonly name: "_tradeFeeParams";
            readonly type: "tuple";
        }];
        readonly name: "initializeNewFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc85ac748";
    }, {
        readonly inputs: readonly [];
        readonly name: "initializeReferralFeeChange";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xe4d0c552";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "isPairIndexListed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x281b7ead";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_from";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_to";
            readonly type: "string";
        }];
        readonly name: "isPairListed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x1628bfeb";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairCustomMaxLeverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x24a96865";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairJob";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x302f81fc";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairMaxLeverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x281b693c";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairMinFeeUsd";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x8078bfbe";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairMinLeverage";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x59a992d0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairMinPositionSizeUsd";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x5e26ff4e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairOraclePositionSizeFeeP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0cf34255";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairSpreadP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xd6bfb055";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_trader";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_pairIndex";
            readonly type: "uint256[]";
        }];
        readonly name: "pairSpreadPArray";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x842a91d6";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairTotalLiqCollateralFeeP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xfbf3f911";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "pairTotalPositionSizeFeeP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xc927b4b6";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "pairs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum IPairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IPairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IPairsStorage.Pair";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb91ac788";
    }, {
        readonly inputs: readonly [];
        readonly name: "pairsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb81b2b71";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "referralFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "govFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "triggerOrderFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gnsOtcFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "gTokenFeeP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint136";
                readonly name: "__placeholder";
                readonly type: "uint136";
            }];
            readonly internalType: "struct IPairsStorage.GlobalTradeFeeParams";
            readonly name: "_feeParams";
            readonly type: "tuple";
        }];
        readonly name: "setGlobalTradeFeeParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x5f57a073";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_groupIndex";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
            readonly name: "_params";
            readonly type: "tuple";
        }];
        readonly name: "setGroupLiquidationParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xd0cb753e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_indices";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_values";
            readonly type: "uint256[]";
        }];
        readonly name: "setPairCustomMaxLeverages";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xd79261fd";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_ids";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "totalPositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "totalLiqCollateralFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "oraclePositionSizeFeeP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint32";
                readonly name: "minPositionSizeUsd";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint104";
                readonly name: "__placeholder";
                readonly type: "uint104";
            }];
            readonly internalType: "struct IPairsStorage.FeeGroup[]";
            readonly name: "_fees";
            readonly type: "tuple[]";
        }];
        readonly name: "updateFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x1cf71b9b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_ids";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "bytes32";
                readonly name: "job";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "minLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxLeverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IPairsStorage.Group[]";
            readonly name: "_groups";
            readonly type: "tuple[]";
        }];
        readonly name: "updateGroups";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x11d79ef5";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_pairIndices";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "from";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "to";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "feed1";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "feed2";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum IPairsStorage.FeedCalculation";
                    readonly name: "feedCalculation";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxDeviationP";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IPairsStorage.Feed";
                readonly name: "feed";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "groupIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "feeIndex";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IPairsStorage.Pair[]";
            readonly name: "_pairs";
            readonly type: "tuple[]";
        }];
        readonly name: "updatePairs";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x10efa5d5";
    }, {
        readonly inputs: readonly [];
        readonly name: "AllyNotActive";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyActive";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyInactive";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingRewards";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "ally";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "volumeUsd";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountGns";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountValueUsd";
            readonly type: "uint256";
        }];
        readonly name: "AllyRewardDistributed";
        readonly type: "event";
        readonly signature: "0x0d54fedb563328d37f00fe5ba0bf7689519f8cf02318562adfe7b4bfab8cf4b4";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "ally";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountGns";
            readonly type: "uint256";
        }];
        readonly name: "AllyRewardsClaimed";
        readonly type: "event";
        readonly signature: "0x3dfe9be199655709d01d635bf441264a809a090c98ed7aae9abdc85f7dcbc09d";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "ally";
            readonly type: "address";
        }];
        readonly name: "AllyUnwhitelisted";
        readonly type: "event";
        readonly signature: "0x6900afc1a924abca16a7f560e2dac3d71008c1cd1d88de8a85b6e4267116d186";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "ally";
            readonly type: "address";
        }];
        readonly name: "AllyWhitelisted";
        readonly type: "event";
        readonly signature: "0x80495287b7fdd5e00b7c8c1eb065c5b63474d11ffb062cc82c13da77dda8424d";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "ally";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint24";
            readonly name: "allyFeeP";
            readonly type: "uint24";
        }];
        readonly name: "OverrodeAllyFeeP";
        readonly type: "event";
        readonly signature: "0xb5c3fde8238e94bb4bbaa413be4d5b14d90e9a399db8d4f405d791ccd383ec9d";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "referrer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint24";
            readonly name: "referralFeeP";
            readonly type: "uint24";
        }];
        readonly name: "OverrodeReferralFeeP";
        readonly type: "event";
        readonly signature: "0x69b632ab0d5becac42ff599f05530699f7bafe35d60010b9f45122e921eb7496";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "referrer";
            readonly type: "address";
        }];
        readonly name: "ReferrerRegistered";
        readonly type: "event";
        readonly signature: "0x0e67f4bbcd5c51b7365ca2dd861dc8094e393ca60de2ceae9d831761a839e92a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "referrer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "volumeUsd";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountGns";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountValueUsd";
            readonly type: "uint256";
        }];
        readonly name: "ReferrerRewardDistributed";
        readonly type: "event";
        readonly signature: "0x74e9754b45c636e199e3d7bb764fae1a9acce47a984d10dcfd74849ec4babc4f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "referrer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountGns";
            readonly type: "uint256";
        }];
        readonly name: "ReferrerRewardsClaimed";
        readonly type: "event";
        readonly signature: "0x25deb48f8299e9863bda34f0d343d51341ac7ac30bf63dbeb2e8212bc4a20bf1";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "referrer";
            readonly type: "address";
        }];
        readonly name: "ReferrerUnwhitelisted";
        readonly type: "event";
        readonly signature: "0x6dd169357c2e2b04fd13a8807a11892b88875b7c70eeb73c3b6642c58516f0db";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "referrer";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "ally";
            readonly type: "address";
        }];
        readonly name: "ReferrerWhitelisted";
        readonly type: "event";
        readonly signature: "0x15ad1d28b052a6cc2dd1d34d9e06a1847055d520e2163017e6e8aad6431b7f6a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "UpdatedAllyFeeP";
        readonly type: "event";
        readonly signature: "0x2f33e68d48a82acaa58e3dcb12a4c7738cdfe7041d35f0e29ec8c39b780b370c";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "UpdatedOpenFeeP";
        readonly type: "event";
        readonly signature: "0x4dec17ad9a229f707b7c2fb9531cd3b9c548f9eca80c03457ca38a0bb1df35fe";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "UpdatedStartReferrerFeeP";
        readonly type: "event";
        readonly signature: "0xb85b70acaeb40f1a2351367c48842ee0ea24ec05d411d99d80bf7a020c0dbb0f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "UpdatedTargetVolumeUsd";
        readonly type: "event";
        readonly signature: "0x7e6042545b314fbe2e138616211d5c38934823f783b83a140ea84f0eb2ae115d";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimAllyRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xee6cf884";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimReferrerRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x65cbd307";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_volumeUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_referrerFeeUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_gnsPriceUsd";
            readonly type: "uint256";
        }];
        readonly name: "distributeReferralReward";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xfa3c8dbf";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_ally";
            readonly type: "address";
        }];
        readonly name: "getAllyDetails";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address[]";
                readonly name: "referrersReferred";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "volumeReferredUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pendingRewardsGns";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalRewardsGns";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalRewardsValueUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "active";
                readonly type: "bool";
            }];
            readonly internalType: "struct IReferrals.AllyDetails";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x92e67406";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "getReferralSettingsOverrides";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint24";
                readonly name: "referralFeeOverrideP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "allyFeeOverrideP";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint208";
                readonly name: "__placeholder";
                readonly type: "uint208";
            }];
            readonly internalType: "struct IReferrals.ReferralSettingsOverrides";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa1ed4611";
    }, {
        readonly inputs: readonly [];
        readonly name: "getReferralsAllyFeeP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x97436b5f";
    }, {
        readonly inputs: readonly [];
        readonly name: "getReferralsStartReferrerFeeP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x843b9e5d";
    }, {
        readonly inputs: readonly [];
        readonly name: "getReferralsTargetVolumeUsd";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x71159fd1";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_referrer";
            readonly type: "address";
        }];
        readonly name: "getReferrerDetails";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "ally";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "tradersReferred";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "volumeReferredUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pendingRewardsGns";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalRewardsGns";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "totalRewardsValueUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "active";
                readonly type: "bool";
            }];
            readonly internalType: "struct IReferrals.ReferrerDetails";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xcbe0f32e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_referrer";
            readonly type: "address";
        }];
        readonly name: "getReferrerFeeProgressP";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x5d19b5d3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_ally";
            readonly type: "address";
        }];
        readonly name: "getReferrersReferred";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa73a3e35";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTraderActiveReferrer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x036787e5";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTraderLastReferrer";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x46dbf572";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_referrer";
            readonly type: "address";
        }];
        readonly name: "getTradersReferred";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x32a7b732";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_allyFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_startReferrerFeeP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_targetVolumeUsd";
            readonly type: "uint256";
        }];
        readonly name: "initializeReferrals";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x38fb18c7";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_allies";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint24[]";
            readonly name: "_allyFeeP";
            readonly type: "uint24[]";
        }];
        readonly name: "overrideAllyFeeP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9397053b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_referrers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint24[]";
            readonly name: "_referralFeeP";
            readonly type: "uint24[]";
        }];
        readonly name: "overrideReferralFeeP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xdaeb463b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_referrer";
            readonly type: "address";
        }];
        readonly name: "registerPotentialReferrer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9b8ab684";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_allies";
            readonly type: "address[]";
        }];
        readonly name: "unwhitelistAllies";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x3450191e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_referrers";
            readonly type: "address[]";
        }];
        readonly name: "unwhitelistReferrers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x92b2bbae";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "updateAllyFeeP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x97365b74";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "updateReferralsTargetVolumeUsd";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x66ddd309";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "updateStartReferrerFeeP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x03e37464";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_allies";
            readonly type: "address[]";
        }];
        readonly name: "whitelistAllies";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc72d02e3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_referrers";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_allies";
            readonly type: "address[]";
        }];
        readonly name: "whitelistReferrers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x507cd8de";
    }, {
        readonly inputs: readonly [];
        readonly name: "PointsOverflow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongFeeTier";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "feeTiersIndices";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feeMultiplier";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "pointsThreshold";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct IFeeTiers.FeeTier[]";
            readonly name: "feeTiers";
            readonly type: "tuple[]";
        }];
        readonly name: "FeeTiersUpdated";
        readonly type: "event";
        readonly signature: "0xa6ec87cc1a516d9ebb5c03260f77d2bd8c22dc8d28d71e740b320fbd4d704131";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "groupIndices";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "groupVolumeMultipliers";
            readonly type: "uint256[]";
        }];
        readonly name: "GroupVolumeMultipliersUpdated";
        readonly type: "event";
        readonly signature: "0xb173e04a52e3de8d79b981e4ffc87d49e6577ceab559ebf36a70bba02cc2569c";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "day";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint224";
            readonly name: "points";
            readonly type: "uint224";
        }];
        readonly name: "TraderDailyPointsIncreased";
        readonly type: "event";
        readonly signature: "0x4f6f49815b9e6682a4f6bc21ba0b5261e803cc5d56c97477a5dc75925fd74e68";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum IFeeTiers.TraderEnrollmentStatus";
                readonly name: "status";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint248";
                readonly name: "__placeholder";
                readonly type: "uint248";
            }];
            readonly indexed: false;
            readonly internalType: "struct IFeeTiers.TraderEnrollment";
            readonly name: "enrollment";
            readonly type: "tuple";
        }];
        readonly name: "TraderEnrollmentUpdated";
        readonly type: "event";
        readonly signature: "0x2d222f8a9169a5d38b64fa1a56389af27712a1d7f1743022cdd8b466c27141eb";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "day";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "feeMultiplier";
            readonly type: "uint32";
        }];
        readonly name: "TraderFeeMultiplierCached";
        readonly type: "event";
        readonly signature: "0x136cc4347dc65b38625089ea9df2874eda024554dc7d0a363036d6fa6d7e4c9e";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "day";
            readonly type: "uint32";
        }];
        readonly name: "TraderInfoFirstUpdate";
        readonly type: "event";
        readonly signature: "0x8aa104927dea7fb70b6e5eb2e2891e3022714eea9e80c493fdabffce48b42393";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "lastDayUpdated";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint224";
                readonly name: "trailingPoints";
                readonly type: "uint224";
            }];
            readonly indexed: false;
            readonly internalType: "struct IFeeTiers.TraderInfo";
            readonly name: "traderInfo";
            readonly type: "tuple";
        }];
        readonly name: "TraderInfoUpdated";
        readonly type: "event";
        readonly signature: "0x211bcdec669891da564d4d5bd35fa76cf6cc72a218db19f402ec042770fb83fb";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "day";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "enum IFeeTiers.CreditType";
            readonly name: "creditType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint224";
            readonly name: "points";
            readonly type: "uint224";
        }];
        readonly name: "TraderPointsCredited";
        readonly type: "event";
        readonly signature: "0xf050ee240db213d72ebabd2f46c0d3270c8206c02d51e074d447c4ca20bd7a6f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "fromDay";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "toDay";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint224";
            readonly name: "expiredPoints";
            readonly type: "uint224";
        }];
        readonly name: "TraderTrailingPointsExpired";
        readonly type: "event";
        readonly signature: "0x964f0f6a92f6d7eedbff7670a2e850f5511e59321724a9dbef638c8068b7527b";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "day";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint224";
            readonly name: "points";
            readonly type: "uint224";
        }];
        readonly name: "TraderUnclaimedPointsClaimed";
        readonly type: "event";
        readonly signature: "0x8b1dd1669c243ea81885b90c31d292a58996045d48bd261b3aea98a09cd66f1e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "enum IFeeTiers.CreditType[]";
            readonly name: "_creditTypes";
            readonly type: "uint8[]";
        }, {
            readonly internalType: "uint224[]";
            readonly name: "_points";
            readonly type: "uint224[]";
        }];
        readonly name: "addTradersUnclaimedPoints";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xb61ce13b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_normalFeeAmountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "calculateFeeAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4f09a236";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_feeTierIndex";
            readonly type: "uint256";
        }];
        readonly name: "getFeeTier";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feeMultiplier";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "pointsThreshold";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IFeeTiers.FeeTier";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xeccea3e2";
    }, {
        readonly inputs: readonly [];
        readonly name: "getFeeTiersCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa89db8e5";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_day";
            readonly type: "uint32";
        }];
        readonly name: "getFeeTiersTraderDailyInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feeMultiplierCache";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint224";
                readonly name: "points";
                readonly type: "uint224";
            }];
            readonly internalType: "struct IFeeTiers.TraderDailyInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x794d8520";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getFeeTiersTraderInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "lastDayUpdated";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint224";
                readonly name: "trailingPoints";
                readonly type: "uint224";
            }];
            readonly internalType: "struct IFeeTiers.TraderInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xacbaaf33";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_groupIndex";
            readonly type: "uint256";
        }];
        readonly name: "getGroupVolumeMultiplier";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x31ca4887";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTraderFeeTiersEnrollment";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum IFeeTiers.TraderEnrollmentStatus";
                readonly name: "status";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint248";
                readonly name: "__placeholder";
                readonly type: "uint248";
            }];
            readonly internalType: "struct IFeeTiers.TraderEnrollment";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x508cbfbe";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTraderUnclaimedPoints";
        readonly outputs: readonly [{
            readonly internalType: "uint224";
            readonly name: "";
            readonly type: "uint224";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x84e3ebe2";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_groupIndices";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_groupVolumeMultipliers";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_feeTiersIndices";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feeMultiplier";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "pointsThreshold";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IFeeTiers.FeeTier[]";
            readonly name: "_feeTiers";
            readonly type: "tuple[]";
        }];
        readonly name: "initializeFeeTiers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x33534de2";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_feeTiersIndices";
            readonly type: "uint256[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feeMultiplier";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "pointsThreshold";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IFeeTiers.FeeTier[]";
            readonly name: "_feeTiers";
            readonly type: "tuple[]";
        }];
        readonly name: "setFeeTiers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xeced5249";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_groupIndices";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_groupVolumeMultipliers";
            readonly type: "uint256[]";
        }];
        readonly name: "setGroupVolumeMultipliers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x944f577a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum IFeeTiers.TraderEnrollmentStatus";
                readonly name: "status";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint248";
                readonly name: "__placeholder";
                readonly type: "uint248";
            }];
            readonly internalType: "struct IFeeTiers.TraderEnrollment[]";
            readonly name: "_values";
            readonly type: "tuple[]";
        }];
        readonly name: "setTradersFeeTiersEnrollment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x88f16bd1";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_volumeUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "updateTraderPoints";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xfed8a190";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongWindowsCount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongWindowsDuration";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint40";
            readonly name: "cumulativeFactor";
            readonly type: "uint40";
        }];
        readonly name: "CumulativeFactorUpdated";
        readonly type: "event";
        readonly signature: "0x2742ec28d0252b4477106a77a10b04e1c1ecd2b568c7168d56c3a3154d3a3122";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "exemptAfterProtectionCloseFactor";
            readonly type: "bool";
        }];
        readonly name: "ExemptAfterProtectionCloseFactorUpdated";
        readonly type: "event";
        readonly signature: "0xd5c6c8f00fcf1cd1dcccec431caee897386371cb8c3ec99d177b49ca8b38de7a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "exemptOnOpen";
            readonly type: "bool";
        }];
        readonly name: "ExemptOnOpenUpdated";
        readonly type: "event";
        readonly signature: "0x194d4896e74b7ec72619871dc3ed535210aa9f76fa7b42822b6980a8585938ca";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint40";
            readonly name: "negPnlCumulVolMultiplier";
            readonly type: "uint40";
        }];
        readonly name: "NegPnlCumulVolMultiplierUpdated";
        readonly type: "event";
        readonly signature: "0x6d53c6510943113652968162063328b13689dc76c9927ac79a6706ae6eaf8212";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint48";
            readonly name: "windowsDuration";
            readonly type: "uint48";
        }, {
            readonly indexed: true;
            readonly internalType: "uint48";
            readonly name: "windowsCount";
            readonly type: "uint48";
        }];
        readonly name: "OiWindowsSettingsInitialized";
        readonly type: "event";
        readonly signature: "0x13a1cf276d620019ba08cdbba6c90fc281a94ee3481ea8aff3b514c8ab4d0ac2";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "valueAboveUsd";
            readonly type: "uint128";
        }, {
            readonly indexed: false;
            readonly internalType: "uint128";
            readonly name: "valueBelowUsd";
            readonly type: "uint128";
        }];
        readonly name: "OnePercentDepthUpdated";
        readonly type: "event";
        readonly signature: "0x636bd42d4023c080480c167f471d64277a2a04d8f812420062908ace34475092";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "oiLongUsd";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "oiShortUsd";
                readonly type: "uint128";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPriceImpact.PairOi";
            readonly name: "totalPairOi";
            readonly type: "tuple";
        }];
        readonly name: "PriceImpactOiTransferredPair";
        readonly type: "event";
        readonly signature: "0xbc0bf036cfe0e40ec07eeea05e96c6a78f2bc92a80f5d10b9179a2649e3bb717";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairsCount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "prevCurrentWindowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "prevEarliestWindowId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newCurrentWindowId";
            readonly type: "uint256";
        }];
        readonly name: "PriceImpactOiTransferredPairs";
        readonly type: "event";
        readonly signature: "0x73a54fbb7b96ef55a35eecf33a61c9ae379cbb38a4d6de352ee3e7c456211a22";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint48";
                readonly name: "windowsDuration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint256";
                readonly name: "pairIndex";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "windowId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "open";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isPnlPositive";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "openInterestUsd";
                readonly type: "uint128";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPriceImpact.OiWindowUpdate";
            readonly name: "oiWindowUpdate";
            readonly type: "tuple";
        }];
        readonly name: "PriceImpactOpenInterestAdded";
        readonly type: "event";
        readonly signature: "0xf9cf8994f1c8e16af56d311d1ebb387a7a3c37cc847edbd2155ad32c5cc9a2fe";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint48";
            readonly name: "windowsCount";
            readonly type: "uint48";
        }];
        readonly name: "PriceImpactWindowsCountUpdated";
        readonly type: "event";
        readonly signature: "0xcd8ae5cbabd45f9918819404692cdffaab6769e8cf5a597405518a1b33419d71";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint48";
            readonly name: "windowsDuration";
            readonly type: "uint48";
        }];
        readonly name: "PriceImpactWindowsDurationUpdated";
        readonly type: "event";
        readonly signature: "0x5c4b755bc1cf4bae3a95cfc185b1e390e2289a97933671d8a098a4131b020664";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "protectionCloseFactorBlocks";
            readonly type: "uint32";
        }];
        readonly name: "ProtectionCloseFactorBlocksUpdated";
        readonly type: "event";
        readonly signature: "0xd537ef0f85bea3a23f6af53d4c1b29fdc74cdbd3a07a37bfdb76f5368aebd660";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint40";
            readonly name: "protectionCloseFactor";
            readonly type: "uint40";
        }];
        readonly name: "ProtectionCloseFactorUpdated";
        readonly type: "event";
        readonly signature: "0x471eb2788149a10519cea684f0149db7c6af0e5fa1182f06b50c5420fe95d12a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "whitelisted";
            readonly type: "bool";
        }];
        readonly name: "ProtectionCloseFactorWhitelistUpdated";
        readonly type: "event";
        readonly signature: "0xb97e27f523fc23750f9d24f12010b9c513c301db9022d0ce8e27a50d9f426383";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "cumulVolPriceImpactMultiplier";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "fixedSpreadP";
            readonly type: "uint16";
        }];
        readonly name: "UserPriceImpactUpdated";
        readonly type: "event";
        readonly signature: "0x8f9f4768797359d22361c80641b41261863e9ad2f362291570d7386478f4135b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_oiDeltaCollateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_open";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_isPnlPositive";
            readonly type: "bool";
        }];
        readonly name: "addPriceImpactOpenInterest";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x81688f7b";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNegPnlCumulVolMultiplier";
        readonly outputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "";
            readonly type: "uint48";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xc1681679";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "_windowsDuration";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_windowId";
            readonly type: "uint256";
        }];
        readonly name: "getOiWindow";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "oiLongUsd";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "oiShortUsd";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IPriceImpact.PairOi";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x823ef2ac";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "_windowsDuration";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_windowIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getOiWindows";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "oiLongUsd";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "oiShortUsd";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IPriceImpact.PairOi[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0d12f7cb";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOiWindowsSettings";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint48";
                readonly name: "startTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "windowsDuration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "windowsCount";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IPriceImpact.OiWindowsSettings";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb56df676";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getPairDepth";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "onePercentDepthAboveUsd";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "onePercentDepthBelowUsd";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IPriceImpact.PairDepth";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x375bb2bb";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_indices";
            readonly type: "uint256[]";
        }];
        readonly name: "getPairDepths";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint128";
                readonly name: "onePercentDepthAboveUsd";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "onePercentDepthBelowUsd";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IPriceImpact.PairDepth[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0d569f27";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_indices";
            readonly type: "uint256[]";
        }];
        readonly name: "getPairFactors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "protectionCloseFactor";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint32";
                readonly name: "protectionCloseFactorBlocks";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint40";
                readonly name: "cumulativeFactor";
                readonly type: "uint40";
            }, {
                readonly internalType: "bool";
                readonly name: "exemptOnOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "exemptAfterProtectionCloseFactor";
                readonly type: "bool";
            }, {
                readonly internalType: "uint128";
                readonly name: "__placeholder";
                readonly type: "uint128";
            }];
            readonly internalType: "struct IPriceImpact.PairFactors[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x8db9e2da";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }];
        readonly name: "getPriceImpactOi";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "activeOi";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb6d92b02";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getProtectionCloseFactorWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x2aa8f882";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_marketPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tradeOpenInterestUsd";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_isPnlPositive";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_open";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_lastPosIncreaseBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum ITradingStorage.ContractsVersion";
            readonly name: "_contractsVersion";
            readonly type: "uint8";
        }];
        readonly name: "getTradePriceImpact";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "priceAfterImpact";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xae0d3a07";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "getUserPriceImpact";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "cumulVolPriceImpactMultiplier";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint16";
                readonly name: "fixedSpreadP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint224";
                readonly name: "__placeholder";
                readonly type: "uint224";
            }];
            readonly internalType: "struct IPriceImpact.UserPriceImpact";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x5a1449ab";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint40";
            readonly name: "_negPnlCumulVolMultiplier";
            readonly type: "uint40";
        }];
        readonly name: "initializeNegPnlCumulVolMultiplier";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xe551bcbf";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint40[]";
            readonly name: "_protectionCloseFactors";
            readonly type: "uint40[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "_protectionCloseFactorBlocks";
            readonly type: "uint32[]";
        }, {
            readonly internalType: "uint40[]";
            readonly name: "_cumulativeFactors";
            readonly type: "uint40[]";
        }];
        readonly name: "initializePairFactors";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x3d7e587a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "_windowsDuration";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "_windowsCount";
            readonly type: "uint48";
        }];
        readonly name: "initializePriceImpact";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x01d5664a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint40[]";
            readonly name: "_cumulativeFactors";
            readonly type: "uint40[]";
        }];
        readonly name: "setCumulativeFactors";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xa7d518fc";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "_exemptAfterProtectionCloseFactor";
            readonly type: "bool[]";
        }];
        readonly name: "setExemptAfterProtectionCloseFactor";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x212d8a1e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "_exemptOnOpen";
            readonly type: "bool[]";
        }];
        readonly name: "setExemptOnOpen";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xdded895a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint40";
            readonly name: "_negPnlCumulVolMultiplier";
            readonly type: "uint40";
        }];
        readonly name: "setNegPnlCumulVolMultiplier";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x302e88f8";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "_indices";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "_depthsAboveUsd";
            readonly type: "uint128[]";
        }, {
            readonly internalType: "uint128[]";
            readonly name: "_depthsBelowUsd";
            readonly type: "uint128[]";
        }];
        readonly name: "setPairDepths";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x6474b399";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "_newWindowsCount";
            readonly type: "uint48";
        }];
        readonly name: "setPriceImpactWindowsCount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x10751b4f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint48";
            readonly name: "_newWindowsDuration";
            readonly type: "uint48";
        }];
        readonly name: "setPriceImpactWindowsDuration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x39b0fc82";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint32[]";
            readonly name: "_protectionCloseFactorBlocks";
            readonly type: "uint32[]";
        }];
        readonly name: "setProtectionCloseFactorBlocks";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x2a4cde4a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "_whitelisted";
            readonly type: "bool[]";
        }];
        readonly name: "setProtectionCloseFactorWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xd8762abb";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint40[]";
            readonly name: "_protectionCloseFactors";
            readonly type: "uint40[]";
        }];
        readonly name: "setProtectionCloseFactors";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xef0243dc";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_pairIndices";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_cumulVolPriceImpactMultipliers";
            readonly type: "uint16[]";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_fixedSpreadPs";
            readonly type: "uint16[]";
        }];
        readonly name: "setUserPriceImpact";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9a8c610e";
    }, {
        readonly inputs: readonly [];
        readonly name: "CollateralAlreadyActive";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CollateralAlreadyDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MaxSlippageZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissingCollaterals";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TradeInfoCollateralPriceUsdZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TradeOpenPriceZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TradePairNotListed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TradePositionSizeZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TradeSlInvalid";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TradeTpInvalid";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collateral";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "gToken";
            readonly type: "address";
        }];
        readonly name: "CollateralAdded";
        readonly type: "event";
        readonly signature: "0xa02b5df63a0ca2660cbe23b5eb92c7f2ae514aee4a543a6032b38ef338865dbf";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }];
        readonly name: "CollateralDisabled";
        readonly type: "event";
        readonly signature: "0x09a6e6672fd5a685707eca1eeb3a3ef190ccf5ceaf9a78e410859f2d7983cc92";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isActive";
            readonly type: "bool";
        }];
        readonly name: "CollateralUpdated";
        readonly type: "event";
        readonly signature: "0x98bbde8d067842c4760a76b32aebf2cd4feb8f07ddcf20d81c619c16f0242ecb";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "collateral";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "index";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "gToken";
            readonly type: "address";
        }];
        readonly name: "GTokenUpdated";
        readonly type: "event";
        readonly signature: "0x347ad17cfe896bbbbdf75fa51fd03a1f1366df72ba0baf20ebed1ea1394a8ecd";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "openPrice";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "tp";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "sl";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "OpenOrderDetailsUpdated";
        readonly type: "event";
        readonly signature: "0x1db0f5e6d7fd465827f67d8349f32499863715a690a2e33a77cf3d1b53b5ba1a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }];
        readonly name: "PendingOrderClosed";
        readonly type: "event";
        readonly signature: "0xf0e19a36a85c073783ad5d0a8026dffa190d250d673c8c80b687cbef125571f3";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.PendingOrder";
            readonly name: "pendingOrder";
            readonly type: "tuple";
        }];
        readonly name: "PendingOrderStored";
        readonly type: "event";
        readonly signature: "0xc1f6d032e333e12d4ba1d8cdf8c4abc1bcaab7381a4eaa19a918a28f223f519d";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPnlPositive";
            readonly type: "bool";
        }];
        readonly name: "TradeClosed";
        readonly type: "event";
        readonly signature: "0xa518dc0f204e7b9dcb9655590f084b91940be34dd66e174c2b29f4a81d99d5df";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint120";
            readonly name: "collateralAmount";
            readonly type: "uint120";
        }];
        readonly name: "TradeCollateralUpdated";
        readonly type: "event";
        readonly signature: "0x48a630649f549ef031330c87af1da1f77164d2f664b9044c7e95bc01d27999e5";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "maxClosingSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "TradeMaxClosingSlippagePUpdated";
        readonly type: "event";
        readonly signature: "0x3a303c8e1d22ea7e3b98451d472573daeaa2bedb6db17838cb23c0d8b506d89e";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint120";
            readonly name: "collateralAmount";
            readonly type: "uint120";
        }, {
            readonly indexed: false;
            readonly internalType: "uint24";
            readonly name: "leverage";
            readonly type: "uint24";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "openPrice";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newTp";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newSl";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPartialIncrease";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPnlPositive";
            readonly type: "bool";
        }];
        readonly name: "TradePositionUpdated";
        readonly type: "event";
        readonly signature: "0xd44377bc88226583e82782aec12182dbe38e1b796330892e34a21a9558611a70";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newSl";
            readonly type: "uint64";
        }];
        readonly name: "TradeSlUpdated";
        readonly type: "event";
        readonly signature: "0xbb058b3eaaea5c2a669a057939f688156d50b5e092969eae671e583635192ead";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "trade";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "tpLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "slLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "lastOiUpdateTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "collateralPriceUsd";
                readonly type: "uint48";
            }, {
                readonly internalType: "enum ITradingStorage.ContractsVersion";
                readonly name: "contractsVersion";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "lastPosIncreaseBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint8";
                readonly name: "__placeholder";
                readonly type: "uint8";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.TradeInfo";
            readonly name: "tradeInfo";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
            readonly name: "liquidationParams";
            readonly type: "tuple";
        }];
        readonly name: "TradeStored";
        readonly type: "event";
        readonly signature: "0x1a540c278c1838afbb56bb7659257d49132e43ff5e7687a333f8b47327db38ff";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newTp";
            readonly type: "uint64";
        }];
        readonly name: "TradeTpUpdated";
        readonly type: "event";
        readonly signature: "0x67ddba1ecd6f73c7d78db146108dbd4e4cc0cea77597d2709de42ff4a603bb22";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.TradingActivated";
            readonly name: "activated";
            readonly type: "uint8";
        }];
        readonly name: "TradingActivatedUpdated";
        readonly type: "event";
        readonly signature: "0x4b502c3b75c299352edc7887297ae0f7c401ed654650a4c0e663458b6ed75fe4";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_gToken";
            readonly type: "address";
        }];
        readonly name: "addCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc6783af1";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_orderId";
            readonly type: "tuple";
        }];
        readonly name: "closePendingOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x4fb70bba";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "bool";
            readonly name: "_isPnlPositive";
            readonly type: "bool";
        }];
        readonly name: "closeTrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x221d25f4";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllPendingOrders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x2d11445f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllPendingOrdersForTraders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x28eb002f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllTradeInfos";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "tpLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "slLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "lastOiUpdateTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "collateralPriceUsd";
                readonly type: "uint48";
            }, {
                readonly internalType: "enum ITradingStorage.ContractsVersion";
                readonly name: "contractsVersion";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "lastPosIncreaseBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint8";
                readonly name: "__placeholder";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ITradingStorage.TradeInfo[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xeb50287f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllTradeInfosForTraders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "tpLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "slLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "lastOiUpdateTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "collateralPriceUsd";
                readonly type: "uint48";
            }, {
                readonly internalType: "enum ITradingStorage.ContractsVersion";
                readonly name: "contractsVersion";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "lastPosIncreaseBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint8";
                readonly name: "__placeholder";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ITradingStorage.TradeInfo[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x01e87cb0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllTrades";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xdffd8a1f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllTradesForTraders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x33ea7f74";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllTradesLiquidationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xc2b96e65";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "_offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_limit";
            readonly type: "uint256";
        }];
        readonly name: "getAllTradesLiquidationParamsForTraders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x556e838f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }];
        readonly name: "getCollateral";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "collateral";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isActive";
                readonly type: "bool";
            }, {
                readonly internalType: "uint88";
                readonly name: "__placeholder";
                readonly type: "uint88";
            }, {
                readonly internalType: "uint128";
                readonly name: "precision";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "precisionDelta";
                readonly type: "uint128";
            }];
            readonly internalType: "struct ITradingStorage.Collateral";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xbb33a55b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateral";
            readonly type: "address";
        }];
        readonly name: "getCollateralIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x5c3ed7c3";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCollaterals";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "collateral";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isActive";
                readonly type: "bool";
            }, {
                readonly internalType: "uint88";
                readonly name: "__placeholder";
                readonly type: "uint88";
            }, {
                readonly internalType: "uint128";
                readonly name: "precision";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint128";
                readonly name: "precisionDelta";
                readonly type: "uint128";
            }];
            readonly internalType: "struct ITradingStorage.Collateral[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x78b92636";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCollateralsCount";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa3e15d09";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "enum ITradingStorage.CounterType";
            readonly name: "_type";
            readonly type: "uint8";
        }];
        readonly name: "getCounters";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "currentIndex";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "openCount";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Counter";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0212f0d6";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_traders";
            readonly type: "address[]";
        }, {
            readonly internalType: "enum ITradingStorage.CounterType";
            readonly name: "_type";
            readonly type: "uint8";
        }];
        readonly name: "getCountersForTraders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "currentIndex";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "openCount";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Counter[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xc1ee6f78";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentContractsVersion";
        readonly outputs: readonly [{
            readonly internalType: "enum ITradingStorage.ContractsVersion";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
        readonly signature: "0x9095b119";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getGToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x6a0aff41";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGnsCollateralIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x78a70ec6";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_orderId";
            readonly type: "tuple";
        }];
        readonly name: "getPendingOrder";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xc6e729bb";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_user";
            readonly type: "address";
        }];
        readonly name: "getPendingOrders";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4c73cb25";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }];
        readonly name: "getTrade";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x15878e07";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }];
        readonly name: "getTradeInfo";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "tpLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "slLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "lastOiUpdateTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "collateralPriceUsd";
                readonly type: "uint48";
            }, {
                readonly internalType: "enum ITradingStorage.ContractsVersion";
                readonly name: "contractsVersion";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "lastPosIncreaseBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint8";
                readonly name: "__placeholder";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ITradingStorage.TradeInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x75cd812d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTradeInfos";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "tpLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "slLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "lastOiUpdateTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "collateralPriceUsd";
                readonly type: "uint48";
            }, {
                readonly internalType: "enum ITradingStorage.ContractsVersion";
                readonly name: "contractsVersion";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "lastPosIncreaseBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint8";
                readonly name: "__placeholder";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ITradingStorage.TradeInfo[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0d1e3c94";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }];
        readonly name: "getTradeLiquidationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x28dc892f";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "_orderType";
            readonly type: "uint8";
        }];
        readonly name: "getTradePendingOrderBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x067e84dd";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTraderStored";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xbed8d2da";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_offset";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "_limit";
            readonly type: "uint32";
        }];
        readonly name: "getTraders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0e503724";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTradersCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x32080d60";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTrades";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4bfad7c0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTradesLiquidationParams";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint40";
                readonly name: "maxLiqSpreadP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "startLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint40";
                readonly name: "endLiqThresholdP";
                readonly type: "uint40";
            }, {
                readonly internalType: "uint24";
                readonly name: "startLeverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "uint24";
                readonly name: "endLeverage";
                readonly type: "uint24";
            }];
            readonly internalType: "struct IPairsStorage.GroupLiquidationParams[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xf7746f3c";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTradingActivated";
        readonly outputs: readonly [{
            readonly internalType: "enum ITradingStorage.TradingActivated";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4115c122";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_gns";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_gnsStaking";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "_collaterals";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "_gTokens";
            readonly type: "address[]";
        }];
        readonly name: "initializeTradingStorage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x1b7d88e5";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }];
        readonly name: "isCollateralActive";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4d140218";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }];
        readonly name: "isCollateralGns";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x8db9390d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_index";
            readonly type: "uint8";
        }];
        readonly name: "isCollateralListed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x1d2ffb42";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder";
            readonly name: "_pendingOrder";
            readonly type: "tuple";
        }];
        readonly name: "storePendingOrder";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x93f9384e";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "_trade";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "tpLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "slLastUpdatedBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "lastOiUpdateTs";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "collateralPriceUsd";
                readonly type: "uint48";
            }, {
                readonly internalType: "enum ITradingStorage.ContractsVersion";
                readonly name: "contractsVersion";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "lastPosIncreaseBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint8";
                readonly name: "__placeholder";
                readonly type: "uint8";
            }];
            readonly internalType: "struct ITradingStorage.TradeInfo";
            readonly name: "_tradeInfo";
            readonly type: "tuple";
        }];
        readonly name: "storeTrade";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xd7ec0787";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "toggleCollateralActiveState";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x49f7895b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateral";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_gToken";
            readonly type: "address";
        }];
        readonly name: "updateGToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x63450d74";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint64";
            readonly name: "_openPrice";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_tp";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_sl";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "updateOpenOrderDetails";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xeb2dfde8";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint120";
            readonly name: "_collateralAmount";
            readonly type: "uint120";
        }];
        readonly name: "updateTradeCollateralAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x5a68200d";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "updateTradeMaxClosingSlippageP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x07d426fd";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint120";
            readonly name: "_collateralAmount";
            readonly type: "uint120";
        }, {
            readonly internalType: "uint24";
            readonly name: "_leverage";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint64";
            readonly name: "_openPrice";
            readonly type: "uint64";
        }, {
            readonly internalType: "bool";
            readonly name: "_isPartialIncrease";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_isPnlPositive";
            readonly type: "bool";
        }];
        readonly name: "updateTradePosition";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xbb7af8de";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint64";
            readonly name: "_newSl";
            readonly type: "uint64";
        }];
        readonly name: "updateTradeSl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x1053c279";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint64";
            readonly name: "_newTp";
            readonly type: "uint64";
        }];
        readonly name: "updateTradeTp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xb8f741d4";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum ITradingStorage.TradingActivated";
            readonly name: "_activated";
            readonly type: "uint8";
        }];
        readonly name: "updateTradingActivated";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xb78f4b36";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoPendingTriggerRewards";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TimeoutBlocksZero";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardsPerOracleGns";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oraclesCount";
            readonly type: "uint256";
        }];
        readonly name: "TriggerRewarded";
        readonly type: "event";
        readonly signature: "0x82bfbe6a1c6cb1077af1001e76028d28d03bf40ac393b689ea90d22e10d3f2da";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oracle";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rewardsGns";
            readonly type: "uint256";
        }];
        readonly name: "TriggerRewardsClaimed";
        readonly type: "event";
        readonly signature: "0x0e430d4d92cf840e4840d7defc88d12f7b5d7e45222f5d571914c734e1cc8335";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "timeoutBlocks";
            readonly type: "uint16";
        }];
        readonly name: "TriggerTimeoutBlocksUpdated";
        readonly type: "event";
        readonly signature: "0x652d3f2e78702ea06eebce1653dfcd9731f4d9888a0032700b1b7b0b051ad6b8";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oracle";
            readonly type: "address";
        }];
        readonly name: "claimPendingTriggerRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x63790a1b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_rewardGns";
            readonly type: "uint256";
        }];
        readonly name: "distributeTriggerReward";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x69f5395e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_oracle";
            readonly type: "address";
        }];
        readonly name: "getTriggerPendingRewardsGns";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x9fd0bdad";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTriggerTimeoutBlocks";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x1187f9bd";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_orderBlock";
            readonly type: "uint256";
        }];
        readonly name: "hasActiveOrder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x8765f772";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_timeoutBlocks";
            readonly type: "uint16";
        }];
        readonly name: "initializeTriggerRewards";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xe2c3542b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_timeoutBlocks";
            readonly type: "uint16";
        }];
        readonly name: "updateTriggerTimeoutBlocks";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9e353611";
    }, {
        readonly inputs: readonly [];
        readonly name: "AboveExposureLimits";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyBeingMarketClosed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CollateralNotActive";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly name: "ConflictingPendingOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DelegateNotApproved";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DelegatedActionNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientCollateral";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidDecreasePositionSizeInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidIncreasePositionSizeInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewPositionSizeSmaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSl";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTrade";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotWrappedNativeToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotYourOrder";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PendingTrigger";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PriceImpactTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PriceZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WaitTimeout";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongLeverage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongSl";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongTp";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "bypass";
            readonly type: "bool";
        }];
        readonly name: "ByPassTriggerLinkUpdated";
        readonly type: "event";
        readonly signature: "0x06e17fbb36333cd9cb0220b0e3cb4ce4d9d6b543f762e8ca6038422e24fa59e4";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "pendingOrderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }];
        readonly name: "ChainlinkCallbackTimeout";
        readonly type: "event";
        readonly signature: "0x3f709185dd46048fccc37c6e34d58fff306fc7991fdbae962679345db3ed2e32";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "CouldNotCloseTrade";
        readonly type: "event";
        readonly signature: "0x051ed9aeed13c97b879c0dd2b13c76171e2760abe3d62bca140dc70b39bd86f1";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isIncrease";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oraclePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralDelta";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "newLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "newCollateralAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "govFeeCollateral";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct IUpdateLeverage.UpdateLeverageValues";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "LeverageUpdateExecuted";
        readonly type: "event";
        readonly signature: "0xd377bf540561d2182d611090b46189834f8bb72f02121dc896866c06e02e6655";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isIncrease";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newLeverage";
            readonly type: "uint256";
        }];
        readonly name: "LeverageUpdateInitiated";
        readonly type: "event";
        readonly signature: "0xf4181f0fa2e1d3cda20bb810e0427d87916eb5dac8c73a7f779ae13e55ec578f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }];
        readonly name: "MarketOrderInitiated";
        readonly type: "event";
        readonly signature: "0x3a60290d7335bce64a807e90f39655517bb5fa702423fa8fac283a5ea16d3a97";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newValueBlocks";
            readonly type: "uint256";
        }];
        readonly name: "MarketOrdersTimeoutBlocksUpdated";
        readonly type: "event";
        readonly signature: "0x91e136d1ad9bf0a586afd0c7699533d033f9092cc48c9e2e16a8c1bc87a33456";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nativeTokenAmount";
            readonly type: "uint256";
        }];
        readonly name: "NativeTokenWrapped";
        readonly type: "event";
        readonly signature: "0x4140bfb1a8c58243a51a8ab319eda78a7382befc5ff76598e746df60996b9d0d";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "OpenLimitCanceled";
        readonly type: "event";
        readonly signature: "0x30a872d1bbd3e31dbb65ce3a53ede9f12b497e1b134c66e64a10f850c4391bf0";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newPrice";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newTp";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "newSl";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "maxSlippageP";
            readonly type: "uint64";
        }];
        readonly name: "OpenLimitUpdated";
        readonly type: "event";
        readonly signature: "0x11c151b754cb223cb771e3d8ece99deae21de397c95d3b1ca4ccb995620766bf";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "OpenOrderPlaced";
        readonly type: "event";
        readonly signature: "0xb57382e21e3ceb31b5beda26d7cc7e459dc52a0b1f5ae0c9b4e603401b7dc642";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oraclePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralPriceUsd";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralDelta";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "leverageDelta";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "positionSizeCollateralDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "existingPositionSizeCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "existingLiqPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceAfterImpact";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "existingPnlCollateral";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowingFeeCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "closingFeeCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "availableCollateralInDiamond";
                readonly type: "int256";
            }, {
                readonly internalType: "int256";
                readonly name: "collateralSentToTrader";
                readonly type: "int256";
            }, {
                readonly internalType: "uint120";
                readonly name: "newCollateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint24";
                readonly name: "newLeverage";
                readonly type: "uint24";
            }];
            readonly indexed: false;
            readonly internalType: "struct IUpdatePositionSize.DecreasePositionSizeValues";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "PositionSizeDecreaseExecuted";
        readonly type: "event";
        readonly signature: "0xd994d286871fe96525f071a7c54e68b1183a4d88ccbf0aef2c527c7374d3d130";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oraclePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralPriceUsd";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralDelta";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "leverageDelta";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "positionSizeCollateralDelta";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "existingPositionSizeCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "newPositionSizeCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "newCollateralAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "newLeverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceAfterImpact";
                readonly type: "uint256";
            }, {
                readonly internalType: "int256";
                readonly name: "existingPnlCollateral";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "oldPosSizePlusPnlCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "newOpenPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "borrowingFeeCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "openingFeesCollateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "existingLiqPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "newLiqPrice";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct IUpdatePositionSize.IncreasePositionSizeValues";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "PositionSizeIncreaseExecuted";
        readonly type: "event";
        readonly signature: "0x4627b6cfd38b837edb1d42b0c6c92e6ba06fded47652e32ce388fcaf3d513477";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isIncrease";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralDelta";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "leverageDelta";
            readonly type: "uint256";
        }];
        readonly name: "PositionSizeUpdateInitiated";
        readonly type: "event";
        readonly signature: "0xef86ff293bce1d37f4b09f9c27b48f752d86a9fde1109f1bd8b806e05e7bada5";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "byPassesLinkCost";
            readonly type: "bool";
        }];
        readonly name: "TriggerOrderInitiated";
        readonly type: "event";
        readonly signature: "0x1472b674eddef9a7145c9353c62f5c03cfcf54556c14c3a0ebbf394da6e0c9ea";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }];
        readonly name: "cancelOpenOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x85886333";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_orderIndex";
            readonly type: "uint32";
        }];
        readonly name: "cancelOrderAfterTimeout";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xb6919540";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "_expectedPrice";
            readonly type: "uint64";
        }];
        readonly name: "closeTradeMarket";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x36ce736b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint120";
            readonly name: "_collateralDelta";
            readonly type: "uint120";
        }, {
            readonly internalType: "uint24";
            readonly name: "_leverageDelta";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint64";
            readonly name: "_expectedPrice";
            readonly type: "uint64";
        }];
        readonly name: "decreasePositionSize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xa7cac572";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_callData";
            readonly type: "bytes";
        }];
        readonly name: "delegatedTradingAction";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x737b84cd";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_user";
            readonly type: "address";
        }];
        readonly name: "getByPassTriggerLink";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x85898e08";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMarketOrdersTimeoutBlocks";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa4bdee80";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }];
        readonly name: "getTradingDelegate";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x4aac6480";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWrappedNativeToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x1d9478b6";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint120";
            readonly name: "_collateralDelta";
            readonly type: "uint120";
        }, {
            readonly internalType: "uint24";
            readonly name: "_leverageDelta";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint64";
            readonly name: "_expectedPrice";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "increasePositionSize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x24058ad3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint120";
            readonly name: "_collateralDelta";
            readonly type: "uint120";
        }, {
            readonly internalType: "uint24";
            readonly name: "_leverageDelta";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint64";
            readonly name: "_expectedPrice";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "increasePositionSizeNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly signature: "0x731104ba";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_marketOrdersTimeoutBlocks";
            readonly type: "uint16";
        }, {
            readonly internalType: "address[]";
            readonly name: "_usersByPassTriggerLink";
            readonly type: "address[]";
        }];
        readonly name: "initializeTrading";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x5179cecf";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly name: "isWrappedNativeToken";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x84e93347";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "_trade";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "_referrer";
            readonly type: "address";
        }];
        readonly name: "openTrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x4465c3e4";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "_trade";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }, {
            readonly internalType: "address";
            readonly name: "_referrer";
            readonly type: "address";
        }];
        readonly name: "openTradeNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly signature: "0x080e83e1";
    }, {
        readonly inputs: readonly [];
        readonly name: "removeTradingDelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x031c722b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_delegate";
            readonly type: "address";
        }];
        readonly name: "setTradingDelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x604755cf";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_packed";
            readonly type: "uint256";
        }];
        readonly name: "triggerOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xeb9359aa";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_users";
            readonly type: "address[]";
        }, {
            readonly internalType: "bool[]";
            readonly name: "_shouldByPass";
            readonly type: "bool[]";
        }];
        readonly name: "updateByPassTriggerLink";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9bf1584e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint24";
            readonly name: "_newLeverage";
            readonly type: "uint24";
        }];
        readonly name: "updateLeverage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x0bce9aaa";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint24";
            readonly name: "_newLeverage";
            readonly type: "uint24";
        }];
        readonly name: "updateLeverageNative";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
        readonly signature: "0x0065efc8";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_valueBlocks";
            readonly type: "uint16";
        }];
        readonly name: "updateMarketOrdersTimeoutBlocks";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x52d029d2";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "updateMaxClosingSlippageP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9e8433d0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "_triggerPrice";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_tp";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_sl";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint16";
            readonly name: "_maxSlippageP";
            readonly type: "uint16";
        }];
        readonly name: "updateOpenOrder";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xa4bb127e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "_newSl";
            readonly type: "uint64";
        }];
        readonly name: "updateSl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xb5d9e9d0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "_newTp";
            readonly type: "uint64";
        }];
        readonly name: "updateTp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xf401f2bb";
    }, {
        readonly inputs: readonly [];
        readonly name: "PendingOrderNotOpen";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "BorrowingFeeCharged";
        readonly type: "event";
        readonly signature: "0xe51bd3297a1287c8baca0874d5647413ea766784f1ae76f8519801bb9f1a14fd";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "GTokenFeeCharged";
        readonly type: "event";
        readonly signature: "0xfe4ab97508a97bb85ad1e2680662e58549e51982d965eed4ef6d7fcd4cc4295f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "GnsOtcFeeCharged";
        readonly type: "event";
        readonly signature: "0x5c36283cfd2f38afd723e604b61c6c61b55515e5cb93e863fbe4df53bf81d4ac";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "GovFeeCharged";
        readonly type: "event";
        readonly signature: "0xeb561f0609b402569e8a7e8fe9d4f408b92c96fb83001b2cd78fd55c29bbbac3";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "limitIndex";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "triggerCaller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "orderType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oraclePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "marketPrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liqPrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSentToTrader";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralPriceUsd";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "exactExecution";
            readonly type: "bool";
        }];
        readonly name: "LimitExecuted";
        readonly type: "event";
        readonly signature: "0x33b71dccfeb2f3e0f4ed2a9f7c05255d8c5aa57936b542245a5e63c938301597";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "MarketCloseCanceled";
        readonly type: "event";
        readonly signature: "0x1d7048e18d77f0864147aec27ae4b78d421fe35ddde1ea0ec535562c4a90cc58";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oraclePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "marketPrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "liqPrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceImpactP";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "percentProfit";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountSentToTrader";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralPriceUsd";
            readonly type: "uint256";
        }];
        readonly name: "MarketExecuted";
        readonly type: "event";
        readonly signature: "0x26d428c63a1c5161a75dbe15e1e65bc7bf932acb203db2a47df55b16a60d35b1";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "MarketOpenCanceled";
        readonly type: "event";
        readonly signature: "0x377325122a5a86014bf0a307dc0c8eab0bf1e2858ff6e1522a7551e6df253782";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "PendingGovFeesClaimed";
        readonly type: "event";
        readonly signature: "0x0b92b2d73b4c8443d11985dbf6a8cfdfc03b93d6679aab94b7d4fb5842dd0cb0";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "ReferralFeeCharged";
        readonly type: "event";
        readonly signature: "0x264425c9f39f6b517f96e5447a9347098bfbe112753fada5068de9fdf6d5168c";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountCollateral";
            readonly type: "uint256";
        }];
        readonly name: "TriggerFeeCharged";
        readonly type: "event";
        readonly signature: "0x9460073dee9bbc6b4566aae39b3ec7308696e65ec5d376434076d72afabe3eba";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "triggerCaller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "orderType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }];
        readonly name: "TriggerOrderCanceled";
        readonly type: "event";
        readonly signature: "0x0766d5a97748cddd280198f717da563fe9aad4d38e5bd546fe56d04fbc68a3cd";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "valueP";
            readonly type: "uint8";
        }];
        readonly name: "VaultClosingFeePUpdated";
        readonly type: "event";
        readonly signature: "0x1be5a8e0282c1b895f845900a8efe7585790659f1b4f062f17000e2712dd8601";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimPendingGovFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x36c3dba2";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "closeTradeMarketCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x4b0b5629";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "decreasePositionSizeMarketCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xe1d88718";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "executeTriggerCloseOrderCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc61a7ad4";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "executeTriggerOpenOrderCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x3b0c5938";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getPendingGovFeesCollateral";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x2c6fe6d1";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVaultClosingFeeP";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa5b26e46";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "increasePositionSizeMarketCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x10d8e754";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_vaultClosingFeeP";
            readonly type: "uint8";
        }];
        readonly name: "initializeCallbacks";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xec98ec83";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_treasury";
            readonly type: "address";
        }];
        readonly name: "initializeTreasuryAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x63a21e54";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "openTradeMarketCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x13ebc2c6";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "_a";
            readonly type: "tuple";
        }];
        readonly name: "updateLeverageCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x92dd2940";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_treasury";
            readonly type: "address";
        }];
        readonly name: "updateTreasuryAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x841e4561";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_valueP";
            readonly type: "uint8";
        }];
        readonly name: "updateVaultClosingFeeP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xcbc8e6f2";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "_orderType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint64";
            readonly name: "_open";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_high";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_low";
            readonly type: "uint64";
        }];
        readonly name: "validateTriggerCloseOrderCallback";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "int256";
                readonly name: "profitP";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountSentToTrader";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralPriceUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "exactExecution";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralLeftInStorage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "oraclePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "limitIndex";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceImpactP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ITradingCallbacks.Values";
            readonly name: "v";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x85ea3c78";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_tradeId";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "_orderType";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint64";
            readonly name: "_open";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_high";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "_low";
            readonly type: "uint64";
        }];
        readonly name: "validateTriggerOpenOrderCallback";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint24";
                readonly name: "leverage";
                readonly type: "uint24";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum ITradingStorage.TradeType";
                readonly name: "tradeType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint120";
                readonly name: "collateralAmount";
                readonly type: "uint120";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "tp";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "sl";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint192";
                readonly name: "__placeholder";
                readonly type: "uint192";
            }];
            readonly internalType: "struct ITradingStorage.Trade";
            readonly name: "t";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ITradingCallbacks.CancelReason";
            readonly name: "cancelReason";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "int256";
                readonly name: "profitP";
                readonly type: "int256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "liqPrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountSentToTrader";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralPriceUsd";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "exactExecution";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateralLeftInStorage";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "oraclePrice";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "limitIndex";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint256";
                readonly name: "priceImpactP";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ITradingCallbacks.Values";
            readonly name: "v";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa96ae63b";
    }, {
        readonly inputs: readonly [];
        readonly name: "BorrowingWrongExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BorrowingZeroGroup";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "minP";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "maxP";
            readonly type: "uint32";
        }];
        readonly name: "BorrowingFeePerBlockCapUpdated";
        readonly type: "event";
        readonly signature: "0xca38800286190b44d87a61aaf551868afbd46f1f76ed5b145e4e975e446a2964";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }];
        readonly name: "BorrowingGroupAccFeesUpdated";
        readonly type: "event";
        readonly signature: "0xb4297e7afacc3feba1f03e1a444e70031a62f3ae4d6372c2b0cb3e0e62e8568e";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "increase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "delta";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "newOiLong";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "newOiShort";
            readonly type: "uint72";
        }];
        readonly name: "BorrowingGroupOiUpdated";
        readonly type: "event";
        readonly signature: "0xb36af604fa0e5c3505abb63091d204895a517928138498bb965622d2258bdeb5";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "maxOi";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "feeExponent";
            readonly type: "uint48";
        }];
        readonly name: "BorrowingGroupUpdated";
        readonly type: "event";
        readonly signature: "0x8f029f3a48396ff1466df7488d31984ab9265a55be3de042cd03662ad2c894ca";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "initialPairAccFee";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "initialGroupAccFee";
            readonly type: "uint64";
        }];
        readonly name: "BorrowingInitialAccFeesStored";
        readonly type: "event";
        readonly signature: "0x49a2b4d58db9411e83e598fad88462d2474d8f9aae8a9ba41acdfde33f4f3751";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }];
        readonly name: "BorrowingPairAccFeesUpdated";
        readonly type: "event";
        readonly signature: "0x12515cf8712ede0f0e48dd7513c14f22f116a6b3f95bd493da7511cf7dcbadd7";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "minP";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "maxP";
            readonly type: "uint32";
        }];
        readonly name: "BorrowingPairFeePerBlockCapUpdated";
        readonly type: "event";
        readonly signature: "0xf5413841beaa3a78d74ab0e0e7528e0f5d357a193b9f600eb87c8746475109f6";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "prevGroupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "newGroupIndex";
            readonly type: "uint16";
        }];
        readonly name: "BorrowingPairGroupUpdated";
        readonly type: "event";
        readonly signature: "0x2281c18b617b78612026764ea9d5175174342c49b30da77900f7518a83242fa7";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "increase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "delta";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "newOiLong";
            readonly type: "uint72";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "newOiShort";
            readonly type: "uint72";
        }];
        readonly name: "BorrowingPairOiUpdated";
        readonly type: "event";
        readonly signature: "0x012adc2457c8405bb9a0f2f3be4cc4bff84f095e6a16535b080facddec7804d3";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "feePerBlock";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint48";
            readonly name: "feeExponent";
            readonly type: "uint48";
        }, {
            readonly indexed: false;
            readonly internalType: "uint72";
            readonly name: "maxOi";
            readonly type: "uint72";
        }];
        readonly name: "BorrowingPairParamsUpdated";
        readonly type: "event";
        readonly signature: "0x3984f24e4863ca281d86902d6706218ef6b050f256dcc978dbe508eaf8c3a431";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "open";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "long";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "positionSizeCollateral";
            readonly type: "uint256";
        }];
        readonly name: "TradeBorrowingCallbackHandled";
        readonly type: "event";
        readonly signature: "0x1d4556af371eac83495a853ba4f1af8a2d4e0c76ab08719dbd24b372cfc0acc3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getAllBorrowingPairs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "long";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "short";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "max";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint40";
                readonly name: "__placeholder";
                readonly type: "uint40";
            }];
            readonly internalType: "struct IBorrowingFees.OpenInterest[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "block";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint64";
                readonly name: "initialAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "initialAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "prevGroupAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "prevGroupAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "pairAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "pairAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "__placeholder";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingPairGroup[][]";
            readonly name: "";
            readonly type: "tuple[][]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x48da5b38";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBorrowingFeePerBlockCap";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "minP";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "maxP";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeePerBlockCap";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x06c01bef";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_groupIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingGroup";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xfff24740";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_groupIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingGroupOi";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "long";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "short";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "max";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint40";
                readonly name: "__placeholder";
                readonly type: "uint40";
            }];
            readonly internalType: "struct IBorrowingFees.OpenInterest";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x13a9baae";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_groupIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getBorrowingGroupPendingAccFees";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "groupAccFeeLongDelta";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "groupAccFeeShortDelta";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xd2b9099a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_indices";
            readonly type: "uint16[]";
        }];
        readonly name: "getBorrowingGroups";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingData[]";
            readonly name: "";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "long";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "short";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "max";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint40";
                readonly name: "__placeholder";
                readonly type: "uint40";
            }];
            readonly internalType: "struct IBorrowingFees.OpenInterest[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xfbbf9740";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }];
        readonly name: "getBorrowingInitialAccFees";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "accPairFee";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accGroupFee";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "block";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint80";
                readonly name: "__placeholder";
                readonly type: "uint80";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingInitialAccFees";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xab6192ed";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingPair";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "accFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint48";
                readonly name: "accLastUpdatedBlock";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x5d5bf24d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingPairFeePerBlockCap";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "minP";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "maxP";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeePerBlockCap";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x7bdbfe5a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_indices";
            readonly type: "uint16[]";
        }];
        readonly name: "getBorrowingPairFeePerBlockCaps";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "minP";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "maxP";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeePerBlockCap[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0a67b9a3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingPairGroupIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "groupIndex";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xe6a6633f";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingPairGroups";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint48";
                readonly name: "block";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint64";
                readonly name: "initialAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "initialAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "prevGroupAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "prevGroupAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "pairAccFeeLong";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "pairAccFeeShort";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "__placeholder";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingPairGroup[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xfd03e048";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getBorrowingPairOi";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint72";
                readonly name: "long";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "short";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint72";
                readonly name: "max";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint40";
                readonly name: "__placeholder";
                readonly type: "uint40";
            }];
            readonly internalType: "struct IBorrowingFees.OpenInterest";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0077b57e";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "getBorrowingPairPendingAccFees";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "accFeeLong";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "accFeeShort";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "pairAccFeeLongDelta";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "pairAccFeeShortDelta";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0c7be6ca";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getPairMaxOi";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x5667b5c0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getPairMaxOiCollateral";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x274d1278";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }];
        readonly name: "getPairOiCollateral";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xeb2ea3a2";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }];
        readonly name: "getPairOisCollateral";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "longOi";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "shortOi";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xf6f7c948";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeeInput";
            readonly name: "_input";
            readonly type: "tuple";
        }];
        readonly name: "getTradeBorrowingFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "feeAmountCollateral";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x0804db93";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint8";
                readonly name: "collateralIndex";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "trader";
                readonly type: "address";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "openPrice";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "long";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "collateral";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "leverage";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "useBorrowingFees";
                readonly type: "bool";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint40";
                    readonly name: "maxLiqSpreadP";
                    readonly type: "uint40";
                }, {
                    readonly internalType: "uint40";
                    readonly name: "startLiqThresholdP";
                    readonly type: "uint40";
                }, {
                    readonly internalType: "uint40";
                    readonly name: "endLiqThresholdP";
                    readonly type: "uint40";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "startLeverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "endLeverage";
                    readonly type: "uint24";
                }];
                readonly internalType: "struct IPairsStorage.GroupLiquidationParams";
                readonly name: "liquidationParams";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IBorrowingFees.LiqPriceInput";
            readonly name: "_input";
            readonly type: "tuple";
        }];
        readonly name: "getTradeLiquidationPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x61ddacb0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionSizeCollateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "_open";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }];
        readonly name: "handleTradeBorrowingCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xfc79e929";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "minP";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "maxP";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeePerBlockCap";
            readonly name: "_feePerBlockCap";
            readonly type: "tuple";
        }];
        readonly name: "initializeBorrowingFeePerBlockCap";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x1a733ea0";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint32";
            readonly name: "_index";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }];
        readonly name: "resetTradeBorrowingFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x4fa72788";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "minP";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "maxP";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeePerBlockCap";
            readonly name: "_feePerBlockCap";
            readonly type: "tuple";
        }];
        readonly name: "setBorrowingFeePerBlockCap";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x197b65a5";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_groupIndex";
            readonly type: "uint16";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint72";
                readonly name: "maxOi";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingGroupParams";
            readonly name: "_value";
            readonly type: "tuple";
        }];
        readonly name: "setBorrowingGroupParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x9fed9481";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_indices";
            readonly type: "uint16[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint72";
                readonly name: "maxOi";
                readonly type: "uint72";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingGroupParams[]";
            readonly name: "_values";
            readonly type: "tuple[]";
        }];
        readonly name: "setBorrowingGroupParamsArray";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x02c4e7c1";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_indices";
            readonly type: "uint16[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "minP";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "maxP";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingFeePerBlockCap[]";
            readonly name: "_values";
            readonly type: "tuple[]";
        }];
        readonly name: "setBorrowingPairFeePerBlockCapArray";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x92748a7d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint72";
                readonly name: "maxOi";
                readonly type: "uint72";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingPairParams";
            readonly name: "_value";
            readonly type: "tuple";
        }];
        readonly name: "setBorrowingPairParams";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x33b516cf";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16[]";
            readonly name: "_indices";
            readonly type: "uint16[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint16";
                readonly name: "groupIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "uint32";
                readonly name: "feePerBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint48";
                readonly name: "feeExponent";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint72";
                readonly name: "maxOi";
                readonly type: "uint72";
            }];
            readonly internalType: "struct IBorrowingFees.BorrowingPairParams[]";
            readonly name: "_values";
            readonly type: "tuple[]";
        }];
        readonly name: "setBorrowingPairParamsArray";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xeb1802f8";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "bool";
            readonly name: "_long";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionSizeCollateral";
            readonly type: "uint256";
        }];
        readonly name: "withinMaxBorrowingGroupOi";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x801c7961";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCandle";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidPoolType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OracleAlreadyListed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RequestAlreadyPending";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SourceNotOracleOfRequest";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferAndCallToOracleFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongCollateralUsdDecimals";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract ILiquidityPool";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isGnsToken0InLp";
                readonly type: "bool";
            }, {
                readonly internalType: "enum IPriceAggregator.PoolType";
                readonly name: "poolType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint80";
                readonly name: "__placeholder";
                readonly type: "uint80";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPriceAggregator.LiquidityPoolInfo";
            readonly name: "newValue";
            readonly type: "tuple";
        }];
        readonly name: "CollateralGnsLiquidityPoolUpdated";
        readonly type: "event";
        readonly signature: "0x99c41cee576e40e5483818b59dcfd6e36841e5f9a9557e09779e0b4541f9de0e";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "CollateralUsdPriceFeedUpdated";
        readonly type: "event";
        readonly signature: "0x272401831c29114837867a7463e326c1b024e3dd2f0f108dec76352011db4fea";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "jobId";
            readonly type: "bytes32";
        }];
        readonly name: "JobIdUpdated";
        readonly type: "event";
        readonly signature: "0x764c19c693af0da42ec6c6bed68a2dd1a2fa93d24785fcfce58ffa29ae313606";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "limitJobCount";
            readonly type: "uint8";
        }];
        readonly name: "LimitJobCountUpdated";
        readonly type: "event";
        readonly signature: "0xe3fd233ab0f657acfa4eec07f6b1d79a510c3eef274d27d305c7fc47695a1e7f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountLink";
            readonly type: "uint256";
        }];
        readonly name: "LinkClaimedBack";
        readonly type: "event";
        readonly signature: "0xc4fc8431efbe3edf6cca5a73401623d342a9fad5807bcb502d2efca245cb6ffd";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "id";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "callbackAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4";
                readonly name: "callbackFunctionId";
                readonly type: "bytes4";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "buf";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "capacity";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct BufferChainlink.buffer";
                readonly name: "buf";
                readonly type: "tuple";
            }];
            readonly indexed: false;
            readonly internalType: "struct Chainlink.Request";
            readonly name: "request";
            readonly type: "tuple";
        }];
        readonly name: "LinkRequestCreated";
        readonly type: "event";
        readonly signature: "0x170ae993ffa82f60cce26e128cf75e11b7deba03fe29685e5881a76c8452765c";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "LinkUsdPriceFeedUpdated";
        readonly type: "event";
        readonly signature: "0xca648bfe353681131df098ecd895a5ec41f502a93a1223aa1b77f67fc271f2a3";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint24";
            readonly name: "maxLookbackDeviationP";
            readonly type: "uint24";
        }];
        readonly name: "MaxLookbackDeviationPUpdated";
        readonly type: "event";
        readonly signature: "0xa043df067b559e4e84d85e6607cd6524f12547f7d22dcb2bbcdc03c74886688c";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint24";
            readonly name: "maxMarketDeviationP";
            readonly type: "uint24";
        }];
        readonly name: "MaxMarketDeviationPUpdated";
        readonly type: "event";
        readonly signature: "0x93bd5e01958edd4eb2e0dfd8da8773f075b8f8ae0ef6823bc12703cc2e546df0";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "value";
            readonly type: "uint8";
        }];
        readonly name: "MinAnswersUpdated";
        readonly type: "event";
        readonly signature: "0x6bc925491f55f56cb08a3ff41035fb0fdeae0cecc94f8e32e9b8ba2ad17fa7f9";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "OracleAdded";
        readonly type: "event";
        readonly signature: "0xbf21de46ba0ce5e377db4224a7253064e85c704765b54881c2ad551a30a28d0b";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldOracle";
            readonly type: "address";
        }];
        readonly name: "OracleRemoved";
        readonly type: "event";
        readonly signature: "0x0adc4a8d7cd2f125c921a2f757c5c86749579208090d4fbb65c26bae90179ac0";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "oldOracle";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newOracle";
            readonly type: "address";
        }];
        readonly name: "OracleReplaced";
        readonly type: "event";
        readonly signature: "0x36f00e7308d970ca7446a252b7a1dd9c9cb50ea4559b602e595fc53967ac9dd9";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "orderId";
            readonly type: "tuple";
        }, {
            readonly indexed: true;
            readonly internalType: "uint16";
            readonly name: "pairIndex";
            readonly type: "uint16";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "request";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "priceData";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLookback";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "usedInMedian";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "minAnswersReached";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "minFilteredAnswersReached";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "ts";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPriceAggregator.OrderAnswer[]";
            readonly name: "unfilteredAnswers";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "ts";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct IPriceAggregator.OrderAnswer[]";
            readonly name: "filteredAnswers";
            readonly type: "tuple[]";
        }];
        readonly name: "PriceReceived";
        readonly type: "event";
        readonly signature: "0xa412cea1596decdadbb4b2b716e8efe35b7d319fbda462bd9c37b9d46a001dee";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "pairIndex";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingStorage.PendingOrder";
            readonly name: "pendingOrder";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLookback";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "job";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "linkFeePerNode";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nodesCount";
            readonly type: "uint256";
        }];
        readonly name: "PriceRequested";
        readonly type: "event";
        readonly signature: "0xbf65a2efd7b0d6f18e30be9668d59e0bb7092d6fa0f20587e40330e5f9147f8e";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct ITradingStorage.Id";
                readonly name: "orderId";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "spreadP";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint64";
                readonly name: "price";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct ITradingCallbacks.AggregatorAnswer";
            readonly name: "a";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "enum ITradingStorage.PendingOrderType";
            readonly name: "orderType";
            readonly type: "uint8";
        }];
        readonly name: "TradingCallbackExecuted";
        readonly type: "event";
        readonly signature: "0x3c7b39f62241be54daf88ab94fbb4f3b7e92a2abb908f2d2b4ce3d14dadd5a4f";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "newValue";
            readonly type: "uint32";
        }];
        readonly name: "TwapIntervalUpdated";
        readonly type: "event";
        readonly signature: "0xc99f383ecd620c333255bd2aef929eedd6808999bac9bfc5f53e10d876abf1ce";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_a";
            readonly type: "address";
        }];
        readonly name: "addOracle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xdf5dd1a5";
    }, {
        readonly inputs: readonly [];
        readonly name: "claimBackLink";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x6f37d263";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_requestId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_priceData";
            readonly type: "uint256";
        }];
        readonly name: "fulfill";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x4357855e";
    }, {
        readonly inputs: readonly [];
        readonly name: "getChainlinkToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x165d35e1";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_normalizedValue";
            readonly type: "uint256";
        }];
        readonly name: "getCollateralFromUsdNormalizedValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x36f6def7";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getCollateralGnsLiquidityPool";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract ILiquidityPool";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isGnsToken0InLp";
                readonly type: "bool";
            }, {
                readonly internalType: "enum IPriceAggregator.PoolType";
                readonly name: "poolType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint80";
                readonly name: "__placeholder";
                readonly type: "uint80";
            }];
            readonly internalType: "struct IPriceAggregator.LiquidityPoolInfo";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x6a43c9ad";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getCollateralPriceUsd";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xbbb4e3f9";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getCollateralUsdPriceFeed";
        readonly outputs: readonly [{
            readonly internalType: "contract IChainlinkFeed";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x9641c1f5";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_collateral";
            readonly type: "address";
        }];
        readonly name: "getGnsPriceCollateralAddress";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x1de109d2";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getGnsPriceCollateralIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa91fa361";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getGnsPriceUsd";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x891e656c";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLimitJobCount";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x75d097a7";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLimitJobId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xf4b0664d";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLimitJobIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint88";
            readonly name: "";
            readonly type: "uint88";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xdb461060";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "_trader";
            readonly type: "address";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionSizeCollateral";
            readonly type: "uint256";
        }];
        readonly name: "getLinkFee";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xde38f77c";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLinkUsdPriceFeed";
        readonly outputs: readonly [{
            readonly internalType: "contract IChainlinkFeed";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb144bbf0";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMarketJobId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x8e667ac8";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxLookbackDeviationP";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xda381eb3";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxMarketDeviationP";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x8550092e";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMinAnswers";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x69b53230";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "getOracle";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x10a9de60";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOracles";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x40884c52";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_id";
            readonly type: "bytes32";
        }];
        readonly name: "getPendingRequest";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x88b12d55";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint16";
            readonly name: "_pairIndex";
            readonly type: "uint16";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "index";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pairIndex";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "leverage";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "bool";
                    readonly name: "long";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isOpen";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "collateralIndex";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ITradingStorage.TradeType";
                    readonly name: "tradeType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint120";
                    readonly name: "collateralAmount";
                    readonly type: "uint120";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "openPrice";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "tp";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "sl";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint192";
                    readonly name: "__placeholder";
                    readonly type: "uint192";
                }];
                readonly internalType: "struct ITradingStorage.Trade";
                readonly name: "trade";
                readonly type: "tuple";
            }, {
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "bool";
                readonly name: "isOpen";
                readonly type: "bool";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint32";
                readonly name: "createdBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint16";
                readonly name: "maxSlippageP";
                readonly type: "uint16";
            }];
            readonly internalType: "struct ITradingStorage.PendingOrder";
            readonly name: "_pendingOrder";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "_positionSizeCollateral";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fromBlock";
            readonly type: "uint256";
        }];
        readonly name: "getPrice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x18fc5876";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_requestId";
            readonly type: "bytes32";
        }];
        readonly name: "getPriceAggregatorOrder";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }, {
                readonly internalType: "enum ITradingStorage.PendingOrderType";
                readonly name: "orderType";
                readonly type: "uint8";
            }, {
                readonly internalType: "uint16";
                readonly name: "pairIndex";
                readonly type: "uint16";
            }, {
                readonly internalType: "bool";
                readonly name: "isLookback";
                readonly type: "bool";
            }, {
                readonly internalType: "uint32";
                readonly name: "__placeholder";
                readonly type: "uint32";
            }];
            readonly internalType: "struct IPriceAggregator.Order";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x7d0fcd1e";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "index";
                readonly type: "uint32";
            }];
            readonly internalType: "struct ITradingStorage.Id";
            readonly name: "_orderId";
            readonly type: "tuple";
        }];
        readonly name: "getPriceAggregatorOrderAnswers";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "open";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "high";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "low";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "ts";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IPriceAggregator.OrderAnswer[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x9f62038f";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRequestCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x3fad1834";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTwapInterval";
        readonly outputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "";
            readonly type: "uint24";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x3e742e3b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_collateralValue";
            readonly type: "uint256";
        }];
        readonly name: "getUsdNormalizedValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xbbad411a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_limitJobCount";
            readonly type: "uint8";
        }];
        readonly name: "initializeLimitJobCount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc386f31b";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "_maxMarketDeviationP";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint24";
            readonly name: "_maxLookbackDeviationP";
            readonly type: "uint24";
        }];
        readonly name: "initializeMaxDeviationsP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x94db9ef7";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_linkToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IChainlinkFeed";
            readonly name: "_linkUsdPriceFeed";
            readonly type: "address";
        }, {
            readonly internalType: "uint24";
            readonly name: "_twapInterval";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint8";
            readonly name: "_minAnswers";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "_nodes";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes32[2]";
            readonly name: "_jobIds";
            readonly type: "bytes32[2]";
        }, {
            readonly internalType: "uint8[]";
            readonly name: "_collateralIndices";
            readonly type: "uint8[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract ILiquidityPool";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "enum IPriceAggregator.PoolType";
                readonly name: "poolType";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IPriceAggregator.LiquidityPoolInput[]";
            readonly name: "_gnsCollateralLiquidityPools";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "contract IChainlinkFeed[]";
            readonly name: "_collateralUsdPriceFeeds";
            readonly type: "address[]";
        }];
        readonly name: "initializePriceAggregator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xf1dd8b66";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }];
        readonly name: "removeOracle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x80935dbf";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_index";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_a";
            readonly type: "address";
        }];
        readonly name: "replaceOracle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x25e589cd";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_limitJobCount";
            readonly type: "uint8";
        }];
        readonly name: "setLimitJobCount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x19a891e4";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_jobId";
            readonly type: "bytes32";
        }];
        readonly name: "setLimitJobId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xe0bb91c2";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_jobId";
            readonly type: "bytes32";
        }];
        readonly name: "setMarketJobId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x85f276b8";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "_maxLookbackDeviationP";
            readonly type: "uint24";
        }];
        readonly name: "setMaxLookbackDeviationP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xd2029399";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "_maxMarketDeviationP";
            readonly type: "uint24";
        }];
        readonly name: "setMaxMarketDeviationP";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xaa564b10";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract ILiquidityPool";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "enum IPriceAggregator.PoolType";
                readonly name: "poolType";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IPriceAggregator.LiquidityPoolInput";
            readonly name: "_liquidityPoolInput";
            readonly type: "tuple";
        }];
        readonly name: "updateCollateralGnsLiquidityPool";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x2caa6f8a";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IChainlinkFeed";
            readonly name: "_value";
            readonly type: "address";
        }];
        readonly name: "updateCollateralUsdPriceFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc07d2844";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IChainlinkFeed";
            readonly name: "_value";
            readonly type: "address";
        }];
        readonly name: "updateLinkUsdPriceFeed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x5beda778";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_value";
            readonly type: "uint8";
        }];
        readonly name: "updateMinAnswers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x44eb8ba6";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint24";
            readonly name: "_twapInterval";
            readonly type: "uint24";
        }];
        readonly name: "updateTwapInterval";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xb166a495";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidShareSum";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "balanceCollateral";
            readonly type: "uint256";
        }];
        readonly name: "OtcBalanceUpdated";
        readonly type: "event";
        readonly signature: "0x8d9467a44ee925421a7b8bcb0b7a92c4adc261c218b290e799b14630ac940b2a";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "gnsTreasury";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "treasuryShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "stakingShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "burnShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "premiumP";
                readonly type: "uint64";
            }];
            readonly indexed: false;
            readonly internalType: "struct IOtc.OtcConfig";
            readonly name: "config";
            readonly type: "tuple";
        }];
        readonly name: "OtcConfigUpdated";
        readonly type: "event";
        readonly signature: "0x8b0fa5246ac429f9dd5a918b5407b1c7d0d2e21903d0a690b811e97cdb1fff80";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint8";
            readonly name: "collateralIndex";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "collateralAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gnsPriceCollateral";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "treasuryAmountGns";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stakingAmountGns";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "burnAmountGns";
            readonly type: "uint256";
        }];
        readonly name: "OtcExecuted";
        readonly type: "event";
        readonly signature: "0x946f4776eb5a3c4119694bcd42c3ac90e75160db79b8009a9e7748ed7599d110";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_collateralAmount";
            readonly type: "uint256";
        }];
        readonly name: "addOtcCollateralBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x11d8818d";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getOtcBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x2b08f467";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOtcConfig";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "gnsTreasury";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "treasuryShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "stakingShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "burnShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "premiumP";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IOtc.OtcConfig";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xb79de3b3";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }];
        readonly name: "getOtcRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0xa98113e0";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "gnsTreasury";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "treasuryShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "stakingShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "burnShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "premiumP";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IOtc.OtcConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly name: "initializeOtc";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x92c02720";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "_collateralIndex";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_collateralAmount";
            readonly type: "uint256";
        }];
        readonly name: "sellGnsForCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x2b381b1e";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "gnsTreasury";
                readonly type: "address";
            }, {
                readonly internalType: "uint64";
                readonly name: "treasuryShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "stakingShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "burnShareP";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "premiumP";
                readonly type: "uint64";
            }];
            readonly internalType: "struct IOtc.OtcConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly name: "updateOtcConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xc4999547";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xac9650d8";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "enabled";
            readonly type: "bool";
        }];
        readonly name: "NativeTransferEnabledUpdated";
        readonly type: "event";
        readonly signature: "0x2cc920a9e8bbfc19b048a3db4be815c4211e93faa33e0b1e97def344aac8aaa3";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint16";
            readonly name: "newLimit";
            readonly type: "uint16";
        }];
        readonly name: "NativeTransferGasLimitUpdated";
        readonly type: "event";
        readonly signature: "0xfbfcf05095de3956a64c56736502dd8e0280a6050ab0de536ce23c8725b61408";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNativeTransferEnabled";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x3bfab75c";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNativeTransferGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x7a5c9d1e";
    }, {
        readonly inputs: readonly [];
        readonly name: "getReentrancyLock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
        readonly signature: "0x40ee2847";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_nativeTransferGasLimit";
            readonly type: "uint16";
        }, {
            readonly internalType: "bool";
            readonly name: "_nativeTransferEnabled";
            readonly type: "bool";
        }];
        readonly name: "initializeChainConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x885af326";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_nativeTransferEnabled";
            readonly type: "bool";
        }];
        readonly name: "updateNativeTransferEnabled";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0x7644f242";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "_nativeTransferGasLimit";
            readonly type: "uint16";
        }];
        readonly name: "updateNativeTransferGasLimit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
        readonly signature: "0xe085d2a7";
    }];
    static createInterface(): GNSDiamondInterface;
    static connect(address: string, runner?: ContractRunner | null): GNSDiamond;
}
