import React from "react";
import styled from "styled-components";

// Component
import Avatart from "../../../base/avatar/Avatar";
import Icons from "../../../base/icons/Icons";

//style
import "./styles/Post.css";

const UnitPost = styled.div`
    background-color: ${props => props.theme.backGroundColorItem};
    span {
      color: ${props => props.theme.textColorItem};
    }
    
`;

function Post(props) {
    return (
        <UnitPost className="post">
            <div className="postLefts">
                <Avatart type='avatar' />
                <span>Bạn đang nghĩ gì...?</span>
            </div>
            <div className="postRights">
                <Icons type="album" widths="20px" />
                <Icons type="attachment" widths="20px" />
                <Icons type="smile" widths="20px" />
            </div>
        </UnitPost>
    );
}

Post.propTypes = {};

Post.defaultPros = {};

export default Post;
