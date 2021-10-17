import React, { useState } from "react";

// style
import "./styles/Avatar.css";

function Avatar({ src }) {
  return (
    <div className="avatar">
      <img className="imgAvatar" src={src} alt="avatar" />
    </div>
  );
}

Avatar.propTypes = {};

Avatar.defaultPros = {};

export default Avatar;
