import { memo } from 'react';
import { Link } from "react-router-dom";
import './style.scss';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

function Footer() {
    return (  
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12'>
                        <div className='footer__about'>
                            <h1 className='footer__about_logo'>Sivi Shop</h1>
                            <ul>
                                <li>Địa chỉ: 213 Dương Đình Nghệ</li>
                                <li>Phone: 0975-951-046</li>
                                <li>Email: nguyen@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <div className="footer__widget">
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to="">
                                        Liên hệ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Thông tin về chúng tôi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Sản phẩm kinh doanh
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Giỏ hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Danh sách ưa thích
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        <div className="footer__widget">
                            <h6>Khuyến mãi & ưu đãi</h6>
                            <p>Đăng ký nhận thông tin tại đây</p>
                            <form action="#">
                                <div className='input-group'>
                                    <input type="text" placeholder='Nhập Email' />
                                    <button type='submit' className='button-submit'>Đăng ký</button>
                                </div>
                                <div className="footer__widget__social">
                                    <div>
                                        <AiOutlineFacebook />
                                    </div>
                                    <div>
                                        <AiOutlineInstagram />
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);