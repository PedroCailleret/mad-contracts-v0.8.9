/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MADFactory1155,
  MADFactory1155Interface,
} from "../MADFactory1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRoyalty",
    type: "error",
  },
  {
    inputs: [],
    name: "SplitterFail",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSplitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCollection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCreator",
        type: "address",
      },
    ],
    name: "ERC1155BasicCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSplitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCollection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCreator",
        type: "address",
      },
    ],
    name: "ERC1155LazyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSplitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCollection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCreator",
        type: "address",
      },
    ],
    name: "ERC1155MinimalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSplitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCollection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCreator",
        type: "address",
      },
    ],
    name: "ERC1155WhitelistCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newMarket",
        type: "address",
      },
    ],
    name: "MarketplaceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRouter",
        type: "address",
      },
    ],
    name: "RouterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newSigner",
        type: "address",
      },
    ],
    name: "SignerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "shares",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "splitter",
        type: "address",
      },
    ],
    name: "SplitterCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "colInfo",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "enum Types.ERC1155Type",
        name: "colType",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "colSalt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "splitter",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_tokenType",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenSalt",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "_splitter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_royalty",
        type: "uint256",
      },
    ],
    name: "createCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "creatorAuth",
    outputs: [
      {
        internalType: "bool",
        name: "stdout",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_colID",
        type: "bytes32",
      },
    ],
    name: "creatorCheck",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "check",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_colAddress",
        type: "address",
      },
    ],
    name: "getColID",
    outputs: [
      {
        internalType: "bytes32",
        name: "colID",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_salt",
        type: "string",
      },
    ],
    name: "getDeployedAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getIDsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "market",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
    ],
    name: "setMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_splitterSalt",
        type: "string",
      },
      {
        internalType: "address",
        name: "_ambassador",
        type: "address",
      },
      {
        internalType: "address",
        name: "_project",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ambShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_projectShare",
        type: "uint256",
      },
    ],
    name: "splitterCheck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "splitterInfo",
    outputs: [
      {
        internalType: "address",
        name: "splitter",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "splitterSalt",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "ambassador",
        type: "address",
      },
      {
        internalType: "address",
        name: "project",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ambShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "projectShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_colID",
        type: "bytes32",
      },
    ],
    name: "typeChecker",
    outputs: [
      {
        internalType: "uint8",
        name: "pointer",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userTokens",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405260016000553480156200001657600080fd5b50604051620029be380380620029be833981016040819052620000399162000270565b3060601b608052600180546001600160a01b0319163390811790915560405181906000907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506001805460ff60a01b191690556200009b83620000ba565b620000a68262000145565b620000b181620001cc565b505050620002b9565b6001546001600160a01b03163314620001095760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b60068190556040516001600160a01b038216907f210690abd7fd6cdbb8f2beb202b2a253d58d7a0813b2175c4172c14c0c1af6dc90600090a250565b6001546001600160a01b03163314620001905760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640162000100565b60058190556040516001600160a01b038216907f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090600090a250565b6001546001600160a01b03163314620002175760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b604482015260640162000100565b60078190556040516001600160a01b038216907f5553331329228fbd4123164423717a4a7539f6dfa1c3279a923b98fd681a6c7390600090a250565b80516001600160a01b03811681146200026b57600080fd5b919050565b60008060006060848603121562000285578283fd5b620002908462000253565b9250620002a06020850162000253565b9150620002b06040850162000253565b90509250925092565b60805160601c6126e6620002d86000396000611b8e01526126e66000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80638691fe46116100d8578063bc8b58381161008c578063f887ea4011610066578063f887ea401461040b578063f9f411d81461041e578063fa2405171461043157600080fd5b8063bc8b5838146103c0578063c0d78655146103d3578063d93cb8fd146103e657600080fd5b80639750f2e0116100bd5780639750f2e0146102cc578063b64bd5eb1461037b578063b7762c6d146103ad57600080fd5b80638691fe46146102905780638da5cb5b146102b957600080fd5b8063617d1d3b1161013a57806376de0f3d1161011457806376de0f3d1461024a57806380f556051461025d5780638456cb591461028857600080fd5b8063617d1d3b146101f35780636c19e783146102245780636dcea85f1461023757600080fd5b80633b8440241161016b5780633b844024146101ba5780633f4ba83a146101cd5780635c975abb146101d557600080fd5b806306fdde031461018757806313af4035146101a5575b600080fd5b61018f61048f565b60405161019c9190612502565b60405180910390f35b6101b86101b33660046121a1565b6104a7565b005b6101b86101c8366004612325565b610533565b6101b8610da5565b600154600160a01b900460ff165b604051901515815260200161019c565b6102166102013660046121a1565b60601b6bffffffffffffffffffffffff191690565b60405190815260200161019c565b6101b86102323660046121a1565b610df8565b6101b86102453660046121a1565b610e7d565b6101e36102583660046121d9565b610f02565b600654610270906001600160a01b031681565b6040516001600160a01b03909116815260200161019c565b6101b8611014565b61021661029e3660046121a1565b6001600160a01b031660009081526003602052604090205490565b600154610270906001600160a01b031681565b6103326102da3660046121d9565b6004602081815260009384526040808520909152918352912080546001820154600283015460038401549484015460058501546006909501546001600160a01b03948516969395928516949093169290919060ff1687565b604080516001600160a01b039889168152602081019790975294871694860194909452949091166060840152608083015260a082019290925290151560c082015260e00161019c565b61038e61038936600461223c565b611065565b604080516001600160a01b03909316835290151560208301520161019c565b6101b86103bb3660046122b3565b6110b1565b6102706103ce366004612278565b611a93565b6101b86103e13660046121a1565b611aad565b6103f96103f436600461223c565b611b32565b60405160ff909116815260200161019c565b600554610270906001600160a01b031681565b61021661042c366004612211565b611b52565b61047e61043f36600461223c565b600260208190526000918252604090912080546001820154928201546003909201546001600160a01b0380831694600160a01b90930460ff1693911685565b60405161019c95949392919061241a565b6060602080526707666163746f727960475260606020f35b6001546001600160a01b031633146104f55760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b60018190556040516001600160a01b0382169033907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a350565b6000546001146105725760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104ec565b600260005561057f611b83565b600154600160a01b900460ff16156105c25760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104ec565b6105cc8783611bfb565b6105d581611c47565b60018760ff1610156107c15760055460405163a39b1f6760e01b8152600091829173__$81eac6ad64409f164e0ded5e5f4fd77c1b$__9163a39b1f6791610632918c918a918d918b916001600160a01b0316908b90600401612602565b604080518083038186803b15801561064957600080fd5b505af415801561065d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106819190612254565b90925090506000606082901b6bffffffffffffffffffffffff1916326000818152600360208181526040808420805460018101825590855282852001869055805160a0810182529485528482018481528582018a90524360608701526001600160a01b038c8116608088015287865260029093529320845181546001600160a01b03198116919093169081178255935195965093949284926001600160a81b03199092161790600160a01b90849081111561074c57634e487b7160e01b600052602160045260246000fd5b0217905550604082810151600183015560608301516002830155608090920151600390910180546001600160a01b0319166001600160a01b039283161790559051329184811691908816907f424aeb292cf668c5965688578dab006371db7f3bdbc12539e6de03245460f2e790600090a45050505b8660ff16600114156109b25760055460405163f509856f60e01b8152600091829173__$fcf875cc5906322e911192ca0ce957b541$__9163f509856f91610822918c918a918d918d918c916001600160a01b03909116908c90600401612654565b604080518083038186803b15801561083957600080fd5b505af415801561084d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108719190612254565b90925090506000606082901b6bffffffffffffffffffffffff191632600081815260036020818152604080842080546001808201835591865283862001879055815160a0810183529586528583019081528582018a90524360608701526001600160a01b038c8116608088015287865260029093529320845181546001600160a01b03198116919093169081178255935195965093949284926001600160a81b03199092161790600160a01b90849081111561093d57634e487b7160e01b600052602160045260246000fd5b0217905550604082810151600183015560608301516002830155608090920151600390910180546001600160a01b0319166001600160a01b039283161790559051329184811691908816907f831d7df6dc13f0f103f9bd6f0b7fd04b2dcbf46dda6bd6cc86a08236f2b9795790600090a45050505b8660ff1660021415610ba557600554604051637aab531560e11b8152600091829173__$1ff96cff56c59196c728166ea91a201dbc$__9163f556a62a91610a13918c918a918d918d918c916001600160a01b03909116908c90600401612654565b604080518083038186803b158015610a2a57600080fd5b505af4158015610a3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a629190612254565b90925090506000606082901b6bffffffffffffffffffffffff1916326000818152600360208181526040808420805460018101825590855282852001869055805160a08101825294855260028583018181528683018b90524360608801526001600160a01b038d81166080890152888752919093529320845181546001600160a01b03198116919095169081178255915195965093949284926001600160a81b031990911690911790600160a01b908490811115610b3057634e487b7160e01b600052602160045260246000fd5b0217905550604082810151600183015560608301516002830155608090920151600390910180546001600160a01b0319166001600160a01b039283161790559051329184811691908816907f6907b06152bdb3953a09296fafb448a49b29996d7d10480527e8ee7836f0d34190600090a45050505b60028760ff161115610d975760055460075460405163cbaaa44560e01b8152600092839273__$c2351f5b298e4c3e8bff54cee5f2f72abf$__9263cbaaa44592610c08928d928b928b926001600160a01b03918216929116908b906004016125ad565b604080518083038186803b158015610c1f57600080fd5b505af4158015610c33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c579190612254565b90925090506000606082901b6bffffffffffffffffffffffff1916326000818152600360208181526040808420805460018101825590855282852001869055805160a0810182529485528482018381528582018a90524360608701526001600160a01b038c8116608088015287865260029093529320845181546001600160a01b03198116919093169081178255935195965093949284926001600160a81b03199092161790600160a01b908490811115610d2257634e487b7160e01b600052602160045260246000fd5b0217905550604082810151600183015560608301516002830155608090920151600390910180546001600160a01b0319166001600160a01b039283161790559051329184811691908816907feb108a5efcda66d7081440bd52580ba737e08476ae131e4355017f26a6747f4390600090a45050505b505060016000555050505050565b6001546001600160a01b03163314610dee5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104ec565b610df6611c69565b565b6001546001600160a01b03163314610e415760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104ec565b60078190556040516001600160a01b038216907f5553331329228fbd4123164423717a4a7539f6dfa1c3279a923b98fd681a6c7390600090a250565b6001546001600160a01b03163314610ec65760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104ec565b60068190556040516001600160a01b038216907f210690abd7fd6cdbb8f2beb202b2a253d58d7a0813b2175c4172c14c0c1af6dc90600090a250565b6000610f0c611d05565b610f1582611d38565b610f1d575060005b6001600160a01b0382166000908152600360205260408120546bffffffffffffffffffffffff19606086901b16919067ffffffffffffffff811115610f7257634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610f9b578160200160208202803683370190505b50805190915060009060035b81831015611009576001600160a01b0387166000908152602082905260409020805484908110610fe757634e487b7160e01b600052603260045260246000fd5b9060005260206000200154851415610ffe57600195505b826001019250610fa7565b505050505092915050565b6001546001600160a01b0316331461105d5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104ec565b610df6611d61565b600080611070611de7565b600083815260026020526040902080546001600160a01b031692503283141561109857600191505b816110ab57634ca888676000526004601cfd5b50915091565b6000546001146110f05760405162461bcd60e51b815260206004820152600a6024820152695245454e5452414e435960b01b60448201526064016104ec565b60026000556110fd611b83565b600154600160a01b900460ff16156111405760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104ec565b845160208601206001600160a01b03851615801561116557506001600160a01b038416155b156113355760015460009061118690829081906001600160a01b0316611e1a565b90506000611195600080611f0e565b9050600073__$e0b3dea100c37e1c0d530933159e390817$__636ec6cf158a85856040518463ffffffff1660e01b81526004016111d493929190612515565b60206040518083038186803b1580156111ec57600080fd5b505af4158015611200573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122491906121bd565b6040805160e0810182526001600160a01b0380841680835260208084018a81526000858701818152606087018281526080880183815260a08901848152600160c08b01818152328088526004808b528e89209b89529a909952958c90209a518b54908b166001600160a01b0319918216178c559651908b0155925160028a018054918a1691871691909117905590516003890180549190981694169390931790955590519285019290925591516005840155516006909201805492151560ff19909316929092179091559051919250907f539b061603ad7342d8dffcd213ed3dc2afd3a1b9bc14e3ff19be01fa3416c661906113259085908790869061246f565b60405180910390a2505050611a86565b6001600160a01b0385161580159061135457506001600160a01b038416155b801561135f57508215155b801561136b5750601583105b156115cc5760015460009061138c90879083906001600160a01b0316611e1a565b9050600061139b856000611f0e565b9050600073__$e0b3dea100c37e1c0d530933159e390817$__636ec6cf158a85856040518463ffffffff1660e01b81526004016113da93929190612515565b60206040518083038186803b1580156113f257600080fd5b505af4158015611406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142a91906121bd565b90506040518060e00160405280826001600160a01b03168152602001858152602001896001600160a01b0316815260200160006001600160a01b03168152602001878152602001600081526020016001151581525060046000326001600160a01b03166001600160a01b031681526020019081526020016000206000836001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015560408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff021916908315150217905550905050326001600160a01b03167f539b061603ad7342d8dffcd213ed3dc2afd3a1b9bc14e3ff19be01fa3416c6618385846040516113259392919061246f565b6001600160a01b038416158015906115eb57506001600160a01b038516155b80156115f657508115155b80156116025750605b82105b156118635760015460009061162390829087906001600160a01b0316611e1a565b90506000611632600085611f0e565b9050600073__$e0b3dea100c37e1c0d530933159e390817$__636ec6cf158a85856040518463ffffffff1660e01b815260040161167193929190612515565b60206040518083038186803b15801561168957600080fd5b505af415801561169d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c191906121bd565b90506040518060e00160405280826001600160a01b0316815260200185815260200160006001600160a01b03168152602001886001600160a01b03168152602001600081526020018681526020016001151581525060046000326001600160a01b03166001600160a01b031681526020019081526020016000206000836001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506020820151816001015560408201518160020160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff021916908315150217905550905050326001600160a01b03167f539b061603ad7342d8dffcd213ed3dc2afd3a1b9bc14e3ff19be01fa3416c6618385846040516113259392919061246f565b6001600160a01b0385161580159061188357506001600160a01b03841615155b801561188e57508215155b801561189a5750601583105b80156118a557508115155b80156118b15750604782105b15611a79576001546000906118d290879087906001600160a01b0316611e1a565b905060006118e08585611f0e565b9050600073__$e0b3dea100c37e1c0d530933159e390817$__636ec6cf158a85856040518463ffffffff1660e01b815260040161191f93929190612515565b60206040518083038186803b15801561193757600080fd5b505af415801561194b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196f91906121bd565b6040805160e0810182526001600160a01b0380841680835260208084018a81528e84168587019081528e851660608701908152608087018f815260a088018f8152600160c08a018181523260008181526004808b528e82209b82529a909952978c90209a518b54908b166001600160a01b0319918216178c559651918b0191909155935160028a018054918a1691871691909117905591516003890180549190981694169390931790955590519285019290925591516005840155516006909201805492151560ff19909316929092179091559051919250907f539b061603ad7342d8dffcd213ed3dc2afd3a1b9bc14e3ff19be01fa3416c661906113259085908790869061246f565b62adecf06000526004601cfd5b5050600160005550505050565b80516020820120600090611aa681612011565b9392505050565b6001546001600160a01b03163314611af65760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016104ec565b60058190556040516001600160a01b038216907f7aed1d3e8155a07ccf395e44ea3109a0e2d6c9b29bbbe9f142d9790596f4dc8090600090a250565b6000611b3c611de7565b5060009081526002602052604090205460a01c90565b60036020528160005260406000208181548110611b6e57600080fd5b90600052602060002001600091509150505481565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610df65760405162461bcd60e51b815260206004820152600860248201527f4241445f43414c4c00000000000000000000000000000000000000000000000060448201526064016104ec565b3260009081526004602090815260408083206001600160a01b038516845290915290206006015460ff166003831181151715611c4257634ca8886760e01b60005260046000fd5b505050565b6019810615156103e882111715611c665763e0e54ced6000526004601cfd5b50565b600154600160a01b900460ff16611cc25760405162461bcd60e51b815260206004820152600860248201527f554e50415553454400000000000000000000000000000000000000000000000060448201526064016104ec565b6001805460ff60a01b191690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b6006543314610df6577f4ca88867ffffffffffffffffffffffffffffffffffffffffffffffffffffffff60005260046000fd5b6000604051600360208201528260408201526040812090508054611d5b57600091505b50919050565b600154600160a01b900460ff1615611da45760405162461bcd60e51b815260206004820152600660248201526514105554d15160d21b60448201526064016104ec565b6001805460ff60a01b1916600160a01b1790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602001611cfb565b6005543314610df6577f4ca88867ffffffffffffffffffffffffffffffffffffffffffffffffffffffff60005260046000fd5b6060821584151660018114611e34578015611e5857611f06565b60405191506002600083015282602083015232604083015260608201604052611f06565b831560018114611e6d578015611e9757611f04565b60405192506003600084015283602084015285604084015232606084015260808301604052611f04565b851560018114611eac578015611ed657611f02565b60405193506003600085015284602085015285604085015232606085015260808401604052611f02565b60405193506004600085015284602085015286604085015285606085015232608085015260a084016040525b505b505b509392505050565b6060811583151660018114611f28578015611f4e5761200a565b604051915060026000830152600a6020830152605a60408301526060820160405261200a565b821560018114611f63578015611f9157612008565b604051925060036000840152600a602084015284604084015284605a03606084015260808301604052612008565b841560018114611fa6578015611fd457612006565b604051935060036000850152600a602085015284604085015284605a03606085015260808401604052612006565b604051935060046000850152600a6020850152856040850152846060850152848601605a03608085015260a084016040525b505b505b5092915050565b604080518082018252601081527f67363d3d37363d34f03d5260086018f30000000000000000000000000000000060209182015290517fff00000000000000000000000000000000000000000000000000000000000000918101919091526bffffffffffffffffffffffff193060601b166021820152603581018290527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f605582015260009081906120da906075015b6040516020818303038152906040528051906020012090565b6040516135a560f21b60208201526bffffffffffffffffffffffff19606083901b166022820152600160f81b6036820152909150611aa6906037016120c1565b600082601f83011261212a578081fd5b813567ffffffffffffffff80821115612145576121456126ae565b604051601f8301601f19908116603f0116810190828211818310171561216d5761216d6126ae565b81604052838152866020858801011115612185578485fd5b8360208701602083013792830160200193909352509392505050565b6000602082840312156121b2578081fd5b8135611aa6816126c4565b6000602082840312156121ce578081fd5b8151611aa6816126c4565b600080604083850312156121eb578081fd5b82356121f6816126c4565b91506020830135612206816126c4565b809150509250929050565b60008060408385031215612223578182fd5b823561222e816126c4565b946020939093013593505050565b60006020828403121561224d578081fd5b5035919050565b60008060408385031215612266578182fd5b825191506020830151612206816126c4565b600060208284031215612289578081fd5b813567ffffffffffffffff81111561229f578182fd5b6122ab8482850161211a565b949350505050565b600080600080600060a086880312156122ca578081fd5b853567ffffffffffffffff8111156122e0578182fd5b6122ec8882890161211a565b95505060208601356122fd816126c4565b9350604086013561230d816126c4565b94979396509394606081013594506080013592915050565b600080600080600080600060e0888a03121561233f578182fd5b873560ff8116811461234f578283fd5b9650602088013567ffffffffffffffff8082111561236b578384fd5b6123778b838c0161211a565b975060408a0135965060608a0135955060808a013591508082111561239a578384fd5b506123a78a828b0161211a565b93505060a08801356123b8816126c4565b8092505060c0880135905092959891949750929550565b60008151808452815b818110156123f4576020818501810151868301820152016123d8565b818111156124055782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03868116825260a08201906004871061244a57634e487b7160e01b600052602160045260246000fd5b8660208401528560408401528460608401528084166080840152509695505050505050565b606080825284519082018190526000906020906080840190828801845b828110156124a85781518452928401929084019060010161248c565b50505083810382850152855180825286830191830190845b818110156124e75783516001600160a01b03168352602083019385019392506001016124c0565b50506001600160a01b038616604086015292506122ab915050565b602081526000611aa660208301846123cf565b60608152600061252860608301866123cf565b828103602084810191909152855180835286820192820190845b818110156125695784516001600160a01b0316835260208301948401949250600101612542565b505084810360408601528551808252908201925081860190845b8181101561259f57825185529383019391830191600101612583565b509298975050505050505050565b60c0815260006125c060c08301896123cf565b82810360208401526125d281896123cf565b6001600160a01b0397881660408501529587166060840152505091909316608082015260a0019190915292915050565b60c08152600061261560c08301896123cf565b828103602084015261262781896123cf565b604084019790975250506001600160a01b03938416606082015291909216608082015260a0015292915050565b60e08152600061266760e083018a6123cf565b8281036020840152612679818a6123cf565b6040840198909852505060608101949094526001600160a01b039283166080850152911660a083015260c09091015292915050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114611c6657600080fdfea164736f6c6343000804000a";

type MADFactory1155ConstructorParams =
  | [linkLibraryAddresses: MADFactory1155LibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MADFactory1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class MADFactory1155__factory extends ContractFactory {
  constructor(...args: MADFactory1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        MADFactory1155__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: MADFactory1155LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$81eac6ad64409f164e0ded5e5f4fd77c1b\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/ERC1155Deployer.sol:ERC1155MinimalDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$fcf875cc5906322e911192ca0ce957b541\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/ERC1155Deployer.sol:ERC1155BasicDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1ff96cff56c59196c728166ea91a201dbc\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/ERC1155Deployer.sol:ERC1155WhitelistDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c2351f5b298e4c3e8bff54cee5f2f72abf\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/ERC1155Deployer.sol:ERC1155LazyDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e0b3dea100c37e1c0d530933159e390817\\$__", "g"),
      linkLibraryAddresses[
        "contracts/lib/deployers/SplitterDeployer.sol:SplitterDeployer"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _marketplace: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MADFactory1155> {
    return super.deploy(
      _marketplace,
      _router,
      _signer,
      overrides || {}
    ) as Promise<MADFactory1155>;
  }
  override getDeployTransaction(
    _marketplace: PromiseOrValue<string>,
    _router: PromiseOrValue<string>,
    _signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _marketplace,
      _router,
      _signer,
      overrides || {}
    );
  }
  override attach(address: string): MADFactory1155 {
    return super.attach(address) as MADFactory1155;
  }
  override connect(signer: Signer): MADFactory1155__factory {
    return super.connect(signer) as MADFactory1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MADFactory1155Interface {
    return new utils.Interface(_abi) as MADFactory1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MADFactory1155 {
    return new Contract(address, _abi, signerOrProvider) as MADFactory1155;
  }
}

export interface MADFactory1155LibraryAddresses {
  ["contracts/lib/deployers/ERC1155Deployer.sol:ERC1155MinimalDeployer"]: string;
  ["contracts/lib/deployers/ERC1155Deployer.sol:ERC1155BasicDeployer"]: string;
  ["contracts/lib/deployers/ERC1155Deployer.sol:ERC1155WhitelistDeployer"]: string;
  ["contracts/lib/deployers/ERC1155Deployer.sol:ERC1155LazyDeployer"]: string;
  ["contracts/lib/deployers/SplitterDeployer.sol:SplitterDeployer"]: string;
}
