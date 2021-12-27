import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

// style
import "./styles/Avatar.css";

// img
import avatarDefault from "../../images/AvatarDefault.svg";
// images
import avatar from "../../images/avatar.jpg";

const icons = {
    avatarDefault,
    avatar,
};

const svgIcons = [
    'avatarDefault',
    'avatar',
];

function Avatar({ type, widths, heights, className }) {
    const types = type ? type : 'avatarDefault';
    return (
        <div className="avatar">
            <img
                className={classNames("imgAvatar", className)}
                style={{width: widths, height: heights}}
                src={icons[types]}
                alt="avatarDefault"/>
        </div>
    );
}

Avatar.propTypes = {
    type: PropTypes.oneOf([...svgIcons]).isRequired,
    widths: PropTypes.string,
    heights: PropTypes.string,
    className: PropTypes.string,
};

Avatar.defaultPros = {
};

export default Avatar;
