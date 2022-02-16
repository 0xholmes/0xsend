require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/e5vXsGtlJmzURFnWe2s2KbdMWuMUoNhh",
      accounts: [
        "d95335a02208c43410366f32f6e042bb156ec5c789c3c061acdaff6fa1d3950f",
      ],
    },
  },
};
