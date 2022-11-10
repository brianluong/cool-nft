// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.7.0;

contract CoolContract {

  string public message;

   constructor(string memory initMessage) {
      message = initMessage;
   }

   function update(string memory newMessage) public {
      message = newMessage;
   }
}
