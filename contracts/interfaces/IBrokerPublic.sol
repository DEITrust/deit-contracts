// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

/**
 * @dev Interface of the BrokerAdmin Facet.
 */
interface IBrokerPublic {
   
    event Bought(address indexed buyer_, uint256 indexed amount_);

    /**
     * @dev The function that lets the user purchase and mint the token contract being brokered.
     */
    function buy(uint amount_) external payable returns (bool);

    /**
     * @dev This function returns the total bought via this contract by an address `buyer`.
     */
    function bought(address buyer_) external returns (uint256, uint256);

    function price() external returns (uint256);
    
    function remaining() external returns (uint256);

}