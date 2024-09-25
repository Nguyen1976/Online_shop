import { memo } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

import "./style.scss";

import cat1Img from "assets/users/images/categories/cat1.png";
import cat2Img from "assets/users/images/categories/cat2.png";
import cat3Img from "assets/users/images/categories/cat3.png";
import cat4Img from "assets/users/images/categories/cat4.png";
import cat5Img from "assets/users/images/categories/cat5.png";

import feature1Img from "assets/users/images/featured/featured-1.png";
import feature2Img from "assets/users/images/featured/featured-2.png";
import feature3Img from "assets/users/images/featured/featured-3.png";
import feature4Img from "assets/users/images/featured/featured-4.png";
import feature5Img from "assets/users/images/featured/featured-5.png";
import feature6Img from "assets/users/images/featured/featured-6.png";
import feature7Img from "assets/users/images/featured/featured-7.png";
import feature8Img from "assets/users/images/featured/featured-8.png";

import banner1Img from "assets/users/images/banner/banner-1.png";
import banner2Img from "assets/users/images/banner/banner-2.png";

import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { formatter } from 'utils/fomater';


function HomePage() {
    
    //thư viện react-multi-carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi"
        },
        {
            bgImg: cat2Img,
            name: "Thịt bò"
        },
        {
            bgImg: cat3Img,
            name: "Rau củ"
        },
        {
            bgImg: cat4Img,
            name: "Nước trái cây"
        },
        {
            bgImg: cat5Img,
            name: "Nước trái cây"
        }
    ]

    const featproducts = {
        all: {
            title: "Toàn bộ",
            product: [
                {
                    img: feature1Img,
                    name: "Thịt bò",
                    price: 20000
                },
                {
                    img: feature2Img,
                    name: "Chuối",
                    price: 17800
                },
                {
                    img: feature3Img,
                    name: "Ổi",
                    price: 25000
                },
                {
                    img: feature4Img,
                    name: "Dưa hấu",
                    price: 44020
                },
                {
                    img: feature5Img,
                    name: "Nho tím",
                    price: 120000
                },
                {
                    img: feature6Img,
                    name: "Humburger",
                    price: 86000
                },
                {
                    img: feature7Img,
                    name: "Xoài keo",
                    price: 69000
                },
                {
                    img: feature8Img,
                    name: "Táo Úc",
                    price: 53000
                },
            ]
        },
        freshMeat: {
            title: "Thịt tươi",
            product: [
                {
                    img: feature1Img,
                    name: "Thịt bò",
                    price: 20000
                },
            ]
        },
        fruits: {
            title: "Trái cây",
            product: [
                {
                    img: feature2Img,
                    name: "Chuối",
                    price: 17800
                },
                {
                    img: feature3Img,
                    name: "Ổi",
                    price: 25000
                },
                {
                    img: feature4Img,
                    name: "Dưa hấu",
                    price: 44020
                },
                {
                    img: feature5Img,
                    name: "Nho tím",
                    price: 120000
                },
                {
                    img: feature7Img,
                    name: "Xoài keo",
                    price: 69000
                },
                {
                    img: feature8Img,
                    name: "Táo Úc",
                    price: 53000
                },
            ]
        },
        fastFood: {
            title: "Thức ăn nhanh",
            product: [
                {
                    img: feature6Img,
                    name: "Humburger",
                    price: 86000
                },
            ]
        },
    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];//trong tablist sẽ có 4 cái tab chính là 4 cái key.title
        const tabPanels = [];//Trong tabpanels cũng sẽ có 4 cái mảng mỗi mảng sẽ chứa các đối tượng là các sản phẩm và hiểu thị theo tabpanel
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            
            const tabPanel = [];
            data[key].product.forEach((item, j) => {
                tabPanel.push(
                <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={j}>
                    <div className='featured__item'>
                        <div className='featured__item-pic'
                            style={{
                                backgroundImage: `url(${item.img})`,
                            }}
                        >
                            <ul className='featured__item-pic--hover'>
                                <li>
                                    <AiOutlineEye />
                                </li>
                                <li>
                                    <AiOutlineShoppingCart />
                                </li>
                            </ul>
                        </div>
                        <div className='featured__item-text'>
                            <h6>
                                <Link to="">{item.name}</Link> 
                            </h6>
                            <h5>{formatter(item.price)}</h5>
                        </div>
                    </div>
                </div>);
            });
            tabPanels.push(tabPanel);
        });


        return (
            <>
                <Tabs>
                    <TabList>
                        {/* trả về 4 cái tab là 4 cái key */}
                        {tabList}
                    </TabList>

                    {   
                        //trả về 4 cái tabpanel chứa các sản phẩm
                        tabPanels.map((item, key) => (
                            <TabPanel key={key}>
                                <div className="row">
                                    {item}
                                </div>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </>
        )
    }

    return ( 
        <>

            {/* Categories Begin */}
            <div className='container container__categories-slider'>
                <Carousel responsive={responsive} className='categories__slider'>
                    {
                        sliderItems.map((item, key) => (
                            <div className='categories__slider-item'
                                style={{ backgroundImage: `url(${item.bgImg})` }}
                                key={key}
                            >
                                <p>{item.name}</p>
                        </div>
                        ))
                    }
                </Carousel>
            </div>
            {/* Categories End */}
            
    
            {/* Featured Begin */}
            <div className="container">
                <div className="featured">
                    <div className="section-title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProducts(featproducts)}
                </div>
            </div>
            {/* Featured End */}



            {/* Banner Begin */}
            <div className="container">
                <div className="banner">
                    <div className="banner__pic">
                        <img src={banner1Img} alt="banner" />
                    </div>
                    <div className="banner__pic">
                        <img src={banner2Img} alt="banner" />
                    </div>
                </div>
            </div>
            {/* Banner End */}



        </>
    );
}

export default memo(HomePage);