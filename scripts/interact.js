const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/CoolContract.sol/CoolContract.json");

console.log(JSON.stringify(contract.abi));

const ankrProvider = new ethers.providers.AnkrProvider(network="goerli", API_KEY)
const signer = new ethers.Wallet(PRIVATE_KEY, ankrProvider);
const coolContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

console.log(await coolContract.message())
