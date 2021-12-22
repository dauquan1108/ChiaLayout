import React from "react";

//component
import Content from "./content/Content";

//style
import "./styles/Home.css";

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
