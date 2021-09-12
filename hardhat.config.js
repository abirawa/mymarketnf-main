require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "6981074810b345bac5d345d882c0454c817b77986748ee25f9db923dde99ab9d";

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "445a915e71ff402c9a233b0514ca0242";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      accounts: [privateKey]
    },
    matic: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};