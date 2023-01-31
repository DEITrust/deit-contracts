// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

library ERC20Storage {

  struct Schema {
    string _name;
    string _symbol;
    uint8 _decimals;
    uint256 _totalSupply;
    uint256 _maxSupply;
    mapping(address => uint256) _balances;
    mapping(address => mapping(address => uint256)) _allowances;
  }

  function schema() internal pure returns (Schema storage ds) {
      bytes32 position = keccak256("simple.erc20.diamond.storage");
      assembly {
          ds.slot := position
      }
  }
}
