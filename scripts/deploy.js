async function main() {
  const DulceNFT = await ethers.getContractFactory("DulceNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const dulce_nft = await DulceNFT.deploy();
  console.log("Contract deployed to address:", dulce_nft.address);}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
