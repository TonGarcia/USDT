require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const INFURA_URL = process.env.INFURA_URL;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.4.17",
  },
  networks: {
    amoy: {
      url: INFURA_URL ? INFURA_URL + INFURA_API_KEY : "", // Construct URL with API key
      accounts: DEPLOYER_PRIVATE_KEY ? [`0x${DEPLOYER_PRIVATE_KEY}`] : [],
    },
  },
};