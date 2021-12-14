import React from "react";

//component
import Header from "./header/Header";
import Content from "./content/Content";
import Footer from "./footer/Footer";
// import TabBar from "../tabBar/TabBar";
//style
import "./style/Home.css";

function Home(props) {
	return (
    <div className="home">
		 <Header />
		 <Content />
		 <Footer />
    </div>
  );
}

Home.propTypes = {};

Home.defaultPros = {};

export default Home;
