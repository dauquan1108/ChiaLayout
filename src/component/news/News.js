import React, { useState } from "react";

//component
import HostNews from "./hostNews/HostNews";

//style
import "./styles/News.css";

// image
import a1 from "../images/t1.jpg";
import a2 from "../images/t2.jpg";
import a3 from "../images/t3.png";
import a4 from "../images/t4.JPG";
import a5 from "../images/t5.png";
import a6 from "../images/t6.png";
import a7 from "../images/t7.png";
import a8 from "../images/t8.png";
import a9 from "../images/t9.jpg";
import a10 from "../images/t10.jpg";
import a11 from "../images/t11.jpg";

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
    {
      id: 7,
      image: a7,
      titles:
        "Xe điện Microlino 2.0: hệ dẫn động mới, nội thất hiện đại hơn, giá hơn 300 triệu",
    },
    { id: 8, image: a8, titles: "Apple phát hành iOS 13.4 beta 5" },
    {
      id: 9,
      image: a9,
      titles:
        "Xe điện Microlino 2.0: hệ dẫn động mới, nội thất hiện đại hơn, giá hơn 300 triệu",
    },
    {
      id: 10,
      image: a10,
      titles:
        "ĐÁNH GIÁ E-SCOOTER TURBOANT X7: GIẢI PHÁP SÁNG GIÁ THAY THẾ XE đạp",
    },
    {
      id: 11,
      image: a11,
      titles: "FIREFOX TRÒN 15 TUỔI: TRỖI DẬY, GỤC NGÃ VÀ CUỘC PHỤC HƯNG VỀ",
    },
  ]);
  const showsListNew = (item, index) => {
    if (
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 4 ||
      index === 5
    ) {
      <HostNews index={index} item={item} />;
    }
  };
  return (
    <div className="news">
      {listNews.map((item, index) => {
        return showsListNew(item, index);
      })}
    </div>
  );
}

News.propTypes = {};

News.defaultPros = {};

export default News;
