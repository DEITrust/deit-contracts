// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "../libraries/LibDiamond.sol";
import "../libraries/REGuard.sol";
import "../storage/libraries/BrokerPublicStorage.sol";
import "../storage/libraries/BrokerAdminStorage.sol";
import "../interfaces/IBrokerPublic.sol";
import "../interfaces/IERC20Brokered.sol";
import "../interfaces/IERC20Supplies.sol";

contract BrokerPublicFacet is IBrokerPublic, REGuard {
    
    modifier onlyBrokering(){
        require(address(0) != address(BrokerAdminStorage.schema()._brokeredToken), "No token set for brokerage. Check deit.ca for status updates.");
        _;
    }

    function buy(uint amount_) external payable onlyBrokering reGuarded returns (bool) {               
        uint256 _remainder = _remaining();
        require (_remainder >= (amount_*2), "Fixed price supply capped at half max, which this purchase would breach.");       
        uint256 _cost = amount_ * _price();
        require(msg.value >= _cost/10**18, "Insufficient ETH transferred for amount.");        
        
        require(_buy(amount_), "Error purchasing tokens.");        
        return true;
    }

    function _buy(uint amount_) private onlyBrokering returns (bool) {               
        BrokerPublicStorage.schema()._totalAssetBought[msg.sender] += amount_;
        BrokerPublicStorage.schema()._totalETH[msg.sender] += msg.value;
        emit Bought(msg.sender, amount_);
        
        IERC20Brokered _token = BrokerAdminStorage.schema()._brokeredToken;
        bool buyerMinted = _token.mint(msg.sender, amount_);
        bool brokerMinted = _token.mint(address(this), amount_);
        return buyerMinted && brokerMinted;        
    }

    function bought(address buyer_) public view returns (uint256, uint256) {
        return (
                BrokerPublicStorage.schema()._totalAssetBought[buyer_],
                BrokerPublicStorage.schema()._totalETH[buyer_]
        );
    }    

    function price() public view onlyBrokering returns (uint256) {      
        return _price();
    }
    
    function _price() internal view onlyBrokering returns (uint256) {      
        return (1*10**18)/BrokerAdminStorage.schema()._denominator;
    }

    function remaining() public onlyBrokering reGuarded returns (uint256) {      
        return _remaining();
    }

    function _remaining() private onlyBrokering returns (uint256) {      
        IERC20Supplies _erc20 = IERC20Supplies(address(BrokerAdminStorage.schema()._brokeredToken));
        uint256 _half = _erc20.maxSupply()/2;
        uint256 _total = _erc20.totalSupply();
        return _half > _total ? _half - _total : 0;
    }
}