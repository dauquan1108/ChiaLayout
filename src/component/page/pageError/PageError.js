import React from "react";
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
// import { Link } from "react-router-dom";

function  PageError() {
	return (
		<Result
			status="500"
			title="Error"
			subTitle="Xin lỗi trang này không có tồn tại."
			// extra={<Button type="primary"><Link to="/">Tải lại trang</Link></Button>}
		/>
	);
}

export default  PageError;