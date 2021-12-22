import React, { useState } from "react";

//style
import "./styles/BlockShopPing.css";

// image
import lazada from "../../../images/lazada.svg";
import shopee from "../../../images/shopee.svg";
import tiki from "../../../images/tiki.svg";
import shopPing from "../../../images/shopping.png";
function BlockShopPing(props) {
  const [listLogo, setListLogo] = useState([
    {
      id: 1,
      image: lazada,
      titles:
        "Đánh giá iPhone 13 và iPhone 13 mini từ các trang công nghệ quốc tế",
    },
    {
      id: 2,
      image: shopee,
      titles: "Những ứng viên sáng giá cho Nobel Y sinh 2021",
    },
    {
      id: 3,
      image: tiki,
      titles: "Một số tỉnh miền Tây cho người về quê cách ly tại nhà",
    },
  ]);

  const [title, setTitle] = useState([
    {
      id: 1,
      titles:
        "Philip giảm giá mùa dịch siêu ropTypes là một cách tốt để xác thực đầu vào của",
    },
    {
      id: 2,
      titles:
        "Philip giảm giá mùa dịch ropTypes là một cách tốt để xác thực đầu vào của",
    },
    {
      id: 3,
      titles:
        "Philip giảm giá mùa dịch siêu hot ropTypes là một cách tốt để xác thực đầu vào của.",
    },
    {
      id: 4,
      titles:
        "Philip giảm giá mùa dịch siêu hot ropTypes là một cách tốt để xác thực đầu vào của.",
    },
    {
      id: 5,
      titles:
        "Philip giảm giá mùa dịch siêu hot luôn ropTypes là một cách tốt để xác thực đầu vào của.",
    },
    {
      id: 6,
      titles:
        "Philip giảm giá mùa dịch siêu hot luôn ropTypes là một cách tốt để xác thực đầu vào của",
    },
  ]);

  return (
    <React.Fragment>
      <div className="blockShopPingLeft">
        {listLogo.map((item) => {
          return (
            <a key={item.id} href={item.titles}>
              <img src={item.image} alt="icon Home" />
            </a>
          );
        })}
      </div>
      <div className="blockShopPingRight">
        {title.map((item) => {
          return (
            <div className="blockShopPingRightItem">
              <img key={item.id} src={shopPing} alt="icon Home" />
              <a href="#" title={item.titles}>
                {item.titles}
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

BlockShopPing.propTypes = {};

BlockShopPing.defaultPros = {};

export default BlockShopPing;
