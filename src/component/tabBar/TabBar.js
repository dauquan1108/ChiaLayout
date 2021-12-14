import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import classNames from 'classnames';
import { CommentOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

// style
import "./styles/TabBar.css";

function TabBar(props) {
	const [offset, setOffset] = useState(0);
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
	return (
		<div className={classNames("tabBar", showsTabBar ? "activeTab" : "closeTab")} style={{height:`${window.innerHeight}`}}>
			<Link to="/">
				<CommentOutlined className='iconTabBar'/>
			</Link>
			<Link to="/about">
				<YoutubeOutlined className='iconTabBar'/>
			</Link>
			<Link to="/about">
				<WhatsAppOutlined className='iconTabBar'/>
			</Link>
		</div>
	);
}

TabBar.propTypes = {};

TabBar.defaultPros = {};

export default TabBar;
