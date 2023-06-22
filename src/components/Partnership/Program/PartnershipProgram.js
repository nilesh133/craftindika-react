import React from 'react';
import "./partnershipprogram.css";

// Images import
import partnershipprogram_image1 from "../../../images/Partnership/Program/partnershipprogram_image1.png";
import partnershipprogram_image2 from "../../../images/Partnership/Program/partnershipprogram_image2.png";
import partnershipprogram_image3 from "../../../images/Partnership/Program/partnershipprogram_image3.png";

// Icons import
import { HiArrowUpRight } from "react-icons/hi2";
const PartnershipProgram = () => {
    return (
        <div className='partnershipprogram'>
            <div className='partnershipprogram_header'>
                <p>ABOUT</p>
                <h1>What is CraftPartner program</h1>
            </div>
            <div className='partnershipprogram_content_container'>
                <div className='partnershipprogram_content'>
                    <div className='partnershipprogram_content_upper'>
                        <p>01</p>
                        <div>
                            <h3>Exclusive Business</h3>
                            <h3>Opportunities</h3>
                        </div>
                        <div>
                            <p>Gain priority access to sought-after products and expert guidance to stay ahead of the competition in the thriving handicraft industry.</p>
                        </div>
                    </div>
                    <img src={partnershipprogram_image1} />
                </div>
                <div className='partnershipprogram_content'>
                    <div className='partnershipprogram_content_upper'>
                        <p>02</p>
                        <div>
                            <h3>Access to $680 Billion</h3>
                            <h3>Handicraft Market</h3>
                        </div>
                        <div>
                            <p>Tap into the immense growth potential of the global handicraft market, and leverage our wide range of high-quality products to cater to diverse customer preferences.</p>
                        </div>
                    </div>
                    <img src={partnershipprogram_image2} />
                </div>
                <div className='partnershipprogram_content'>
                    <div className='partnershipprogram_content_upper'>
                        <p>03</p>
                        <div>
                            <h3>True Patronage of our</h3>
                            <h3>Culture and Art</h3>
                        </div>
                        <div>
                            <p>Preserve and promote our rich cultural heritage, empower artisans and their communities, and showcase the beauty and diversity of indigenous handicrafts to your customers.</p>
                        </div>
                    </div>
                    <img src={partnershipprogram_image3} />
                </div>
            </div>
            <div className='partnershipprogram_button'>
                <p>Show Interest</p>
                <span><HiArrowUpRight /></span>
            </div>
        </div>
    )
}

export default PartnershipProgram