require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: "https://cold-sparkling-sea.ethereum-sepolia.quiknode.pro/f9fe50b03782764a240afbfa523dd7ef35721b2c/",
      accounts: ["af43d23484d33402801c67cdcddd7e0116ee81d6d5c5cdf8ac35d6da0dc3bf80"],
    },
  },
};
