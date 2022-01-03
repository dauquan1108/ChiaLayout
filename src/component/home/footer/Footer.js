import React from "react";
import styled from "styled-components";

// component
import Icons from "../../base/icons/Icons";
import Links from "../../base/links/Links";

// style
import "./styles/Footer.css";

const UnitFooter = styled.div`
    background-color:${props => props.theme.backgroundColorUnit};
    p {
        font-size: 12px;
        line-height: 2;
        color:${props => props.theme.textColorFooter};
    }
    a {
        font-size: 12px;
        text-decoration: none;
        color:${props => props.theme.textColorFooter};
    }
    span {
        color:${props => props.theme.textColorFooter};
        font-size: 12px;
        line-height: 2;
    }
`;

const Like = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: #393939;    
`;

const TitleFooter = styled.p`
    margin-top: 20px;
    color: #17b582 !important;
`;

function Footer(props) {
    return (
        <UnitFooter className="footer">
            <div className="contentFooterTop">
                <Links to={"/"}>
                    <Icons type="logoHome" widths="100px" className="Logo" />
                </Links>
                <div className="contentText">
                    <p>Chuyên trang Sản phẩm Công nghệ của tạp chí điện tử Nhà đầu tư.</p>
                    <p>
                        Giấy phép: Giấy phép hoạt động báo điện tử số 458/GP-BTTT, cấp ngày:
                        6/10/2016 và giấy phép sửa đổi, bổ sung những quy định ghi trong
                        Giấy
                    </p>
                    <p>
                        phép hoạt động báo điện tử số 280/GP-BTTTT cấp ngày 11/7/2019. @
                        toàn bộ bản quyền thuộc VnReview.vn
                    </p>
                    <p>Tổng biên tập: Nguyễn Anh Tuấn</p>
                    <p> Địa chỉ: tầng 7 số 65 Văn Miếu, Đống Đa, Hà Nội</p>
                    <p>
                        Email:<a href="BTTT@vnreview.vn"> BTTT@vnreview.vn</a> Hotline:
                        <a href="tel:0912.30.19.90">0912.30.19.90</a>
                    </p>
                    <p>Quy định và điều khoản sử dụng</p>
                </div>
            </div>
            <Like />
            <div className="contentFooterBottom">
                <TitleFooter>Liên hệ quảng cáo</TitleFooter>
                <span>
                    Email:<a href="QC@vnreview.vn"> QC@vnreview.vn</a>
                </span>
                <span>
                    Hotline:<a href="tel:0978.19.00.77"> 0978.19.00.77</a>
                </span>
            </div>
        </UnitFooter>
    );
}

Footer.propTypes = {};

Footer.defaultPros = {};

export default Footer;
