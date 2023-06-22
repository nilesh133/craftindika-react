import React from 'react';
import "./contactus.css";

// Images import
import Contactus from "../../images/contactus.jpg"
import ContactUsLogo from "../../images/contactus_logo.png"

// Icons import
import { MdWifiCalling3, MdLocationOn, MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className='contactus'>
      <div className='contactus_header'>
        <h1>Contact Us</h1>
        <p>WE ARE HERE TO HEAR FROM YOU</p>
      </div>
      <div className='contactus_details'>
        <div className='contactus_details_box'>
          <span>
            <MdWifiCalling3 />
          </span>
          <div className='contactus_details_box_content'>
            <h3>Contact Us</h3>
            <p>+91-9827894737</p>
          </div>
        </div>
        <div className='contactus_details_box'>
          <span>
            <MdLocationOn />
          </span>
          <div className='contactus_details_box_content'>
            <h3>Visit us</h3>
            <p>104, N A Majestic, Shanti Nagar,</p>
            <p>Laxmisagar, Bhubaneswar,</p>
            <p>Odisha- 751006 India</p>
          </div>
        </div>
        <div className='contactus_details_box'>
          <span>
            <MdOutlineEmail />
          </span>
          <div className='contactus_details_box_content'>
            <h3>Email us</h3>
            <p>business@craftindika.com</p>
          </div>
        </div>
      </div>
      <div className='contactus_form'>
        <div className='contactus_form_left'>
          <h3>Send us mail</h3>
          <p>Drop us a single liner and our team will get back to you soon.</p>
          <div className='contactus_form_left_input'>
            <p>Name</p>
            <input type = "text" placeholder='Name'/>
          </div>
          <div className='contactus_form_left_input'>
            <p>Email</p>
            <input type = "email" placeholder='Name'/>
          </div>
          <div className='contactus_form_left_input'>
            <p>Message</p>
            <textarea rows = "4" placeholder='Message'/>
          </div>
          <div className='contactus_form_left_input'>
            <input style={{background: "#870827", border: "none", outline: "none", color: "#fff", fontWeight: "500", marginTop: "1rem", width: "95%"}} type='submit' value = "Submit" />
          </div>
        </div>
        <div className='contactus_form_right'>
          <img src = {ContactUsLogo}/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs