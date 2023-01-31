// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)

pragma solidity 0.8.16;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20Brokered {
   
    event Transfer(address indexed from, address indexed to, uint256 value);
    event NewBroker(address indexed oldMinter, address indexed newMinter, address indexed origin);

    /**
     * @dev Mints `amount` tokens to `to`. `msg.sender` MUST match `minter()`
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function mint(address to, uint256 amount) external returns (bool);

    /**
     * @dev Sets the address of the delegated minter contract.
     *
     * Emits a {Transfer} event.
     */

    function minter(address) external returns (bool);
    
    /**
     * @dev Returns the address of the delegated minter contract.
     *
     */

    function minter() external view returns (address);
}
