import React, { useState } from "react";

// styles
import "./styles/PhoneBook.css";

function phoneBook({ image, titles }) {
  return (
    <div className="phoneBooks">
      <div className="imagesPhoneBook">
        <img className="imagesPhoneBooks" src={image} alt="imagesPhoneBook" />
      </div>
      <span className="titlePhoneBook">{titles.names}</span>
    </div>
  );
}

phoneBook.propTypes = {};

phoneBook.defaultPros = {};

export default phoneBook;
