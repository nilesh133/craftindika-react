import React, { useState } from 'react'
import "./hero.css";

// Icons import
import { HiArrowUpRight } from "react-icons/hi2"

// Images import
import hero_main_image from "../../../images/LandingPage/Hero/hero_main_image.png"

const Hero = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [hamburgerType, setHamburgerType] = useState(false);
    const [states, setStates] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
        setHamburgerType(!hamburgerType)
    };


    return (
        <div className='hero'>
            <nav className="hero_nav">
                <div className="hero_nav_logo">
                    <h3>CRAFTINDIKA</h3>
                </div>
                <div className={`hero_nav_links ${showNavLinks ? 'showNav' : ''}`}>
                    <p>Company</p>
                    <p>Collections</p>
                    <p>Curations</p>
                    <p>CraftPartner</p>
                    <p>Connect</p>
                </div>
                <div className={`hero_nav_links_hamburger ${hamburgerType ? 'webinar_closeHamburger' : ''}`} onClick={() => toggleNavLinks()}>
                    <span className="hamburgerline hamburgerline-top"></span>
                    <span className="hamburgerline hamburgerline-middle"></span>
                    <span className="hamburgerline hamburgerline-bottom"></span>
                </div>
            </nav>
            <div className='hero_heading'>
               
                <h1>Transforming Spaces</h1>
                <h1>Into Work Of Art</h1>
            </div>
            <div className='hero_explore'>
                <div className='hero_img'>
                    <img src={hero_main_image} />
                </div>
                <div className='hero_explore_paras'>
                    <p>Elevate your living experience with our</p>
                    <p>luxurious Indian handicrafts, where every</p>
                    <p>piece embodies the spirit of opulence and</p>
                    <p>unparalleled craftsmanship.</p>
                    <div className='hero_explore_button'>
                        <p>Explore</p>
                        <span><HiArrowUpRight /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero