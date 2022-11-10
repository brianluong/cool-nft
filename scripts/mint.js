const NFT1_METADATA = "ipfs://QmaiRTUXVg5cDd588cJyJNpFvZNJvRFSGYubLFSJs14Cwz"
const NFT2_METADATA = "ipfs://Qmep4GUL7uPQ3Y1Fuh7Y5gLEuCiLyqZPFhU72hBcGt1zyn"
const NFT3_METADATA = "ipfs://QmdJYjyB7PKv7kzWezaBw3pAxHqeZuPLiQTR4bX3KjNhLY"
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const API_KEY = process.env.API_KEY;

const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const PUBLIC_KEY_2 = process.env.PUBLIC_KEY_2
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;


const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/DulceNFT.sol/DulceNFT.json");

const ankrProvider = new ethers.providers.AnkrProvider(network = "goerli", API_KEY)
const signer = new ethers.Wallet(PRIVATE_KEY, ankrProvider);
const signer_2 =   new ethers.Wallet(PRIVATE_KEY_2, ankrProvider);
const dulceNFTContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


const main = async () => {
  async function mintNFT(tokenURI, signer, publicKey) {
    nonce = await ankrProvider.getTransactionCount(publicKey, "latest")

    //the transaction
    // const tx = {
    //   'from': PUBLIC_KEY,
    //   'to': CONTRACT_ADDRESS,
    //   'nonce': nonce,
    //   'gas': 500000,
    //   'data': dulceNFTContract.methods().mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    // };

    let response = await dulceNFTContract.mintNFT(publicKey, tokenURI, {
      gasPrice: 20000000000,
      gasLimit: 6000000,
    });

    console.log(response)


    // const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  }
  
  // await mintNFT("ipfs://" + NFT2_METADATA, signer, PUBLIC_KEY)
  await mintNFT("ipfs://" + NFT3_METADATA, signer_2, PUBLIC_KEY_2)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
