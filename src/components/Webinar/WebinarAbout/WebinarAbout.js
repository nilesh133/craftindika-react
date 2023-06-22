import React from 'react';
import "./webinarabout.css";

// Images import
import webinar_about_top_right_logo from "../../../images/Webinar/WebinarAbout/webinar_about_top_right_logo.png";
import webinar_about_top_right_image from "../../../images/Webinar/WebinarAbout/webinar_about_top_right_image.png"; 
import webinar_about_bottom_left_image from "../../../images/Webinar/WebinarAbout/webinar_about_bottom_left_image.png";
import webinar_about_bottom_middle_image from "../../../images/Webinar/WebinarAbout/webinar_about_bottom_middle_image.png"; 
import webinar_about_bottom_right_arrow from "../../../images/Webinar/WebinarAbout/webinar_about_bottom_right_arrow.png"; 

const WebinarAbout = () => {
  return (
    <div className='webinar_about'>
        <div className='webinar_about_top'>
            <div className='webinar_about_top_left'>
                <h4>ABOUT US</h4>
                <div className='webinar_about_top_left_heading'>
                    <h1>We are</h1>
                    <h1>CraftIndika</h1>
                </div>
                <div className='webinar_about_top_left_paras'>
                    <p>We present to you the epitome of handcrafted excellence, where the meticulous precision of</p>
                    <p>each handmade piece evokes the refined aesthetics of machine-crafted design.</p>
                </div>
                <p></p>
            </div>
            <div className='webinar_about_top_right'>
                <img className='webinar_about_top_right_image1' src={webinar_about_top_right_image}/>
                <img className='webinar_about_top_right_image2' src={webinar_about_top_right_logo}/>
            </div>
            
        </div>
        <div className='webinar_about_bottom'>
            <div className='webinar_about_bottom_leftimage' style={{backgroundImage: `url(${webinar_about_bottom_left_image})`}}>
                {/* <img src={webinar_about_bottom_left_image}/> */}
            </div>
            <div className='webinar_about_bottom_middle'>
                <div className='webinar_about_bottom_middle_paras'>
                    <p>Our exceptional team comprises esteemed artisans, globally</p>
                    <p>recognized for their mastery and dedication to this age-old craft.</p>
                </div>
                <a>Visit Our Website</a>
                <div className='webinar_about_bottom_middle_image' style={{backgroundImage: `url(${webinar_about_bottom_middle_image})`}}>

                {/* <img src={webinar_about_bottom_middle_image}/> */}
                </div>
            </div>
            <div className='webinar_about_bottom_right'>
                <div className='webinar_about_bottom_right_content'>
                    <h1>Company</h1>
                    <img src = {webinar_about_bottom_right_arrow}/>
                </div>
                <div className='webinar_about_bottom_right_content'>
                    <h1>Collections</h1>
                    <img src = {webinar_about_bottom_right_arrow}/>
                </div><div className='webinar_about_bottom_right_content'>
                    <h1>Curations</h1>
                    <img src = {webinar_about_bottom_right_arrow}/>
                </div><div className='webinar_about_bottom_right_content'>
                    <h1>CraftPartner</h1>
                    <img src = {webinar_about_bottom_right_arrow}/>
                </div><div className='webinar_about_bottom_right_content'>
                    <h1>Contact</h1>
                    <img src = {webinar_about_bottom_right_arrow}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebinarAbout