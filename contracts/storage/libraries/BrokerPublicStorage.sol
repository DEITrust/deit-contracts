// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library BrokerPublicStorage {

  struct Schema {
    mapping(address=>uint256) _totalAssetBought;
    mapping(address=>uint256) _totalETH;
    uint256 _assetsPooled;
    uint256 _ethPooled;
  }

  function schema() internal pure returns (Schema storage ds) {
      bytes32 position =  keccak256(("simple.broker-public.diamond.storage"));
      assembly {
          ds.slot := position
      }
  }
}
