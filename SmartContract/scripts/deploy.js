// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const accounts = await hre.ethers.getSigners();
  const Value = await hre.ethers.getContractFactory(
    'Value',
    accounts[1].address
  );
  const value = await Value.deploy();

  await value.deployed();
  ///////////////////////
  console.log('///////////////////////');
  console.log('value deployed to:', value.address);
  const ammount = await accounts[1].getBalance();
  console.log('ammount:', ammount);
  ///////////////////////
  console.log('///////////////////////');
  const tx = await value.setValue(5);
  console.log(await value.getValue());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
