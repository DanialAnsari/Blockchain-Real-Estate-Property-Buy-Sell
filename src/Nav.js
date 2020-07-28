import React from "react";

import "./bootstrap.css";
import * as ReactBootStrap from "react-bootstrap";

function Nav(prop) {
  let [log, setLog] = React.useState(true);

  function isLoggedin() {
    if (prop.value) {
      setLog(true);
    } else {
      setLog(false);
    }
  }

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

          {prop.value ? (
            <ReactBootStrap.Nav>
              <ReactBootStrap.NavDropdown
                title="My Account"
                id="basic-nav-dropdown"
                float={{ Width: 1000 + "px" }}
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  {prop.name}
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
              <ReactBootStrap.Nav.Link href="#link">
                Log In
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#link">
                Create Account
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          )}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Nav;
