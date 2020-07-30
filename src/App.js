import React from "react";

function App() {
  const Web3 = require("web3");

  async function loadWeb3() {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();

        console.log(accounts);
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        console.log("Working here 2");
      } else {
        console.log("Working here 3");
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  loadWeb3();
  return <h1>Hello</h1>;
}

export default App;
