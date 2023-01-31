// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
abstract contract REGuard {
    bool internal lock;
    
    modifier reGuarded() {
     require(!lock);
     lock = true;
      _;
      lock = false;
    }
}