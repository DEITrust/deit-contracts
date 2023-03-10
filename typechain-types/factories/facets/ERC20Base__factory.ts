/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC20Base, ERC20BaseInterface } from "../../facets/ERC20Base";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

export class ERC20Base__factory {
  static readonly abi = _abi;
  static createInterface(): ERC20BaseInterface {
    return new utils.Interface(_abi) as ERC20BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Base {
    return new Contract(address, _abi, signerOrProvider) as ERC20Base;
  }
}
