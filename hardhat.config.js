/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

PRIVATE_KEY = "cf06da86153692b96f021951ab1530461e769536321a1c29a26f8abf17f3554d";
API_URL = "http://127.0.0.1:7545";

//const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   //defaultNetwork: "bluesense",
   bluesense: {
      hardhat: {},
      custom: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 6721975,
         gasPrice: 20000000000,
      }
   },
}