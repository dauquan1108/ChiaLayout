import React, { useState } from "react";

//component
import HostNews from "./hostNews/HostNews";
import Avatar from "../avatar/Avatar";

//style
import "./styles/News.css";

// image
import a1 from "../images/t1.jpg";
import a2 from "../images/t2.jpg";
import a3 from "../images/t3.png";
import a4 from "../images/t4.JPG";
import a5 from "../images/t5.png";
import a6 from "../images/t6.png";
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
      titles: "Trung ương thảo luận về phòng, chống Covid-19",
    },
    {
      id: 5,
      image: a5,
      titles: "Một số tỉnh miền Tây cho người về quê cách ly tại",
    },
    {
      id: 6,
      image: a6,
      titles: "Trung ương thảo luận về phòng, chống Covid-19",
    },
    // {
    //   id: 7,
    //   image: a7,
    //   titles:
    //     "Xe điện Microlino 2.0: hệ dẫn động mới, nội thất hiện đại hơn, giá hơn 300 triệu",
    // },
    // { id: 8, image: a8, titles: "Apple phát hành iOS 13.4 beta 5" },
    // {
    //   id: 9,
    //   image: a9,
    //   titles:
    //     "Xe điện Microlino 2.0: hệ dẫn động mới, nội thất hiện đại hơn, giá hơn 300 triệu",
    // },
    // {
    //   id: 10,
    //   image: a10,
    //   titles:
    //     "ĐÁNH GIÁ E-SCOOTER TURBOANT X7: GIẢI PHÁP SÁNG GIÁ THAY THẾ XE đạp",
    // },
    // {
    //   id: 11,
    //   image: a11,
    //   titles: "FIREFOX TRÒN 15 TUỔI: TRỖI DẬY, GỤC NGÃ VÀ CUỘC PHỤC HƯNG VỀ",
    // },
  ]);
  const [status, setStatus] = useState("noiBat");

  const listHostNew = listNews.map((item, index) => {
    console.log("index", index);
    const img = item.image;
    return (
      <React.Fragment>
        {index === 0 && (
          <div className="newsContentLeft">
            <img className="imageHost" src={img} alt="anh" />
          </div>
        )}
        {index !== 0 && (
          <div className="newsContentRight">
            <div className="itemRight">
              <div className="itemRightImg">
                <img src={img} alt="hostNews" />
              </div>
              <div className="ItemRightTitle">
                <span>Những ứng viên sáng giá cho Nobel Y</span>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className="news">
      <React.Fragment>
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
          <div className="newsContent">{listHostNew}</div>
        </div>
      </React.Fragment>
    </div>
  );
}

News.propTypes = {};

News.defaultPros = {};

export default News;
