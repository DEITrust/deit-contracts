// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library BrokerWithdrawalStorage {

  struct Schema {
    uint256 _ethLimitDenominator;
    uint256 _assetLimitDenominator;
    uint256 _ethWithdrawn;
    uint256 _assetsWithdrawn;
  }

  function schema() internal pure returns (Schema storage ds) {
      bytes32 position =  keccak256(("simple.broker-withdrawal.diamond.storage"));
      assembly {
          ds.slot := position
      }
  }
}
