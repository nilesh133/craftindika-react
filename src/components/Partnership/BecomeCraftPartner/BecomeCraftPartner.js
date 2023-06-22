import React from 'react';
import "./becomecraftpartner.css"
import { HiArrowUpRight } from 'react-icons/hi2';

const BecomeCraftPartner = () => {
    return (
        <div className='becomecraftpartner'>
            <div className='becomecraftpartner_heading'>
                <h3>Become a</h3>
                <h3>CraftPartner</h3>
            </div>
            <div className='becomecraftpartner_paras'>
                <p>Join the CraftPartner Program today and discover an exclusive</p>
                <p>collection tailored for your larger spaces, offices, hotels, and more.</p>
            </div>
            <div className='becomecraftpartner_button'>
                <p>Partner Now</p>
                <span><HiArrowUpRight /></span>
            </div>
        </div>
    )
}

export default BecomeCraftPartner