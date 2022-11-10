async function main() {
  const CoolContract = await ethers.getContractFactory("CoolContract");

  // Start deployment, returning a promise that resolves to a contract object
  const cool_contract = await CoolContract.deploy("Hello World!");
  cool_contract.
  console.log("Contract deployed to address:", cool_contract.address);}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
