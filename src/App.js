import React from "react";
import { Routes, Route } from "react-router-dom";
// Component
import ViewApp from "../src/component/page/appWeather/ViewApp";
import Home from "./component/home/Home";
import BackTops from './component/backTop/BackTops';
import TabBar from "./component/tabBar/TabBar";
import PageError from "./component/page/pageError/PageError";
import Header from "./component/home/header/Header";
import Footer from "./component/home/footer/Footer";

// style
import "./index.css";

function App() {
	return (
		<div className="appHome">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="app-weather" element={<ViewApp />} />
				<Route path="*" element={<PageError />} />
			</Routes>
			<TabBar />
			<BackTops/>
			<Footer />
		</div>
	);
}

export default App;
