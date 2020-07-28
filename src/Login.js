import React from "react";
import "./bootstrap.css";
import * as ReactBootStrap from "react-bootstrap";
import "./Login.css";
function Login() {
  return (
    <div className="center">
      <ReactBootStrap.Form>
        <h1>Login Form</h1>
        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="formHorizontalEmail"
          className="textlabels"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            Address
          </ReactBootStrap.Form.Label>

          <ReactBootStrap.Col sm={8}>
            <ReactBootStrap.Form.Control
              type="text"
              placeholder="Account Address"
            />
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="formHorizontalPassword"
          className="textlabels"
        >
          <ReactBootStrap.Form.Label column sm={2}>
            Password
          </ReactBootStrap.Form.Label>
          <ReactBootStrap.Col sm={8}>
            <ReactBootStrap.Form.Control
              type="password"
              placeholder="Password"
            />
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group
          as={ReactBootStrap.Row}
          controlId="formHorizontalCheck"
        >
          <ReactBootStrap.Col sm={{ span: 10, offset: 1 }}>
            <ReactBootStrap.Form.Check label="Remember me" />
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>

        <ReactBootStrap.Form.Group as={ReactBootStrap.Row}>
          <ReactBootStrap.Col sm={{ span: 10, offset: 3 }}>
            <button type="submit" className="custom-btn">
              Log in
            </button>
          </ReactBootStrap.Col>
        </ReactBootStrap.Form.Group>
      </ReactBootStrap.Form>
    </div>
  );
}

export default Login;
