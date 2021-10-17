import React, { useState } from "react";
//component

//style
import "./styles/HostNews.css";

function HostNews({ item, index }) {
  console.log(item, index);
  return (
    <div className="hostNews">
      <p>newss</p>
    </div>
  );
}

HostNews.propTypes = {};

HostNews.defaultPros = {};

export default HostNews;
