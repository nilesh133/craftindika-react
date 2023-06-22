import React, { useEffect, useState } from 'react';
import "./featured.css";

// Images import
import featured_image1 from "../../../images/LandingPage/Featured/featured_image1.png";
import featured_image2 from "../../../images/LandingPage/Featured/featured_image2.png";
import featured_image3 from "../../../images/LandingPage/Featured/featured_image3.png";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const Featured = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Add event listener to update window width on resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className='featured'>
            <div className='featured_header'>
                <div className='featured_header_left'>
                    <p>FEATURED</p>
                    <div>
                        <h3>Discover Our</h3>
                        <h3>Curated Collection</h3>
                    </div>
                </div>
                <div className='featured_header_right'>
                    <div>
                        <p>Embrace the distinctive elegance of our artisanal collection and</p>
                        <p>discover the timeless allure of India's finest handicrafts.</p>
                    </div>
                    <a href="#">Explore All Products</a>
                </div>
            </div>
            <div className='featured_carousel'>
                <Swiper
                    slidesPerView={windowWidth <= 600 ? 1 : 2}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className='featured_carousel_single_main'>
                        <SwiperSlide>
                            <div className='featured_carousel_single'>
                                <img src={featured_image1} />
                                <div className='featured_carousel_single_info'>
                                    <h2>Mesmeric Arts.</h2>
                                    <h3><span>over </span> 100 styles</h3>
                                    <p>Brushstrokes of a Rich Culture.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='featured_carousel_single_main'>
                        <SwiperSlide>
                            <div className='featured_carousel_single'>
                                <img src={featured_image2} />
                                <div className='featured_carousel_single_info'>
                                    <h2>Exquisite Handicrafts.</h2>
                                    <h3><span>over </span> 500 types</h3>
                                    <p>Crafted with Love, Shaped by Tradition.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='featured_carousel_single_main'>
                        <SwiperSlide>
                            <div className='featured_carousel_single'>
                                <img src={featured_image3} />
                                <div className='featured_carousel_single_info'>
                                    <h2>Intricate Handlooms.</h2>
                                    <h3><span>over </span> 70 Kinds</h3>
                                    <p>India's Heritage Thread by Thread.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                </Swiper>


            </div>
        </div>
    )
}

export default Featured