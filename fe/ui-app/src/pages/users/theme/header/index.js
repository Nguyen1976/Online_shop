import { memo, useEffect, useRef, useState } from 'react';
import "./style.scss";
import { AiOutlineFacebook, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart   } from "react-icons/ai";
import { FiInstagram, FiLinkedin, FiGlobe, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { formatter } from 'utils/fomater';
import { ROUTERS } from 'utils/router';

function Header() {
    const [ isShowCategories, setIsShowCategories ] = useState(false);
    const categoriesRef = useRef(null);

    const [ menus ] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Rau củ",
                    path: "",
                },
                {
                    name: "Thức ăn nhanh",
                    path: "",
                },
            ]
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            //kiểm tra click ra ngoài
            if(categoriesRef.current && !categoriesRef.current.contains(event.target)) {
                setIsShowCategories(false);
            }

        }
        document.addEventListener("mousedown", handleClickOutside);

        //clean up
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

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
                    <div className='col-xl-3'>
                        <div className='header__logo'>
                            <h1>SIVI CODE</h1>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        
                        <nav className='header__menu'>
                            <ul>
                                {
                                    menus?.map((menu, menukey) => (
                                        <li key={menukey} className={ menukey === 0 ? "active" : "" }>
                                            <Link to={menu?.path}>{}
                                                {menu?.name}
                                            </Link>
                                            {
                                                menu.child && (
                                                    <ul className='header__menu__dropdown'>
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menukey}.${childKey}`}>
                                                                    <Link to={childItem.path}>
                                                                        {childItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    )) 
                                }
                                
                            </ul>
                        </nav>

                    </div>
                    <div className='col-xl-3'>
                        <div className='header__cart'>
                            <div className='header__cart-price'>
                                <span>{ formatter(10000) }</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero__categories-container">
                    <div className="col-lg-3 hero__categories" ref={categoriesRef}>
                        <div className='hero__categories-all' onClick={() => setIsShowCategories((prev) => !prev)}>
                            <AiOutlineMenu />
                            Danh sách sản phẩm
                        </div>
                        
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to="">Thịt tươi</Link>
                            </li>
                            <li>
                                <Link to="">Rau củ</Link>
                            </li>
                            <li>
                                <Link to="">Nước trái cây</Link>
                            </li>
                            <li>
                                <Link to="">Trái cây</Link>
                            </li>
                            <li>
                                <Link to="">Hải sản</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9 hero__search-container">
                        
                        <div className='hero__search'>
                            <div className="hero__search-form">
                                <form action="">
                                    <input type="text" placeholder='Bạn đang tìm gì' />
                                    <button type='submit' className='site-button'>Tìm kiếm</button>
                                </form>
                            </div>
                            <div className='hero__search-phone'>
                                <div className="hero__search-phone-icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="hero__search-phone-text">
                                    <p>0985520084</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            <div className="hero__text">
                                <span>Trái cây tươi</span>
                                <h2>
                                    Rau quả <br />
                                    sạch 100%
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className='primary-btn'>
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Header);