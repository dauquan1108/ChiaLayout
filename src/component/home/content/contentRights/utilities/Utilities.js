import React, { useState } from "react";
// import PropTypes from "prop-types";

// Component
import ItemUtilities from "./ItemUtilities";

// styles
import "./styles/Utilities.css";

// images
import a1 from "../../../../images/Layer 3.png";
import a2 from "../../../../images/Layer 4.png";
import a3 from "../../../../images/Layer 5.png";
import a4 from "../../../../images/Layer 6.png";
import a5 from "../../../../images/Layer 7.png";
import a6 from "../../../../images/Layer 8.png";
import a7 from "../../../../images/Layer 9.png";
import a8 from "../../../../images/Layer 10.png";
import a9 from "../../../../images/Layer 11.png";
import a10 from "../../../../images/Layer 12.png";
import a11 from "../../../../images/Layer 14.png";
import a12 from "../../../../images/Layer 15.png";

function Utilities(props) {
  const [listService, setListService] = useState([
    { id: 1, image: a1, names: "Thời tiết" },
    { id: 2, image: a2, names: "Tỉ giá ngoại tệ" },
    { id: 3, image: a3, names: "Giá vàng" },
    { id: 4, image: a4, names: "Kết quả xổ số" },
    { id: 5, image: a5, names: "Chứng khoán" },
    { id: 6, image: a6, names: "Lịch truyền hình" },
    { id: 7, image: a7, names: "Lịch chiếu phim" },
    { id: 8, image: a8, names: "Cung hoàng đạo" },
    { id: 9, image: a9, names: "Xăng dầu" },
    { id: 10, image: a11, names: "Giá xe ô tô" },
    { id: 11, image: a11, names: "Lịch vạn niên" },
    { id: 12, image: a12, names: "Kết quả bóng đá" },
  ]);
  return (
    <div className="utilities">
      <p>Tiện ích</p>
      <div className="ItemService">
        {listService.map((item) => {
          return <ItemUtilities key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

Utilities.propTypes = {};

Utilities.defaultPros = {};

export default Utilities;
