import React, { useEffect, useState } from 'react';
import "./showcase.css"

// Images import
import showcase_image1 from "../../../images/LandingPage/Showcase/showcase_image1.webp";
import showcase_image2 from "../../../images/LandingPage/Showcase/showcase_image2.webp";
import showcase_image3 from "../../../images/LandingPage/Showcase/showcase_image3.webp";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const Showcase = () => {

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
        <div className='showcase'>
            <div className='showcase_header'>
                <div className='showcase_header_left'>
                    <p>SHOWCASE</p>
                    {/* <div> */}
                    <h3>Setting CraftIndika Apart</h3>
                    {/* </div> */}
                </div>
                <div className='showcase_header_right'>
                    <a href="#">View products</a>
                </div>
            </div>
            <div className='showcase_carousel'>
                <Swiper
                    slidesPerView={(windowWidth >= 700 && windowWidth <= 1082) ? 2 : (windowWidth >= 1082 ? 3 : 1) }
                    spaceBetween={17}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <div className='showcase_carousel_single_main'>
                        <SwiperSlide>
                            <div className='showcase_carousel_single'>
                                <img src={showcase_image1} />
                                <div className='showcase_carousel_single_info'>
                                    <p>TRIBAL JEWELLERY</p>
                                    <h3>Classically imperfect</h3>
                                    <h3>jewellery for unique</h3>
                                    <h3>statement</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='showcase_carousel_single_main'>
                        <SwiperSlide>
                            <div className='showcase_carousel_single'>
                                <img src={showcase_image2} />
                                <div className='showcase_carousel_single_info'>
                                    <p>METAL CRAFTS</p>
                                    <h3>Revamp Your Space with</h3>
                                    <h3>the Alluring Charm of</h3>
                                    <h3>Bronze Decoratives</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='showcase_carousel_single_main'>
                        <SwiperSlide>
                            <div className='showcase_carousel_single'>
                                <img src={showcase_image3} />
                                <div className='showcase_carousel_single_info'>
                                    <p>GIFTING COLLECTION</p>
                                    <h3>Handpicked Luxury</h3>
                                    <h3>Treasures For Every</h3>
                                    <h3>Occasion</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className='showcase_carousel_single_main'>
                        <SwiperSlide>
                            <div className='showcase_carousel_single'>
                                <img src={showcase_image3} />
                                <div className='showcase_carousel_single_info'>
                                    <p>GIFTING COLLECTION</p>
                                    <h3>Handpicked Luxury</h3>
                                    <h3>Treasures For Every</h3>
                                    <h3>Occasion</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>

                </Swiper>
            </div>
        </div>
    )
}

export default Showcase