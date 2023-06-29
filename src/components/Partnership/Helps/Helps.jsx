import React from 'react'
import "./helps.css";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import flower from "../../../images/Partnership//Helps/Flower.webp"

const Helps = () => {
  return (
    <div className='helps'>
        <div className='helps_heading'>
            <div className='helps_heading_box'></div>
            <Fade>
            <div>
                <h3>CRAFTPARTNER HELPS </h3>
                <h3>THOUSANDS OF CRAFTSMEN </h3>
                <h3>AND THEIR LIVELIHOOD</h3>
            </div>
            </Fade>
        </div>
        <div className='helps_paras'>
            <Slide bottom>
            <p>At CraftIndika, we are dedicated to supporting thousands of skilled craftsmen and securing their livelihoods. </p>
            <p>Through our partnership initiatives, we empower artisans by providing them with sustainable income </p>
            <p>opportunities and a global platform to showcase their unique talents and exceptional handicrafts.</p>
            </Slide>
            <img src= {flower} />
        </div>
        <div className='helps_link'>
        <Slide bottom>
            <a href="#">See more</a>
        </Slide>
        </div>
    </div>
  )
}

export default Helps