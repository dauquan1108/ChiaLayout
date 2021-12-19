import React from "react";

//component
import Content from "./content/Content";

//style
import "./style/Home.css";

function Home(props) {
	return (
    <div className="home">
		 <Content />
    </div>
  );
}

Home.propTypes = {};

Home.defaultPros = {};

export default Home;
