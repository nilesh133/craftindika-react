import React, { useState } from 'react'
import "./webinarhero.css";

const WebinarHero = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [hamburgerType, setHamburgerType] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
        setHamburgerType(!hamburgerType)
    };

    return (
        <div className='webinar_hero'>
           <nav className="webinar_hero_nav">
                <div className="webinar_hero_nav_logo">
                    <h3>CRAFTINDIKA</h3>
                </div>
                <div className={`webinar_hero_nav_links ${showNavLinks ? 'webinar_showNav' : ''}`}>
                    <p>Company</p>
                    <p>Collections</p>
                    <p>Curations</p>
                    <p>CraftPartner</p>
                    <p>Connect</p>
                </div>
                <div className={`webinar_hero_nav_links_hamburger ${hamburgerType ? 'webinar_closeHamburger' : ''}`} onClick={() => toggleNavLinks()}>
                    <span className="webinar_hamburgerline webinar_hamburgerline-top"></span>
                    <span className="webinar_hamburgerline webinar_hamburgerline-middle"></span>
                    <span className="webinar_hamburgerline webinar_hamburgerline-bottom"></span>
                </div>
            </nav>
            <div className='webinar_hero_content'>
                <h4>ONLINE WEBINAR</h4>
                <div className='webinar_hero_content_heading'>
                    <h1>HANDCRAFT</h1>
                    <h1>your own business</h1>
                    <h1>WITHCRAFTS</h1>
                </div>
                <div>
                    <p>Discover the Secrets to Building a Profitable Handicraft Business that</p>
                    <p>Supports Indigenous Art and Promotes Cultural Diversity</p>
                </div>
            </div>
        </div>
    )
}

export default WebinarHero