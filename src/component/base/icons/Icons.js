import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

// style
import "./styles/Icons.css";

// image
import blackLogo from "../../images/Home_Black_Logo.svg";
import logoHome from "../../images/Home_logo.svg";
import iconGoogle from "../../images/iconGoogle.png"
import chat from "../../images/chat.png";
import gear from "../../images/gear.png";
import notifications from "../../images/notifications.png";
import home from "../../images/home.svg";
import homeActive from "../../images/home_active.svg";
import media from "../../images/media.svg";
import mediaActive from '../../images/media_active.svg';
import option from "../../images/option.svg";
import optionActive from '../../images/option_active.svg';
import album from '../../images/album.jpg';
import smile from '../../images/smile.jpg';
import like from '../../images/icon-like.svg';
import lazada from "../../images/lazada.svg";
import shopee from "../../images/shopee.svg";
import tiki from "../../images/tiki.svg";
import shopPing from "../../images/shopping.png";


const icons = {
    blackLogo,
    logoHome,
    iconGoogle,
    chat,
    gear,
    notifications,
    home,
    homeActive,
    media,
    mediaActive,
    option,
    optionActive,
    album,
    smile,
    like,
    lazada,
    shopee,
    tiki,
    shopPing,
};
const svgIcons = [
    'blackLogo',
    'logoHome',
    'iconGoogle',
    'chat',
    'gear',
    'notifications',
    'home',
    'homeActive',
    'media',
    'mediaActive',
    'option',
    'optionActive',
    'album',
    'smile',
    'like',
    'lazada',
    'shopee',
    'tiki',
    'shopPing',
];
function Icons({ type, widths, heights, className, alt }) {
    if (svgIcons.includes(type)) {
        return (
            <img
                className={classNames("icons", className)}
                style={{width: widths, height: heights}}
                src={icons[type]}
                alt={`iconHome${alt}`}
            />
        );
    }
    return null;
}

Icons.propTypes = {
    type: PropTypes.oneOf([...svgIcons]).isRequired,
    widths: PropTypes.string,
    heights: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
};

Icons.defaultPros = {};

export default Icons;
