import React from "react";
import styled from "styled-components";

// Component
import Avatart from "../../base/avatar/Avatar";
import Icons from "../../base/icons/Icons";
import Links from "../../base/links/Links";

// style
import "./styles/Header.css";
import CreatePathUrl from "../../base/createPathUrl/CreatePathUrl";

const UnitHeader = styled.div`
    background-color:${props => props.theme.backgroundColorUnit};
`;

const UnitSearch = styled.div`
    background-color: ${props => props.theme.backGroundTransparent};
`;

function Header(props) {
    const urls =CreatePathUrl('quan', '11081999', 'page');
    return (
        <UnitHeader className="header">
            <div className="contentHeader">
                <div className="contentLeft">
                    <div className="logo">
                        <Links to={"/"}>
                            <Icons type="logoHome" />
                        </Links>
                    </div>
                    <UnitSearch className="search">
                        <Icons type="iconGoogle" widths="60px" heights="20px" />
                    </UnitSearch>
                </div>
                <div className="contentRight">
                    <Links to={urls} className="user">
                        <Avatart type='avatar' />
                        <div className="account">
                            <span>Đậu Xuân Quân</span>
                        </div>
                    </Links>
                    <div className="options">
                        <Icons type="notifications" widths="18px" heights="18px" />
                        <Icons type="chat" widths="18px" heights="18px" />
                        <Icons type='gear' widths="18px" heights="18px" />
                    </div>
                </div>
            </div>
        </UnitHeader>
    );
}

Header.propTypes = {};

Header.defaultPros = {};

export default Header;
