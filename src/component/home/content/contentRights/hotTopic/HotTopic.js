import React, { useState } from "react";

// styles
import "./styles/HotTopic.css";

function HotTopic(props) {
  return (
    <div className="HotTopic">
      <div className="HotTopicTitle">
	      <span className="title">Chủ đề nóng</span>
         <div className="brick" />
      </div>
    </div>
  );
}

HotTopic.propTypes = {};

HotTopic.defaultPros = {};

export default HotTopic;
