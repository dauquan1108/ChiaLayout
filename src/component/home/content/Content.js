import React, { useState } from "react";

// Component
import Avatart from "../../avatar/Avatar";
import PhoneBook from "./phoneBook/PhoneBook";
import News from "./news/News";
import BlockShopPing from "./blockShopPing/BlockShopPing";
import BlockListNews from "./blockListNews/BlockListNews";

// component right
import Weather from "./contentRights/weather/Weather";
import Advertisement from "./contentRights/advertisement/Advertisement";
import Utilities from "./contentRights/utilities/Utilities";
import AdvertisementBig from "./contentRights/advertisement/AdvertisementBig";
import HotTopic from "./contentRights/hotTopic/HotTopic";

// styles
import "./styles/Content.css";
// images
import avatar from "../../images/avatar.jpg";
import album from "../../images/album.png";
import attachment from "../../images/attachment.png";
import smile from "../../images/smile.png";
import a1 from "../../images/a1.jpg";
import a2 from "../../images/a2.jpg";
import a3 from "../../images/a3.jpg";
import a4 from "../../images/a4.jpg";
import a5 from "../../images/a5.jpg";
import a6 from "../../images/a6.jpg";
import a7 from "../../images/a7.jpg";
import a8 from "../../images/a8.jpg";
import a9 from "../../images/a9.jpg";
import a11 from "../../images/a11.jpg";
import a12 from "../../images/a12.jpg";
import a13 from "../../images/a13.jpg";
import a14 from "../../images/a14.jpg";
import a15 from "../../images/a15.jpg";
import a16 from "../../images/a16.jpg";
import a17 from "../../images/a17.jpg";
import a18 from "../../images/a18.jpg";
import a19 from "../../images/a19.jpg";
import a20 from "../../images/a20.jpg";

function Content(props) {
    const [listPhoneBook, setListPhoneBook] = useState([
        { id: 1, image: a1, names: "Kho phim" },
        { id: 2, image: a2, names: "Facebook" },
        { id: 3, image: a3, names: "Kho nhạc" },
        { id: 4, image: a4, names: "Google" },
        { id: 5, image: a5, names: "Youtube" },
        { id: 6, image: a6, names: "VnExpress" },
        { id: 7, image: a7, names: "24h.com" },
        { id: 8, image: a8, names: "Kho nhạc" },
        { id: 9, image: a9, names: "Facebook" },
        { id: 10, image: a11, names: "Kho nhạc" },
        { id: 11, image: a11, names: "Kho phim" },
        { id: 12, image: a12, names: "Facebook" },
        { id: 13, image: a13, names: "Kho nhạc" },
        { id: 14, image: a14, names: "Facebook" },
        { id: 15, image: a15, names: "Kho phim" },
        { id: 16, image: a16, names: "Facebook" },
        { id: 17, image: a17, names: "Google" },
        { id: 18, image: a18, names: "VnExpress" },
        { id: 19, image: a19, names: "Kho nhạc" },
        { id: 20, image: a20, names: "Facebook" },
    ]);
    return (
        <div className="contents">
            <div className="contents_body">
                <div className="contentLefts">
                    <div className="post">
                        <div className="postLefts">
                            <Avatart src={avatar} />
                            <p>Bạn đang nghĩ gì...?</p>
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
                    <div className="blockShopPing">
                        <BlockShopPing />
                    </div>
                    <div className="blockListNews">
                        <BlockListNews />
                    </div>
                </div>
                <div className="contentRights">
                    <div className="weather">
                        <Weather />
                    </div>
                    <div className="advertisement">
                        <Advertisement />
                    </div>
                    <Utilities />
                    <div className="advertisement">
                        <AdvertisementBig />
                    </div>
                    <HotTopic />
                </div>
            </div>
        </div>
    );
}

Content.propTypes = {};

Content.defaultPros = {};

export default Content;
