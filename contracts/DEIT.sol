// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
*
* Implementation of a diamond.
/******************************************************************************/

import { Diamond } from "./Diamond.sol";

contract DEIT is Diamond {   
     constructor(address _contractOwner, address _diamondCutFacet) 
        payable Diamond(_contractOwner, _diamondCutFacet) {  

     }
}