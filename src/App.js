import React from "react";
import { Routes, Route } from "react-router-dom";
// Component
import Home from "./component/home/Home";
import BackTops from './component/backTop/BackTops';

// test
import Content from "./component/home/content/Content";
import TabBar from "./component/tabBar/TabBar";

function App() {
	return (
		<div>
			{/*<Home />*/}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<Content />} />
			</Routes>
			<TabBar />
			<BackTops/>
		</div>
	);
}

export default App;
