import React from "react";

import "./bootstrap.css";
import * as ReactBootStrap from "react-bootstrap";

var accounts;
function Nav(prop) {
  let [log, setLog] = React.useState(false);
  let [iden, setIden] = React.useState(null);

  window.ethereum.on("accountsChanged", function(accounts) {
    loadWeb3();
  });

  const Web3 = require("web3");

  async function loadWeb3() {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const web3 = window.web3;
        accounts = await web3.eth.getAccounts();
        setIden(accounts[0]);

        console.log(accounts);
        setLog(true);
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        console.log("Working here 2");
        setLog(true);
      } else {
        console.log("Working here 3");
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        setLog(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  loadWeb3();
  return (
    <div className="App">
      <ReactBootStrap.Navbar bg="primary" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#home">
          Real Estate Property Buy / Sell
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
              Properties
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">
              My Offers
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Form inline>
              <ReactBootStrap.FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <ReactBootStrap.Button bg="success" variant="outline-success">
                Search
              </ReactBootStrap.Button>
            </ReactBootStrap.Form>
          </ReactBootStrap.Nav>
          {console.log("before or after")}
          {log ? (
            <ReactBootStrap.Nav>
              <ReactBootStrap.NavDropdown
                title="My Account"
                id="basic-nav-dropdown"
                float={{ Width: 1000 + "px" }}
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  {iden}
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  My Properties
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  My Offers
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
              <ReactBootStrap.Nav.Link href="#link">
                Log Out
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          ) : (
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link onClick={loadWeb3}>
                Log In
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          )}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Nav;
