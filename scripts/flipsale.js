const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const API_KEY = process.env.API_KEY;

const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/DulceNFT.sol/DulceNFT.json");

const ankrProvider = new ethers.providers.AnkrProvider(network = "goerli", API_KEY)
const signer = new ethers.Wallet(PRIVATE_KEY, ankrProvider);
const dulceNFTContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

const main = async () => {
  let response = await dulceNFTContract.flipSaleIsActive()
  console.log(response)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
