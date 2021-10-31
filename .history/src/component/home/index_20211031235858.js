import React, { useState } from "react";
//component
import Header from "./Header";
import Content from "./content/Content";
import Footer from "./Footer";
//style
import "../style/Home.css";

function Index(props) {
  return (
    <div className="home">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

Index.propTypes = {};

Index.defaultPros = {};

export default Index;
