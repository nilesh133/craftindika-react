import React from 'react';
import "./collection.css";

// Images import
import collection_image1 from "../../images/LandingPage/Collection/collection_image1.png";
import collection_image2 from "../../images/LandingPage/Collection/collection_image2.png";
import collection_image3 from "../../images/LandingPage/Collection/collection_image3.png";
import collection_image4 from "../../images/LandingPage/Collection/collection_image4.png";
import collection_image5 from "../../images/LandingPage/Collection/collection_image5.png";
import next_arrow from "../../images/LandingPage/Collection/next-arrow.png";
import collection_amazon from "../../images/LandingPage/Collection/collection_amazon.png";
import collection_etsy from "../../images/LandingPage/Collection/collection_etsy.png";
import collection_craftindika from "../../images/LandingPage/Collection/collection_craftindika.png";

const Collection = () => {
    return (
        <div className='collection'>
            <div className='collection_heading'>
                <p>Collection</p>
                <h3>Our Artisanal Showcase</h3>
            </div>
            <div className='collection_content'>
                <div className='collection_content_box'>
                    <img src={collection_image1} />
                    <h2>Luxury Accessories</h2>
                    <p>Discover the enduring elegance of bronze jewelry, a harmonious fusion of warmth and artisanal craftsmanship.</p>
                    <a href="#">Explore</a>
                </div>
                <div className='collection_content_box'>
                    <img src={collection_image2} />
                    <h2>Bamboo & Cane</h2>
                    <p>Embrace the artistry of bamboo and cane handicrafts, where natural materials & craftsmanship unite in perfect harmony.</p>
                    <a href="#">Explore</a>

                </div>
                <div className='collection_content_box'>
                    <img src={collection_image3} />
                    <h2>Dhokra Metal</h2>
                    <p>Admire the intricacy of metal crafts, where age-old techniques meet masterful artistry in stunning metallic creations.</p>
                    <a href="#">Explore</a>

                </div>
                <div className='collection_content_box'>
                    <img src={collection_image4} />
                    <h2>Applique Crafts</h2>
                    <p>Delight in the vibrant charm, a testament to the seamless interplay of intricate needlework and vivid creativity.</p>
                    <a href="#">Explore</a>

                </div>
                <div className='collection_content_box'>
                    <img src={collection_image5} />
                    <h2>Trible Jewellery</h2>
                    <p>Where ancient cultural heritage blends with unique, earthy designs to create truly enchanting adornments.</p>
                    <a href="#">Explore</a>
                </div>
                <div className='collection_content_box'>
                    <img className='next' src={next_arrow} />
                    <h3>Explore All</h3>
                </div>
            </div>
            <div className='collection_featured'>
                <h1>We are featured on</h1>
                <img src={collection_amazon} />
                <img src={collection_etsy} />
                <img src={collection_craftindika} />
            </div>
        </div>
    )
}

export default Collection