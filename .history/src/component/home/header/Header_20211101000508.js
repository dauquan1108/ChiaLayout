import React, { useState } from "react";

// Component
import Avatart from "../../avatar/Avatar";

// style
import "./style/Header.css";
// image
// import search from "../images/searching.png";
import Notifications from "../../images/notifications.png";
import Chat from "../../images/chat.png";
import gear from "../../images/gear.png";
import avatar from "../../images/avatar.jpg";

function Header(props) {
  return (
    <div className="header">
      <div className="contentHeader">
        <div className="contentLeft">
          <div className="logo">
            <span>HOME</span>
          </div>
          <div className="search">
            <span>Google</span>
            {/* <img className="imgSearch" src={search} alt="search" /> */}
          </div>
        </div>
        <div className="contentRight">
          <div className="user">
            <Avatart src={avatar} />
            <div className="account">
              <span>Đậu Xuân Quân</span>
            </div>
          </div>
          <div className="options">
            <img
              className="imgSearch"
              src={Notifications}
              alt="notifications"
            />
            <img className="imgSearch" src={Chat} alt="chat" />
            <img className="imgSearch" src={gear} alt="gear" />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultPros = {};

export default Header;
