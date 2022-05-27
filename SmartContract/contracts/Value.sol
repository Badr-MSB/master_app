//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Value {

  uint256 valeur ;
  uint256[] valeurs;

  function setValue(uint256 _val) public{
    valeur = _val;
  }
  function getValue() public view returns (uint256){
    return valeur;
  }
  function addValue(uint256 _val) public {
    valeurs.push(_val);
  }
}