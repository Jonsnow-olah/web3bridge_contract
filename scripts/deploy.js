const hre = require("hardhat");



async function main() {
  const initialMessage = "Hello world";
  const message = await hre.ethers.deployContract("MyMessage", [initialMessage]);

  await message.waitForDeployment();

  console.log(
    `MyMessage contract successfully deployed to ${message.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
