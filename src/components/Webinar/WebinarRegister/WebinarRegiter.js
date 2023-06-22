import React from 'react';
import "./webinarregister.css";

// Icons import
import { HiArrowUpRight } from 'react-icons/hi2';

const WebinarRegiter = () => {
    return (
        <div className='webinarregister'>
            <h1>Register for Free</h1>
            <div className='webinarregister_inputs_container'>
                <div className='webinarregister_inputs_container_box'>
                    <p>Your name</p>
                    <input type="text" placeholder='Enter Your Display Name' />
                </div>
                <div className='webinarregister_inputs_container_box'>
                    <p style={{textAlign: "left"}}>Your email</p>
                    <input type="email" placeholder='Enter Your Email Address' />
                </div>
            </div>
            <div className='webinarregister_sign_container'>
                <div className='webinarregister_sign_container_left'>
                    <input type='checkbox' />
                    <p>By signing this, I agree with CraftIndika Community Policy and agree to receive CraftIndika new updates and promotions through newsletter.</p>
                </div>
                <div className='webinarregister_sign_button'>
                    <span>Register</span>
                    <span><HiArrowUpRight /></span>
                </div>
            </div>
        </div>
    )
}

export default WebinarRegiter