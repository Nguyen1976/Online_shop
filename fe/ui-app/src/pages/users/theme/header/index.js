import { memo } from 'react';
import "./style.scss";
import { AiOutlineFacebook, AiOutlineMail  } from "react-icons/ai";
import { FiInstagram, FiLinkedin, FiGlobe, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { formatter } from 'utils/fomater';

function Header() {
    return (  
        <>
            <div className='header__top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 header__top-left'>
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hello@gmail.com
                                </li>
                                <li>
                                    Miễn phí ship đơn từ {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 header__top-rigth'>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FiInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FiLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FiGlobe />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <FiUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-xl-3'>LOGO</div>
                    <div className='col-lg-3 col-xl-3'>MENUS</div>
                    <div className='col-lg-3 col-xl-3'>PHONE</div>
                    <div className='col-lg-3 col-xl-3'>LOGO</div>
                </div>
            </div>
        </>
    );
}

export default memo(Header);