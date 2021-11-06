import React, { useState } from "react";

// Component
import BlockListNewsContent from "./blockListNewsContent/BlockListNewsContent";

//style
import "./styles/BlockListNews.css";

// image
import a1 from "../images/t1.jpg";
import a2 from "../images/t2.jpg";
import a3 from "../images/t3.png";
import a5 from "../images/t5.png";
import a6 from "../images/t6.png";
import Avatar from "../images/avatar.jpg";

function BlockListNews(props) {
  const [ListNews, setListNews] = useState([
    {
      id: 1,
      image: a1,
      titles:
        "Xe điện Microlino 2.0: hệ dẫn động mới, nội thất hiện đại hơn, giá hơn 300 triệu",
      avatar: Avatar,
      name: "Đậu Xuân Quân",
      time: "9:39",
    },
    {
      id: 2,
      image: a2,
      titles: "Apple phát hành iOS 13.4 beta 5",
      avatar: Avatar,
      name: "Đậu Xuân Quân",
      time: "10:30",
    },
    {
      id: 3,
      image: a3,
      titles: "Một số tỉnh miền Tây cho người về quê cách ly tại nhà",
      avatar: Avatar,
      name: "Đậu Xuân Quân",
      time: "10:00",
    },
    {
      id: 4,
      image: a5,
      titles:
        "Hướng dẫn xét nghiệm, cách ly khi người dân đi lại giữa các tỉnh",
      avatar: Avatar,
      name: "Đậu Xuân Quân",
      time: "11:30",
    },
    {
      id: 5,
      image: a6,
      titles: "Một số tỉnh miền Tây cho người về quê cách ly tại nhà",
      avatar: Avatar,
      name: "Đậu Xuân Quân",
      time: "10:30",
    },
  ]);

  return (
    <div className="blockListNews">
      {ListNews.map((item) => {
        return <BlockListNewsContent key={item.id} item={item} />;
      })}
    </div>
  );
}

BlockListNews.propTypes = {};

BlockListNews.defaultPros = {};

export default BlockListNews;
