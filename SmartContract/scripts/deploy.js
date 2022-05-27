// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

//import { ethers } from '../../SmartContract/node_modules/hardhat/internal/lib/hardhat-lib';

const main = async () => {
  const signer = await hre.ethers.getSigner();
  const Value = await hre.ethers.getContractFactory('Value', signer[0]);
  const value = await Value.deploy();

  await value.deployed();
  console.log('value deployed to:', value.address, '\n from :', signer);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
