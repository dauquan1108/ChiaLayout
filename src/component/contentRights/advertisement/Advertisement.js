import React, { useState } from "react";

// styles
import "./styles/Advertisement.css";

// images
import Layer from "../../images/Layer.png";

function Advertisement(props) {
  return (
    <React.Fragment>
      <div className="advertisementNew">
        <img src={Layer} alt="Advertisement" />
      </div>
      <div className="advertisementNew">
        <img src={Layer} alt="Advertisement" />
      </div>
    </React.Fragment>
  );
}

Advertisement.propTypes = {};

Advertisement.defaultPros = {};

export default Advertisement;
