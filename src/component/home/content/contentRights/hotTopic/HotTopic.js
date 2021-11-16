import React, { useState } from "react";

// styles
import "./styles/HotTopic.css";

// images
import Layer from "../../../../images/Layer.png";

function HotTopic(props) {
  return (
    <div className="HotTopic">
      <div className="HotTopicTitle">
        <p>CHỦ ĐỀ NÓNG</p>
        {/* <div className="brick" /> */}
      </div>
    </div>
  );
}

HotTopic.propTypes = {};

HotTopic.defaultPros = {};

export default HotTopic;
