import React, { useState } from "react";

//component
import Avatart from "../../../base/avatar/Avatar";
import CreatePathUrl from "../../../base/createPathUrl/CreatePathUrl";
import Links from "../../../base/links/Links";

//style
import "./styles/News.css";

// image
import a1 from "../../../images/t1.jpg";
import a2 from "../../../images/t2.jpg";
import a3 from "../../../images/t3.png";
import a4 from "../../../images/t4.JPG";
import a5 from "../../../images/t5.png";
import a6 from "../../../images/t6.png";

function News(props) {
    const [listNews, setListNews] = useState([
        {
            id: 1,
            image: a1,
            titles:
                "Đánh giá iPhone 13 và iPhone 13 mini từ các trang công nghệ quốc tế",
        },
        {
            id: 2,
            image: a2,
            titles: "Những ứng viên sáng giá cho Nobel Y sinh 2021",
        },
        {
            id: 3,
            image: a3,
            titles: "Một số tỉnh miền Tây cho người về quê cách ly tại nhà",
        },
        {
            id: 4,
            image: a4,
            titles:
                "Hướng dẫn xét nghiệm, cách ly khi người dân đi lại giữa các tỉnh",
        },
        {
            id: 5,
            image: a5,
            titles:
                "Hướng dẫn xét nghiệm, cách ly khi người dân đi lại giữa các tỉnh",
        },
        {
            id: 6,
            image: a6,
            titles: "Một số tỉnh miền Tây cho người về quê cách ly tại",
        },
    ]);
    const [status, setStatus] = useState("noiBat");
    const listHostNewLeft = listNews.slice(0, 1).map((item) => {
        const img = item.image;
        const urls = CreatePathUrl(item.titles, item.id);
        const urlsName =CreatePathUrl('quan', '11081999', 'page');

        return (
            <React.Fragment>
                <img className="imageHost" src={img} alt="anh" />
                    <Links to={urlsName} className="personalInformation" >
                        <Avatart type='avatar' />
                        <div className="account">
                            <p>Đậu Xuân Quân</p>
                        </div>
                        <span>16 phút trước</span>
                    </Links>
                <div className="ItemLeftTitle">
                    <Links to={urls} title={item && item.titles}>
                        <span>{item && item.titles}</span>
                    </Links>
                </div>
            </React.Fragment>
        );
    });

    const listHostNewRight = listNews.slice(1, 6).map((item) => {
        const img = item && item.image;
        const urls = CreatePathUrl(item.titles, item.id);
        return (
            <React.Fragment>
                <div className="itemRight">
                    <div className="itemRightImg">
                        <img src={img} alt="hostNews" />
                    </div>
                    <div className="ItemRightTitle">
                        <Links to={urls} title={item && item.titles}>
                            <span>{item && item.titles}</span>
                        </Links>
                    </div>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="news">
            <div className="hostNews">
                <div className="title">
                    <div className="titleText ">
                        <button
                            type="button"
                            className={`button ${status === "noiBat" && "titleActive"} `}
                            onClick={() => setStatus("noiBat")}
                        >
                            Nổi bật
                        </button>
                    </div>
                    <div className="titleText ">
                        <button
                            type="button"
                            className={`button ${status === "tinTuc" && "titleActive"} `}
                            onClick={() => setStatus("tinTuc")}
                        >
                            Tin tức
                        </button>
                    </div>
                    <div className="titleText">
                        <button
                            type="button"
                            className={`button ${status === "xuHuong" && "titleActive"} `}
                            onClick={() => setStatus("xuHuong")}
                        >
                            Xu hướng
                        </button>
                    </div>
                    <div className="titleText">
                        <button
                            type="button"
                            className={`button ${status === "thoiSu" && "titleActive"} `}
                            onClick={() => setStatus("thoiSu")}
                        >
                            Thời sự
                        </button>
                    </div>
                    <div className="titleText">
                        <button
                            type="button"
                            className={`button ${status === "TheThao" && "titleActive"} `}
                            onClick={() => setStatus("TheThao")}
                        >
                            Thể thao
                        </button>
                    </div>
                    <div className="titleText">
                        <button
                            type="button"
                            className={`button ${status === "PhapLuat" && "titleActive"} `}
                            onClick={() => setStatus("PhapLuat")}
                        >
                            Pháp luật
                        </button>
                    </div>
                    <div className="titleText">
                        <button
                            type="button"
                            className={`button ${status === "dienDan" && "titleActive"} `}
                            onClick={() => setStatus("dienDan")}
                        >
                            Diễn đàn
                        </button>
                    </div>
                </div>
                <div className="newsContent">
                    <div className="newsContentLeft">{listHostNewLeft}</div>
                    <div className="newsContentRight">{listHostNewRight}</div>
                </div>
            </div>
        </div>
    );
}

News.propTypes = {};

News.defaultPros = {};

export default News;
