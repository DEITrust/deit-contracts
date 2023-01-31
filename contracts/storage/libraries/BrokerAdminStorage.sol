// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../../interfaces/IERC20Brokered.sol";

library BrokerAdminStorage {

  struct Schema {
    string _symbol;
    IERC20Brokered _brokeredToken;
    uint256 _denominator;
  }

  function schema() internal pure returns (Schema storage ds) {
      bytes32 position =  keccak256(("simple.broker-admin.diamond.storage"));
      assembly {
          ds.slot := position
      }
  }
}
