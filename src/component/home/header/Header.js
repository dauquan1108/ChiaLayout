import React from "react";

// Component
import Avatars from "../../avatar/Avatar";
import Icons from "../../icons/Icons";

// style
import "./styles/Header.css";

// image
import avatar from "../../images/avatar.jpg";

function Header(props) {
  return (
    <div className="header">
      <div className="contentHeader">
        <div className="contentLeft">
          <div className="logo">
            <Icons type="logoHome" />
          </div>
          <div className="search">
            <Icons type="iconGoogle" widths="50px" heights="20px" />
          </div>
        </div>
        <div className="contentRight">
          <div className="user">
            <Avatars src={avatar} />
            <div className="account">
              <span>Đậu Xuân Quân</span>
            </div>
          </div>
          <div className="options">
            <Icons type="notifications" widths="18px" heights="18px" />
            <Icons type="chat" widths="18px" heights="18px" />
            <Icons type='gear' widths="18px" heights="18px" />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

Header.defaultPros = {};

export default Header;
