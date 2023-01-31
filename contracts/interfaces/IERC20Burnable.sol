// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)
// Extended with maxSupply, just to be difficult

pragma solidity 0.8.16;

interface IERC20Burnable {
 
    function burn(address from_, uint256 amount_) external returns (bool);
}