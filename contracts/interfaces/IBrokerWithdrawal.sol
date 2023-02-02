// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

/**
 * @dev Interface of the BrokerAdmin Facet.
 */
interface IBrokerWithdrawal {
   
    event Withdrew(bool indexed asset_, uint256 indexed amount_, uint256 indexed limitRemaining_);

    /**
     * @dev The function that lets the owner withdraw ETH or the brokered asset.
     * `asset_` will default to false and transfer ETH, but true will instead transfer brokered asset
     */
    function withdraw(address to_, uint amount_, bool asset_) external returns (bool);

    /**
     * @dev This function sets the eth/asset limit denominators.
     */
    function limit(uint256 ethLimitDenominator_, uint256 assetLimitDenominator_) external returns (bool);

    /**
     * @dev This function returns the eth and asset limit denominators respectively.
     */
    function limit() external returns (uint256, uint256);

}