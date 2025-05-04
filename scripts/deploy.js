const hre = require("hardhat");

async function main() {
  const initialSupply = 1000000 * 10 ** 6; // Example: 1,000,000 tokens with 6 decimals
  const tokenName = "MyAmoyUSDt";
  const tokenSymbol = "MAUSDT";
  const decimals = 6;

  const TetherToken = await hre.ethers.getContractFactory("TetherToken");
  const tetherToken = await TetherToken.deploy(initialSupply, tokenName, tokenSymbol, decimals);
  await tetherToken.waitForDeployment();

  console.log("TetherToken deployed to:", await tetherToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});