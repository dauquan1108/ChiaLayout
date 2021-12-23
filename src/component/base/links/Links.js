import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Links({ children, to, className,onClick }) {

    return (
        <React.Fragment>
            <Link to={to} className={className} onClick={onClick}>
                {children}
            </Link>
        </React.Fragment>
    );
}

Links.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Links.defaultPros = {};

export default Links;
