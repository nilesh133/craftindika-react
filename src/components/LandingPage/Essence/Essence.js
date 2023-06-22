import React from 'react';
import "./essence.css";

// Images import
import essence_image_1 from "../../../images/LandingPage/Essence/essence_image_1.png"
import essence_image_2 from "../../../images/LandingPage/Essence/essence_image_2.png"
import essence_image_3 from "../../../images/LandingPage/Essence/essence_image_3.png"
import essence_image_4 from "../../../images/LandingPage/Essence/essence_image_4.png"
import essence_image_5 from "../../../images/LandingPage/Essence/essence_image_5.png"
import essence_image_6 from "../../../images/LandingPage/Essence/essence_image_6.png"
import { HiArrowUpRight } from 'react-icons/hi2';

const Essence = () => {
    return (
        <div className='essence'>
            <div className='essence_heading'>
                <p>ATTRIBUTES</p>
                <span>The CraftIndika Essence</span>
            </div>
            <div className='essence_content'>
                <div className='essence_content_row'>
                    <div className='essence_content_row_small'>
                        <p>01.</p>
                        <h3>Handcrafted</h3>
                        <img src={essence_image_1} />
                    </div>
                    <div className='essence_content_row_large'>
                        <p>02.</p>
                        <h3>Support Indian Craft and Craftsmen</h3>
                        <img src={essence_image_2} />
                    </div>
                </div>
                <div className='essence_content_row'>
                    <div className='essence_content_row_large'>
                        <p>03.</p>
                        <h3>Sustainable</h3>
                        <img src={essence_image_3} />
                    </div>
                    <div className='essence_content_row_small'>
                        <p>04.</p>
                        <h3>Fair Trade</h3>
                        <img src={essence_image_4} />
                    </div>
                </div>
                <div className='essence_content_row'>
                    <div className='essence_content_row_small'>
                        <p>05.</p>
                        <h3>Materials</h3>
                        <img src={essence_image_5} />
                    </div>
                    <div className='essence_content_row_large'>
                        <p>06.</p>
                        <h3>Quality Handmade Craftsmanship</h3>
                        <img src={essence_image_6} />
                    </div>

                </div>
            </div>
            <div className='essence_para'>
                <p>Uniting exquisite craftsmanship and cultural heritage to elevate your living spaces with unparalleled luxury. We present to you the epitome of</p>
                <p>handcrafted excellence, where the meticulous precision of each handmade piece evokes the refined aesthetics of machine-crafted design.</p>
            </div>
            <div className='essence_button'>
                <p>Values and Mission</p>
                <span><HiArrowUpRight /></span>
            </div>
        </div>
    )
}

export default Essence