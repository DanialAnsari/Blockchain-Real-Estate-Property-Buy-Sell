import React from "react";
import "./Property.css";

import * as ReactBootStrap from "react-bootstrap";

function AddProperty(prop) {
  var accounts;

  let [account, setAccount] = React.useState("123");
  const Web3 = require("web3");

  window.ethereum.on("accountsChanged", function(accounts) {
    getAccounts();
  });

  async function getAccounts() {
    window.web3 = new Web3(window.ethereum);
    const web3 = window.web3;
    accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  }

  let [city, setCity] = React.useState("Karachi");
  let [titles, setTitle] = React.useState(null);
  let areas = 0;
  let [discription, setDesc] = React.useState(null);
  var area;
  var title;
  var description;
  var cities = 0;
  let [price, setPrice] = React.useState(0);

  function handlePrice(event) {
    setPrice(event.target.value);
  }
  function handleTitle(event) {
    title = event.target.value;
    setTitle(title);
    console.log(title);
  }
  function handleDescription(event) {
    description = event.target.value;
    setDesc(description);
  }

  function handleArea(event) {
    area = event.target.value;
    if (area == "DHA") {
      areas = 0;
    } else if (area == "Clifton") {
      areas = 1;
    } else if (area == "Gulshan") {
      areas = 2;
    } else if (area == "PECHS") {
      areas = 3;
    } else if (area == "North Nazimabad") {
      areas = 4;
    } else if (area == "Azizabad") {
      areas = 5;
    } else if (area == "Faisal Bagh") {
      areas = 6;
    } else if (area == "Qaiser") {
      areas = 7;
    } else if (area == "Dhair") {
      areas = 8;
    } else if (area == "Palmandi") {
      areas = 9;
    } else if (area == "Zone I") {
      areas = 10;
    } else if (area == "Zone II") {
      areas = 11;
    } else if (area == "Zone III") {
      areas = 12;
    } else if (area == "Zone IV") {
      areas = 13;
    } else if (area == "Zone V") {
      areas = 14;
    } else if (area == "Pishīn") {
      areas = 15;
    } else if (area == "Zhob") {
      areas = 16;
    } else if (area == "Loralai") {
      areas = 17;
    } else if (area == "Sibi") {
      areas = 18;
    } else if (area == "Chagai") {
      areas = 19;
    } else if (area == "Charsadda") {
      areas = 20;
    } else if (area == "Mardan") {
      areas = 21;
    } else if (area == "Swabi") {
      areas = 22;
    } else if (area == "Nowshera") {
      areas = 23;
    }
  }
  function SetCity(city_id) {
    cities = city_id;
  }
  function handleCity(event) {
    var city2 = event.target.value;

    setCity(city2);
  }

  ///Inserting Data
  function insertData() {
    var private_key = prompt("Enter Private Key");
    if (city == "Karachi") {
      SetCity(0);
    } else if (city == "Lahore") {
      SetCity(1);
      console.log(cities);
    } else if (city == "Islamabad") {
      SetCity(2);
    } else if (city == "Peshawar") {
      SetCity(3);
    } else if (city == "Quetta") {
      SetCity(4);
    }

    var Tx = require("ethereumjs-tx").Transaction;

    const Web3 = require("web3");
    const web3 = new Web3(
      "https://ropsten.infura.io/v3/c89f216154d84b83bb9344a7d0a91108"
    );

    const account1 = account;

    let abi = [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "buyID",
            type: "uint256"
          }
        ],
        name: "acceptOffer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_buyer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "_offerValue",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "buyID",
            type: "uint256"
          }
        ],
        name: "addBuyingRequest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address"
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address"
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool"
          }
        ],
        name: "ApprovalForAll",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "buyID",
            type: "uint256"
          }
        ],
        name: "buyProperty",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "title",
            type: "string"
          },
          {
            internalType: "enum ERC721.City",
            name: "_city",
            type: "uint8"
          },
          {
            internalType: "enum ERC721.Area",
            name: "_area",
            type: "uint8"
          },
          {
            internalType: "string",
            name: "_discription",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "askingValue",
            type: "uint256"
          }
        ],
        name: "registerProperty",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "buyID",
            type: "uint256"
          }
        ],
        name: "rejectOffer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes"
          }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "operator",
            type: "address"
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool"
          }
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "setForSale",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "_askingValue",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "_forSale",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          }
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "baseURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "address",
            name: "operator",
            type: "address"
          }
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "propertyList",
        outputs: [
          {
            internalType: "string",
            name: "Title",
            type: "string"
          },
          {
            internalType: "enum ERC721.Area",
            name: "area",
            type: "uint8"
          },
          {
            internalType: "enum ERC721.City",
            name: "city",
            type: "uint8"
          },
          {
            internalType: "string",
            name: "description",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "requestList",
        outputs: [
          {
            internalType: "address",
            name: "buyer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "offerValue",
            type: "uint256"
          },
          {
            internalType: "enum ERC721.Status",
            name: "_status",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "_tokenID",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4"
          }
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256"
          }
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256"
          }
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ];

    const account2 = "0xaf6627f1ad21f02d88cdd5003da240c40591f073";
    const Private_Key_1 = Buffer.from(private_key, "hex");

    const contract = new web3.eth.Contract(abi, account2);

    let data = contract.methods
      .registerProperty(titles, cities, areas, discription, price)
      .encodeABI();

    web3.eth.getTransactionCount(account1, (err, _count) => {
      //build the transaction
      const txObject = {
        nonce: web3.utils.toHex(_count),
        to: account2,
        data: data,
        gasLimit: web3.utils.toHex(800000),
        gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
      };

      //console.log(txObject);

      //sign the transaction
      const tx = new Tx(txObject, { chain: "ropsten" });
      tx.sign(Private_Key_1);

      const serialTransaction = tx.serialize();
      const raw = "0x" + serialTransaction.toString("hex");

      //brodcast the transaction
      web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("txHash:", txHash);
        }
      });
    });
  }

  var Area = (
    <ReactBootStrap.Form.Control onChange={handleArea.bind(this)} as="select">
      <option>DHA</option>
      <option>Clifton</option>
      <option>Gulshan</option>
      <option>PECHS</option>
      <option>North Nazimabad</option>
    </ReactBootStrap.Form.Control>
  );

  if (city == "Karachi") {
    Area = (
      <ReactBootStrap.Form.Control onChange={handleArea.bind(this)} as="select">
        <option>DHA</option>
        <option>Clifton</option>
        <option>Gulshan</option>
        <option>PECHS</option>
        <option>North Nazimabad</option>
      </ReactBootStrap.Form.Control>
    );
  } else if (city == "Lahore") {
    Area = (
      <ReactBootStrap.Form.Control onChange={handleArea.bind(this)} as="select">
        <option>Azizabad</option>
        <option>Faisal Bagh</option>
        <option>Qaiser</option>
        <option>Dhair</option>
        <option>Palmandi</option>
      </ReactBootStrap.Form.Control>
    );
  } else if (city == "Islamabad") {
    Area = (
      <ReactBootStrap.Form.Control onChange={handleArea.bind(this)} as="select">
        <option>Zone I</option>
        <option>Zone II</option>
        <option>Zone III</option>
        <option>Zone IV</option>
        <option>Zone V</option>
      </ReactBootStrap.Form.Control>
    );
  } else if (city == "Quetta") {
    Area = (
      <ReactBootStrap.Form.Control onChange={handleArea.bind(this)} as="select">
        <option>Pishīn</option>
        <option>Zhob</option>
        <option>Loralai</option>
        <option>Sibi</option>
        <option>Chāgai</option>
      </ReactBootStrap.Form.Control>
    );
  } else if (city == "Peshawar") {
    Area = (
      <ReactBootStrap.Form.Control onChange={handleArea.bind(this)} as="select">
        <option>Charsadda</option>
        <option>Mardan</option>
        <option>Swabi</option>
        <option>Nowshera</option>
      </ReactBootStrap.Form.Control>
    );
  }
  getAccounts();
  return (
    <div className="MainCard">
      <h1>{account}</h1>
      <ReactBootStrap.Form>
        <h1>Add Property</h1>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="formHorizontalEmail"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            <strong>Property Title</strong>
          </ReactBootStrap.Form.Label>

          <ReactBootStrap.Col sm={9}>
            <ReactBootStrap.Form.Control
              type="text"
              placeholder="Property Title"
              onChange={handleTitle.bind(this)}
            />
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="formHorizontalNumber"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            <strong>Asking Value</strong>
          </ReactBootStrap.Form.Label>

          <ReactBootStrap.Col sm={9}>
            <ReactBootStrap.Form.Control
              type="number"
              placeholder="Asking Value in Ether"
              onChange={handlePrice.bind(this)}
            />
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="exampleForm.ControlSelect1"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            <strong>City</strong>
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Col sm={9}>
            <ReactBootStrap.Form.Control
              as="select"
              onChange={handleCity.bind(this)}
            >
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Quetta</option>
              <option>Peshawar</option>
            </ReactBootStrap.Form.Control>
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="exampleForm.ControlSelect1"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            <strong>Area</strong>
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Col sm={9}>{Area}</ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="exampleForm.ControlTextarea1"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            <strong> Property Description</strong>
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Col sm={9}>
            <ReactBootStrap.Form.Control
              as="textarea"
              onChange={handleDescription.bind(this)}
              rows="4"
            />
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>
        <br />
        <br />
        <ReactBootStrap.Col sm={{ span: 10, offset: 1 }}>
          <ReactBootStrap.Button variant="primary" onClick={insertData} block>
            Register Property
          </ReactBootStrap.Button>
        </ReactBootStrap.Col>
        <br />
      </ReactBootStrap.Form>
    </div>
  );
}

export default AddProperty;
