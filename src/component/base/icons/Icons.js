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
import optionActive from "../../images/option_active.svg";


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
];
function Icons({ type, widths, heights, className }) {
    if (svgIcons.includes(type)) {
        return (
            <img
                className={classNames("icons", className)}
                style={{width: widths, height: heights}}
                src={icons[type]}
                alt="iconHome"
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
};

Icons.defaultPros = {};

export default Icons;
