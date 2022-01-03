import React, { useState } from "react";

// Component
import Icons from "../../../base/icons/Icons";
import CreatePathUrl from '../../../base/createPathUrl/CreatePathUrl';
import Links from "../../../base/links/Links";
//style
import "./styles/BlockShopPing.css";

function BlockShopPing(props) {
    const [listLogo, setListLogo] = useState([
        {
            id: 1,
            image: 'lazada',
            titles: 'lazada.vn',
        },
        {
            id: 2,
            image: 'shopee',
            titles: 'shopee.vn',
        },
        {
            id: 3,
            image: 'tiki',
            titles: 'tiki.vn',
        },
    ]);

    const [title, setTitle] = useState([
        {
            id: 1,
            titles:
                "Philip giảm giá mùa dịch siêu ropTypes là một cách tốt để xác thực đầu vào của",
        },
        {
            id: 2,
            titles:
                "Philip giảm giá mùa dịch ropTypes là một cách tốt để xác thực đầu vào của",
        },
        {
            id: 3,
            titles:
                "Philip giảm giá mùa dịch siêu hot ropTypes là một cách tốt để xác thực đầu vào của.",
        },
        {
            id: 4,
            titles:
                "Philip giảm giá mùa dịch siêu hot ropTypes là một cách tốt để xác thực đầu vào của.",
        },
        {
            id: 5,
            titles:
                "Philip giảm giá mùa dịch siêu hot luôn ropTypes là một cách tốt để xác thực đầu vào của.",
        },
        {
            id: 6,
            titles:
                "Philip giảm giá mùa dịch siêu hot luôn ropTypes là một cách tốt để xác thực đầu vào của",
        },
    ]);

    return (
        <div className="blockShopPing">
            <div className="blockShopPingLeft">
                {listLogo.map((item) => {
                   const urls = CreatePathUrl(item.titles, item.id);
                    return (
                        <Links to={urls} key={item.id} title={item && item.titles}>
                            <Icons type={item.image} widths='90px' />
                        </Links>
                    );
                })}
            </div>
            <div className="blockShopPingRight">
                {title.map((item) => {
                    const urls = CreatePathUrl( item && item.titles, item && item.id);
                    return (
                        <div className="blockShopPingRightItem" key={item && item.id}>
                            <Icons type='shopPing' />
                            <Links to={urls} title={item && item.titles}>
                                <span>{item && item.titles}</span>
                            </Links>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

BlockShopPing.propTypes = {};

BlockShopPing.defaultPros = {};

export default BlockShopPing;
