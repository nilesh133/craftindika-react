import React from 'react';
import "./artisanal.css"

// Images import
import artisan_main_image from "../../../images/LandingPage/Hero/hero_main_image.png"
import artisanal_flower_image from "../../../images/LandingPage/Artisanal/artisanal_flower.png"

const Artisanal = () => {
  return (
    <div className='artisanal'>
        <div className='artisanal_flower_image'>
            <img src = {artisanal_flower_image}/>
        </div>
        <div className='artisanal_heading'>
            <h1>INDIAN <span>artisanal   </span> CREATIONS MERIT</h1>
            <h1>INTERNATIONAL RECOGNITION AND DESERVE</h1>
            <h1>TO GRACE DISTINGUISHED SPACES AND</h1>
            <h1>SOPHISTICATED HOMES ACROSS THE <span>globe</span></h1>
        </div>
        <div className='artisanal_image'>
            <img src = {artisan_main_image}/>
        </div>
        <div className='artisanal_present'>
            <p>We present to you the epitome of handcrafted excellence, where the meticulous precision of each</p>
            <p>handmade piece evokes the refined aesthetics of machine-crafted design.</p>
        </div>
        <div className='artisanal_learnmore'>
            <a href="#">Learn More</a>
        </div>
    </div>
  )
}

export default Artisanal