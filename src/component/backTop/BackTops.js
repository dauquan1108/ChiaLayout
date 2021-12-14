import React from "react";
// Antd
import { BackTop } from "antd";
import 'antd/dist/antd.css';
import { UpCircleOutlined } from '@ant-design/icons';

//style
import "./styles/BackTop.css";

function BackTops() {
	return (
		<BackTop>
			<div className='blackTops'><UpCircleOutlined /></div>
		</BackTop>
	);
}

export default BackTops;
