import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div>
    <Nav value={true} name="0x6556e03faE63AB57f1f9b11b448755798AeDAd06" />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
