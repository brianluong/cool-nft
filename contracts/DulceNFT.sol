pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// Functionality
// 0. Initialize NFT contract
// 1. Populate NFT state (metadata and IPFS hash)
// 2. Mint NFTs
// 3. Transfer NFTs

contract DulceNFT is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  bool public saleIsActive = false;

  constructor() ERC721("DulceNFT", "DULCE") {}

  function flipSaleIsActive() public onlyOwner {
    saleIsActive = true;
  }

  function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
    require(saleIsActive, "Sale must be active to mint Ape");

    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);

    return newItemId;
  }

  

  // function transferNFT() public {

  // }
}
