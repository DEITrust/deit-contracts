// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "../libraries/LibDiamond.sol";
import "../libraries/REGuard.sol";
import "../storage/libraries/BrokerWithdrawalStorage.sol";
import "../storage/libraries/BrokerPublicStorage.sol";
import "../storage/libraries/BrokerAdminStorage.sol";
import "../interfaces/IBrokerWithdrawal.sol";
import "../interfaces/IERC20.sol";

contract BrokerWithdrawalFacet is IBrokerWithdrawal, REGuard {
    modifier onlyOwner() {
        LibDiamond.enforceIsContractOwner();
        _;
    }

    function brokerWithdrawInit(uint ethLimit_, uint assetLimit_) external onlyOwner returns (bool) {
      return limit(ethLimit_,assetLimit_);        
    }

    function withdraw(address to_, uint256 amount_, bool asset_) external onlyOwner reGuarded returns (bool){      
        require(to_ != address(0), "Cannot withdraw to the 0 address");
        bool _withinLimit;
        uint256 _allowance;
        if(asset_){
            _allowance = BrokerWithdrawalStorage.schema()._assetLimitDenominator == 0 ? 0 
                        : BrokerPublicStorage.schema()._assetsPooled / 
                            BrokerWithdrawalStorage.schema()._assetLimitDenominator;
            _withinLimit =  _allowance >= 
                            BrokerWithdrawalStorage.schema()._assetsWithdrawn + amount_;
        }else{
            _allowance = BrokerWithdrawalStorage.schema()._ethLimitDenominator == 0 ? 0 
                        : BrokerPublicStorage.schema()._ethPooled / 
                            BrokerWithdrawalStorage.schema()._ethLimitDenominator;
            _withinLimit = _allowance >= 
                            BrokerWithdrawalStorage.schema()._ethWithdrawn + amount_;
        }
        require(_withinLimit, "Amount is outside of permitted limits.");
        _allowance -= amount_;

        require(_withdraw(to_, amount_, asset_, _allowance), "Error withdrawing");        
        return true;
    }

    function _withdraw(address to_, uint256 amount_, bool asset_, uint256 allowance_) private onlyOwner returns (bool){               
        //@TODO: add some balance checks somewhere in here
        bool _sent = false;
        if(asset_){
            IERC20 _token = IERC20(address(BrokerAdminStorage.schema()._brokeredToken));
            BrokerWithdrawalStorage.schema()._assetsWithdrawn += amount_;
            emit Withdrew(asset_, amount_, allowance_);
            _sent = _token.transfer(to_, amount_);            
        }else{
            BrokerWithdrawalStorage.schema()._ethWithdrawn += amount_;
            emit Withdrew(asset_, amount_, allowance_);
            (_sent,) = to_.call{value: amount_}("");            
        }           
        return _sent;
    }

    function limit(uint ethLimit_, uint assetLimit_) public onlyOwner returns (bool){        
        BrokerWithdrawalStorage.schema()._ethLimitDenominator = ethLimit_;
        BrokerWithdrawalStorage.schema()._assetLimitDenominator = assetLimit_;        
        return true;
    }

    function limit() public view returns (uint,uint){
        return (
            BrokerWithdrawalStorage.schema()._ethLimitDenominator,
            BrokerWithdrawalStorage.schema()._assetLimitDenominator 
        );
    }

}