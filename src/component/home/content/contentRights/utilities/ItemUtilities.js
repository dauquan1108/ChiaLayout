import React, { useState } from "react";
import PropTypes from "prop-types";

// styles
import "./styles/Utilities.css";

function ItemUtilities(props) {
  const { item } = props;

  return (
    <div className="ItemUtilities">
      <img src={item.image} alt="image Service" />
      <span>{item.names}</span>
    </div>
  );
}

ItemUtilities.propTypes = {
  item: PropTypes.string,
};

ItemUtilities.defaultPros = {};

export default ItemUtilities;
