import React from "react";
import "./Property.css";
import * as ReactBootStrap from "react-bootstrap";

function Property(prop) {
  return (
    <div className="propcard">
      <h4>House# 210 Plot 21</h4>
      <p>
        <strong>Owner:</strong> Ahmed Hussain
      </p>
      <p>
        <strong>Area:</strong> DHA Phase V,Karachi
      </p>
      <p className="price">
        <strong>Price:</strong> 100 Ether
      </p>

      <ReactBootStrap.Button variant="primary" block>
        View More
      </ReactBootStrap.Button>
    </div>
  );
}

export default Property;
