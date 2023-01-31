// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../interfaces/IERC20.sol";
import "../interfaces/IERC20Supplies.sol";
import "./ERC20Base.sol";

contract ERC20Facet is ERC20Base, IERC20, IERC20Supplies {
    
    function erc20Init(string memory name_, string memory symbol_, uint8 decimals_, uint256 totalSupply_, uint256 maxSupply_, address mintTo_) external onlyOwner returns (bool){
      ERC20Storage.Schema storage _ds = ERC20Storage.schema();
      _ds._name = name_;
      _ds._symbol = symbol_;
      _ds._decimals = decimals_;
      _ds._totalSupply = totalSupply_ * 10**_ds._decimals;
      _ds._maxSupply = maxSupply_ * 10**_ds._decimals;
      _ds._balances[mintTo_] = _ds._totalSupply;
      return true;
    }

    function symbol() public view virtual returns (string memory) {
        return ERC20Storage.schema()._symbol;
    }

    function name() public view virtual returns (string memory) {
        return ERC20Storage.schema()._name;
    }

    function decimals() public view virtual returns (uint8) {
        return ERC20Storage.schema()._decimals;
    }

    // ERC20 INTERFACE FUNCTIONS

    function totalSupply() external view returns (uint256){
      return ERC20Storage.schema()._totalSupply;
    }

    function maxSupply() external view returns (uint256){
      return ERC20Storage.schema()._maxSupply;
    }

    function balanceOf(address account_) external view returns (uint256){
      return ERC20Storage.schema()._balances[account_];
    }

    function transfer(address to_, uint256 amount_) external returns (bool){
      return _transfer(msg.sender,to_,amount_);
    }
   
}
