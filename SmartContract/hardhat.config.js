// https://eth-rinkeby.alchemyapi.io/v2/8ESZ8aPNQ1HKPhAgRa7S5p-D-ZReaIxJ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/8ESZ8aPNQ1HKPhAgRa7S5p-D-ZReaIxJ',
      accounts: [
        '0x0663c3a09d7a629769fb97f7247a4d2d190a3d9f94cabd9a5592c83fbee451fc',
      ],
    },
  },
};
