import React from 'react';
import "./webinarbonus.css";

// Icons import
import { HiArrowUpRight } from 'react-icons/hi2';

const WebinarBonus = () => {
    return (
        <div className='webinarbonus'>
            <h1>Exclusive Bonus For CraftPartner Members </h1>
            <div className='webinarbonus_paras'>
                <p>Assured gifts to kickstart your handicraft business journey and support local artisans and free exclusive meetups with industry </p>
                <p>experts, successful entrepreneurs, and artisans post-webinar</p>
            </div>
            <div className='webinar_bonus_button'>
                <p>Partner Now</p>
                <span><HiArrowUpRight /></span>
            </div>
        </div>
    )
}

export default WebinarBonus