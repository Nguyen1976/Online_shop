import { memo } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import "./style.scss";

import cat1Img from "assets/users/images/categories/cat1.png";
import cat2Img from "assets/users/images/categories/cat2.png";
import cat3Img from "assets/users/images/categories/cat3.png";
import cat4Img from "assets/users/images/categories/cat4.png";
import cat5Img from "assets/users/images/categories/cat5.png";

import feature1Img from "assets/users/images/featured/featured-1.png";
import feature2Img from "assets/users/images/featured/featured-2.png";


function HomePage() {
    
    //thư viện react-multi-carousel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
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
        }
    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            
            const tabPanel = [];
            data[key].product.forEach((item, j) => {
                tabPanel.push(<div key={j}>{item.name}</div>);
            });
            tabPanels.push(tabPanel);
        });


        return (
            <>
                <Tabs>
                    <TabList>
                        {tabList}
                    </TabList>

                    {
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
        </>
    );
}

export default memo(HomePage);