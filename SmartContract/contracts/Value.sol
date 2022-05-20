//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Value {

  uint256 valeur ;
  function setValue(uint256 _val) public{
    valeur = _val;
  }
  function getValue() public view returns (uint256){
    return valeur;
  }
}