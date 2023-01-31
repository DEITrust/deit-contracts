// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library ERC20BrokeredStorage {

  struct Schema {
      address _minter;      
  }

  function schema() internal pure returns (Schema storage ds) {
      bytes32 position =  keccak256("simple.erc20-brokered.diamond.storage");
      assembly {
          ds.slot := position
      }
  }
}
