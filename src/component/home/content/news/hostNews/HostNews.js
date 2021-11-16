import React, { useState } from "react";
//component

//style
import "./styles/HostNews.css";

function HostNews(props) {
  const { item, index } = props;
  return (
    <div className="hostNews">
      <div>
        <img src={item.image} alt="anh" />
      </div>
    </div>
  );
}

HostNews.propTypes = {};

HostNews.defaultPros = {};

export default HostNews;
