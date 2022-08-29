/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC721BasicEventsAndErrors,
  ERC721BasicEventsAndErrorsInterface,
} from "../../../../../../../lib/tokens/ERC721/Base/interfaces/ERC721EventAndErrors.sol/ERC721BasicEventsAndErrors";

const _abi = [
  {
    inputs: [],
    name: "LoopOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxSupplyReached",
    type: "error",
  },
  {
    inputs: [],
    name: "NotMintedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicMintClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "BaseURISet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newPublicState",
        type: "bool",
      },
    ],
    name: "PublicMintStateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newRoyaltyFee",
        type: "uint256",
      },
    ],
    name: "RoyaltyFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RoyaltyRecipientSet",
    type: "event",
  },
];

export class ERC721BasicEventsAndErrors__factory {
  static readonly abi = _abi;
  static createInterface(): ERC721BasicEventsAndErrorsInterface {
    return new utils.Interface(_abi) as ERC721BasicEventsAndErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721BasicEventsAndErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721BasicEventsAndErrors;
  }
}