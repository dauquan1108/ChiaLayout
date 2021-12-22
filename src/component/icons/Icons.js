import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

// style
import "./styles/Icons.css";

// image
import blackLogo from "../images/Home_Black_Logo.svg";
import logoHome from "../images/Home_logo.svg";
import iconGoogle from "../images/iconGoogle.png"
import chat from "../images/chat.png";
import gear from "../images/gear.png";
import notifications from "../images/notifications.png";

const icons = {
    blackLogo,
    logoHome,
    iconGoogle,
    chat,
    gear,
    notifications,
};
const svgIcons = [
    'blackLogo',
    'logoHome',
    'iconGoogle',
    'chat',
    'gear',
    'notifications',
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
