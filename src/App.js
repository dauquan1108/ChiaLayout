import React from "react";
import { Routes, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";

// Component
import ViewApp from "../src/component/page/appWeather/ViewApp";
import Home from "./component/home/Home";
import BackTops from './component/backTop/BackTops';
import TabBar from "./component/base/tabBar/TabBar";
import PageError from "./component/page/pageError/PageError";
import Header from "./component/home/header/Header";
import Footer from "./component/home/footer/Footer";
import THEME from "./component/base/theme/Theme";

// style
import "./index.css";

function App() {
	const [status, setStatus] = React.useState(false);
	return (
		<div className="appHome">
			<ThemeProvider theme={status ? THEME.DARK : THEME.LIGHT}>
				<Header />
				<button onClick={() => setStatus(!status)}>Chuyển theme</button>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="app-weather" element={<ViewApp />} />
					<Route path="*" element={<PageError />} />
				</Routes>
				<TabBar />
				<BackTops/>
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
