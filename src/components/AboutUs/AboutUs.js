import React from 'react';
import "./aboutus.css"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Images import
import AboutUsCertificate1 from "../../images/about-us-certificate-1.jpg"
import AboutUsCertificate2 from "../../images/about-us-certificate-2.jpg"
import AboutUsCertificate3 from "../../images/about-us-certificate-3.jpg"
import AboutUsCertificate4 from "../../images/about-us-certificate-4.jpg"
import AboutUsCertificate5 from "../../images/about-us-certificate-5.jpg"


const AboutUs = () => {
    return (
        <div className='aboutus'>
            <div className='aboutus_header'>
                <h1>About Us</h1>
                <h2>Craftindika to Enrich</h2>
            </div>
            <div className='aboutus_info'>
                <p>CraftIndika Retail Private Limited is the one medium that connects art sellers and buyers with a common goal to uplift the medium of offering Indian Crafts and Artifacts globally. We ensure the listed products available for sale are original and authentic. We adopt a proper format of verification of authenticity and originality.</p>
                <p>We believe in connecting the people with the traditional roots of Art and Craft, originated in India, and represent the skilled and talented craftsmen all over the world. Our deliberate attempts focus on the upliftment of the medium to offer art lovers, antique and precious Indian Handicrafts for admiration and the soulful gaze. We are the beholder of original and unique pieces of art created by craftsmen to offer globally valued Indian Handicrafts.</p>
                <p>Our team includes gems of the nation, serving their expertise worldwide through an exclusive range of precious Indian Handicrafts. Craft Indika sources the premium range of products from artisans who are experienced, skilled, and awarded by Local, National, International, or Non Profit Organizations for their handwork and contributions in this field. We are the stage, and they are the actual performers. We acknowledge their hard work and have been offering them the trust they need to get value for the money deserved by them. We acknowledge the contribution of our artisans and are offering medical facilities, pension benefits, and welfare activities to help them compete in the mainstream. </p>
                <p> products listed by us have completed three quality check steps strictly followed by us. We offer exclusive ownership of the Indian Handicrafts to the seller after completion of the purchase. All the arts & crafts we provide have a defined resale value attached to the documents of purchase. With a keynote regarding and essential characteristics of the purchase – All products are going to extinct in future, (so, they will be antique in future and have fair value).</p>
                <p>Our clientele includes practical visionaries from across the globe, taking an interest in the handwork and talent of our craftsmen. CraftIndika is making sheer efforts to help them showcase the precious work in the best manner. We believe in upscaling our much-skilled team of craftsmen to help them deliver better than before. </p>
            </div>
            <div className='aboutus_discover'>
                <div className='aboutus_discover_top'>
                    <h1>Discover Our Products & Artifacts</h1>
                    <p>An Adeptness is more like an invaluable asset. Hence Craftindika’s catalog has the most comprehensive range of rare products which is Ideally designed for admirers of Indian Handicrafts. Created by palpable craftsmen and ready to act as an asset for your décor.</p>
                    <button>VISIT OUR STORE</button>
                </div>
                {/* <div className='aboutus_discover_svg'>
                    <svg xlmns = "http://www.w3.org/2000/svg" viewBox='0 0 1000 100' preserveAspectRatio='none'>
                        <path fill='#fff' style={{transformOrigin: "center", transform: "rotateY(360deg)"}} className ="elementor-shape-fill" d = "M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div> */}
            </div>
            <div className='about_us_swiper'>
                <img className='about_us_swiper_goldenborder' src = "https://www.pngkey.com/png/full/97-973557_transparent-gold-border.png"/>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <figure>
                            <img src={AboutUsCertificate1} />
                            <figcaption>Figure</figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src={AboutUsCertificate2} />
                            <figcaption>Figure</figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src={AboutUsCertificate3} />
                            <figcaption>Figure</figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src={AboutUsCertificate4} />
                            <figcaption>Figure</figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure>
                            <img src={AboutUsCertificate5} />
                            <figcaption>Figure</figcaption>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default AboutUs