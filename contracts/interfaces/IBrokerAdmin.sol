// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

/**
 * @dev Interface of the BrokerAdmin Facet.
 */
interface IBrokerAdmin {
   
    event BrokeredAsset(address indexed asset_, bool indexed underBrokerage_);
    event AssetPrice(address indexed asset_, uint256 indexed price_);

    /**
     * @dev Returns the token address being brokered`
     */
    function token() external returns (address);

    /**
     * @dev Sets `token_` as the currently brokered asset. `msg.sender` MUST match `owner()`
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits up to 2 {BrokeredAsset} events followed by an {AssetPrice} event.
     */
    function token(string memory symbol_, address token_, uint256 denominator_) external returns (bool);

}