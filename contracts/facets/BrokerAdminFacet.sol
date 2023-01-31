// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "../libraries/LibDiamond.sol";
import "../storage/libraries/BrokerAdminStorage.sol";
import "../interfaces/IBrokerAdmin.sol";


contract BrokerAdminFacet is IBrokerAdmin {
    modifier onlyOwner() {
        LibDiamond.enforceIsContractOwner();
        _;
    }

    function brokerAdminInit(string memory symbol_, address token_, uint256 denominator_) external onlyOwner returns (bool) {
      return _token(symbol_,token_, denominator_);        
    }

    function token() external view override returns (address) {
        return address(BrokerAdminStorage.schema()._brokeredToken);
    }

    function token(string memory symbol_, address token_, uint256 denominator_) external onlyOwner returns (bool) {
        return _token(symbol_, token_, denominator_);
    }

    function _token(string memory symbol_, address token_, uint256 denominator_) private onlyOwner returns (bool) {
        address _oldToken = address(BrokerAdminStorage.schema()._brokeredToken);

        BrokerAdminStorage.schema()._brokeredToken = IERC20Brokered(token_);
        BrokerAdminStorage.schema()._symbol = symbol_;
        BrokerAdminStorage.schema()._denominator = denominator_;

        if (_oldToken != address(0) && _oldToken != token_) {
            emit BrokeredAsset(_oldToken, false);
        }
        emit BrokeredAsset(token_, true);
        emit AssetPrice(address(token_), denominator_);

        return true;
    }
}