import React, { useState } from "react";

// Component
import Avatar from "../../avatar/Avatar";
import PhoneBook from "../../phoneBook/PhoneBook";
import News from "../../news/News";

// styles
import "../style/Content.css";
// images
import avatar from "../images/avatar.jpg";
import album from "../images/album.png";
import attachment from "../images/attachment.png";
import smile from "../../images/smile.png";
import a1 from "../../images/a1.jpg";
import a2 from "../../images/a2.jpg";
import a3 from "../images/a3.jpg";
import a4 from "../images/a4.jpg";
import a5 from "../images/a5.jpg";
import a6 from "../images/a6.jpg";
import a7 from "../images/a7.jpg";
import a8 from "../images/a8.jpg";
import a9 from "../images/a9.jpg";
import a11 from "../../images/a11.jpg";
import a12 from "../../images/a12.jpg";
import a13 from "../images/a13.jpg";
import a14 from "../images/a14.jpg";
import a15 from "../images/a15.jpg";
import a16 from "../images/a16.jpg";
import a17 from "../images/a17.jpg";
import a18 from "../images/a18.jpg";
import a19 from "../images/a19.jpg";
import a20 from "../images/a20.jpg";

function Content(props) {
  const [listPhoneBook, setListPhoneBook] = useState([
    { id: 1, image: a1, names: "Facebook" },
    { id: 2, image: a2, names: "Facebook" },
    { id: 3, image: a3, names: "Facebook" },
    { id: 4, image: a4, names: "Facebook" },
    { id: 5, image: a5, names: "Facebook" },
    { id: 6, image: a6, names: "Facebook" },
    { id: 7, image: a7, names: "Facebook" },
    { id: 8, image: a8, names: "Facebook" },
    { id: 9, image: a9, names: "Facebook" },
    { id: 10, image: a11, names: "Facebook" },
    { id: 11, image: a11, names: "Facebook" },
    { id: 12, image: a12, names: "Facebook" },
    { id: 13, image: a13, names: "Facebook" },
    { id: 14, image: a14, names: "Facebook" },
    { id: 15, image: a15, names: "Facebook" },
    { id: 16, image: a16, names: "Facebook" },
    { id: 17, image: a17, names: "Facebook" },
    { id: 18, image: a18, names: "Facebook" },
    { id: 19, image: a19, names: "Facebook" },
    { id: 20, image: a20, names: "Facebook" },
  ]);
  return (
    <div className="contents">
      <div className="contents_body">
        <div className="contentLefts">
          <div className="post">
            <div className="postLefts">
              <Avatar src={avatar} />
              <h4 className="inputPost">Bạn đang nghĩ gì...?</h4>
            </div>
            <div className="postRights">
              <img className="imagesPost" src={album} alt="album" />
              <img className="imagesPost" src={attachment} alt="attachment" />
              <img className="imagesPost" src={smile} alt="smile" />
            </div>
          </div>
          <div className="phoneBook">
            {listPhoneBook.map((item) => {
              return (
                <PhoneBook key={item.id} image={item.image} titles={item} />
              );
            })}
          </div>
          <div className="news">
            <News />
          </div>
        </div>
        <div className="contentRights"></div>
      </div>
    </div>
  );
}

Content.propTypes = {};

Content.defaultPros = {};

export default Content;
