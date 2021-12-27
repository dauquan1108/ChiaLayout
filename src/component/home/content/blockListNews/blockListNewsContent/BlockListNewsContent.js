import React from "react";
import PropTypes from "prop-types";

// component
import Avatart from "../../../../base/avatar/Avatar";

//style
import "./styles/BlockListNewsContent.css";

import like from "../../../../images/like.png";
import message from "../../../../images/message.png";
import share from "../../../../images/share.png";
import Icons from "../../../../base/icons/Icons";


function BlockListNewsContent({ item }) {
    return (
        <div className="blockListNewsContent">
            <div className="blockListNewsContentTop">
                <div className="blockListNewsContentTopLeft">
                    <img src={item.image} alt="image view" />
                </div>
                <div className="blockListNewsContentTopRight">
                    <a href={'#'} title={item.titles}>{item.titles}</a>
                    <div className="individual">
                        <Avatart type='avatar' />
                        <a href={'#'} title={item.name} >{item.name}</a>
                        <p>{item.time}</p>
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
