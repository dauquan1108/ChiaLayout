import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";

// Component
import Icons from "../icons/Icons";
import Links from "../links/Links";

// style
import "./styles/TabBar.css";

function TabBar() {
	const [offset, setOffset] = useState(0);
	const [status, setStatus] = useState('home');
	const [showsTabBar, setShowTabBar] = useState(false)
	const previousValue = useRef(offset);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset)
		}
	}, []);
	useEffect(() => {
		previousValue.current = offset;
	}, [offset]);

	useLayoutEffect(() => {
		if (offset.toFixed() < previousValue.current.toFixed()) {
			setShowTabBar(true);
		} else {
			setShowTabBar(false);
		}
	}, [offset]);

	const setStatusTabBar = (keyWord) => {
		setStatus(keyWord);
	};

	return (
		<div className={classNames("tabBar", showsTabBar ? "activeTab" : "closeTab")} style={{height:`${window.innerHeight}`}}>
			<Links to="/" className="TabBar" onClick={() => setStatusTabBar("home")}>
				<Icons type={status === "home" ? "homeActive": "home"} widths="25px" />
			</Links>
			<Links to="/app-weather" className="TabBar" onClick={() => setStatusTabBar("media")}>
				<Icons type={status === "media" ? "mediaActive": "media"} widths="30px" />
			</Links>
			<Links to="/about" className="TabBar" onClick={() => setStatusTabBar("option")}>
				<Icons type={ status === "option" ? "optionActive" : "option" } widths="20px" />
			</Links>
		</div>
	);
}

TabBar.propTypes = {};

TabBar.defaultPros = {};

export default TabBar;
