import React from 'react';
import "./process.css";
import { useNavigate } from "react-router-dom";

// Images import
import process_image1 from "../../../images/LandingPage/Process/process_image1.webp";
import process_image2 from "../../../images/LandingPage/Process/process_image2.webp";

const Process = () => {
    const navigate = useNavigate();
    const handleBlogClick = () => {
        navigate(`/blog-craftwork`);
      };
  return (
    <div className='process'>
        <div className='process_top'>
            <div className='process_top_left'>
                <p>PROCESS</p>
                <div>
                    <h3>Behind</h3>
                    <h3>Craftwork</h3>
                </div>
            </div>
            <div>
                <img src={process_image1}/>
            </div>
        </div>
        <div className='process_down'>
            <div className='process_down_left'>
                <img src = {process_image2}/>
            </div>
            <div className='process_down_right'>
                <p>Our exceptional team comprises esteemed artisans, globally recognized for their mastery and dedication to this age-old craft.</p>
                <a href = "" onClick={() => handleBlogClick()}>See More</a>
            </div>
        </div>
    </div>
  )
}

export default Process