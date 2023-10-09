import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Divider = () => {
  return (
    <div className="divider">
      <div className="divider-overlay"></div>
      <div className="container">
        <div className="text-content">
          <h2>Secure your car by reaching out to us. </h2>
          <span>
            {" "}
            <FontAwesomeIcon icon={faPhone} /> (123)-456-789{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Divider;
