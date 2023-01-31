// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "./ERC20Base.sol";
import "../interfaces/IERC20Allowance.sol";


contract ERC20AllowanceFacet is ERC20Base, IERC20Allowance {
    function transferFrom(address from_, address to_, uint256 amount_) external returns (bool) {
        _requireAllowance(from_, to_, amount_);
        return _transfer(from_, to_, amount_);
    }

    function allowance(address owner_, address spender_) public view returns (uint256) {
        return ERC20Storage.schema()._allowances[owner_][spender_];
    }

    function approve(address spender_, uint256 amount_) external returns (bool) {
        return _approve(msg.sender, spender_, amount_);
    }

    function _requireAllowance(address owner_, address spender_, uint256 amount_) private view {
        require(_sufficientAllowance(owner_, spender_, amount_), "ERC20: Insufficient Allowance");
    }

    function _sufficientAllowance(address owner_, address spender_, uint256 amount_) private view returns (bool) {
        return ERC20Storage.schema()._allowances[owner_][spender_] >= amount_;
    }

    function _approve(address approver_, address spender_, uint256 amount_) private returns (bool) {
        _requireFunds(approver_, amount_);

        ERC20Storage.schema()._allowances[approver_][spender_] = amount_;

        emit Approval(approver_, spender_, amount_);
        return true;
    }
}