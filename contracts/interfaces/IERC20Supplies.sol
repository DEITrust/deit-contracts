// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)
// Extended with maxSupply, just to be difficult

pragma solidity 0.8.16;

/**
 * @dev Interface of the maxSupply and totalSupply functions for ERC20.
 */
interface IERC20Supplies {
    
    function maxSupply() external returns (uint256);
    function totalSupply() external returns (uint256);
}