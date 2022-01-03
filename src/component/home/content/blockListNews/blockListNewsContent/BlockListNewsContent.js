import React from "react";
import PropTypes from "prop-types";

// component
import Avatart from "../../../../base/avatar/Avatar";
import Links from "../../../../base/links/Links";

//style
import "./styles/BlockListNewsContent.css";

import like from "../../../../images/like.png";
import message from "../../../../images/message.png";
import share from "../../../../images/share.png";
import Icons from "../../../../base/icons/Icons";
import CreatePathUrl from "../../../../base/createPathUrl/CreatePathUrl";


function BlockListNewsContent({ item }) {
    const urls = CreatePathUrl(item && item.titles, item && item.id);
    const urlsName =CreatePathUrl('quan', '11081999', 'page');
    return (
        <div className="blockListNewsContent">
            <div className="blockListNewsContentTop">
                <div className="blockListNewsContentTopLeft">
                    <img src={item && item.image} alt="image view" />
                </div>
                <div className="blockListNewsContentTopRight">
                    <Links to={urls} title={item && item.titles}>
                        <span>{item && item.titles}</span>
                    </Links>
                    <div className="individual">
                        <Links to={urlsName} className="page">
                            <Avatart type='avatar' />
                            <div className="account">
                                <span>Đậu Xuân Quân</span>
                            </div>
                        </Links>
                        <p>{item && item.time}</p>
                    </div>
                </div>
            </div>
            <div className="blockListNewsContentButton">
                <div className="icon">
                    <Icons type='like' />
                    <span>Thích</span>
                </div>
                <div className="icon">
                    <img src={message} alt="icon Message" /> <span>bình luận</span>
                </div>
                <div className="icon">
                    <img src={share} alt="icon Share" /> <span>chia sẻ</span>
                </div>
            </div>
        </div>
    );
}

BlockListNewsContent.propTypes = {
    item: PropTypes.string,
};

BlockListNewsContent.defaultPros = {};

export default BlockListNewsContent;
