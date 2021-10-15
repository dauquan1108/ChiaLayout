import React, { useState } from "react";

// style
import "../style/Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="contentHeader">
        <div className="contentLeft">
          <div className="logo">
            <span>HOME</span>
          </div>
          <div className="search">
            <span>search</span>
          </div>
        </div>
        <div className="contentRight">
          <div className="user">
            <div className="avatar">
              <span>A</span>
            </div>
            <div className="account">
              <span>account</span>
            </div>
          </div>
          <div className="options">
            <span>OP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultPros = {};

export default Header;
