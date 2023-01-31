// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "../libraries/LibDiamond.sol";
import "../storage/libraries/ERC20BrokeredStorage.sol";
import "../storage/libraries/ERC20Storage.sol";
import "../interfaces/IERC20Brokered.sol";

contract ERC20BrokeredFacet is IERC20Brokered {    

    modifier onlyOwner() {
        LibDiamond.enforceIsContractOwner();
        _;
    }

    modifier onlyMinter() {
        require(_minter() != address(0), "Minter is not set. Token minting currently locked.");
        require(_minter() == msg.sender, "Only the delegated broker can mint this token.");
        _;
    }

    function erc20BrokeredInit(address minter_) external onlyOwner returns (bool) {
        return minter(minter_);
    }

    function minter() external view returns (address) {
        return _minter();
    }

    function _minter() internal view returns (address) {
        return ERC20BrokeredStorage.schema()._minter;
    }

    function minter(address newMinter_) public onlyOwner returns (bool) {
        address _oldAddress = ERC20BrokeredStorage.schema()._minter;
        ERC20BrokeredStorage.schema()._minter = newMinter_;

        emit NewBroker(_oldAddress, newMinter_, msg.sender);
        return true;
    }

    function mint(address to_, uint256 amount_) external onlyMinter returns (bool) {
        return _mint(to_, amount_);
    }

    function _mint(address to_, uint256 amount_) private returns (bool) {
        require(to_ != address(0), "ERC20: can't mint to 0 address");
        ERC20Storage.Schema storage _ds = ERC20Storage.schema();
        _ds._totalSupply += amount_;
        _ds._balances[to_] += amount_;

        emit Transfer(address(0), to_, amount_);
        return true;
    }
    
}
