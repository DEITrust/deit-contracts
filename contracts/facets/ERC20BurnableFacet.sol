// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../libraries/REGuard.sol";
import "../interfaces/IERC20Burnable.sol";
import "./ERC20Base.sol";

//@TODO: implement
abstract contract ERC20BurnableFacet is ERC20Base, IERC20Burnable, REGuard {


    function burn(address from_, uint256 amount_) external reGuarded returns (bool){
      require(from_ != address(0), "ERC20: can't burn from 0 address");
      _requireFunds(from_, amount_);      
      require(_burn(from_, amount_), "Error while burning.");
      
      emit Transfer(from_, address(0), amount_);
      return true;
    }


    function _burn(address from_, uint256 amount_) private returns (bool){
      ERC20Storage.Schema storage _ds = ERC20Storage.schema();
      _ds._balances[from_] -= amount_;
      _ds._totalSupply -= amount_;     
      return true;
    }

}