import React, { useState } from "react";
import "../style/Content.css";

function Content(props) {
  return (
    <div className="contents">
      <div className="contents_body">
        <div className="contentLefts"></div>
        <div className="contentRights"></div>
      </div>
    </div>
  );
}

Content.propTypes = {};

Content.defaultPros = {};

export default Content;
