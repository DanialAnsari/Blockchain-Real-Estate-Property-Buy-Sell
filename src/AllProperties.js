import React from "react";
import "./Property.css";
import Property from "./Property";
import * as ReactBootStrap from "react-bootstrap";

function AllProperty(prop) {
  return (
    <div className="MainCard">
      <ReactBootStrap.Row>
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
        <Property />
      </ReactBootStrap.Row>
    </div>
  );
}

export default AllProperty;
