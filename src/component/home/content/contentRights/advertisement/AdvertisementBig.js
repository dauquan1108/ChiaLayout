import React, { useState } from "react";

// styles
import "./styles/Advertisement.css";

// images
import Layer from "../../../../images/vzxvzxvv.png";

function AdvertisementBig(props) {
  return (
    <React.Fragment>
      <div className="advertisementNew">
        <img src={Layer} alt="Advertisement" />
      </div>
    </React.Fragment>
  );
}

AdvertisementBig.propTypes = {};

AdvertisementBig.defaultPros = {};

export default AdvertisementBig;
