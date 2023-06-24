import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import "./partnershipprogram.css";
import Select from 'react-select';
import countriesCode from '../countries.json';

// Images import
import partnershipprogram_image1 from "../../../images/Partnership/Program/1.webp";
import partnershipprogram_image2 from "../../../images/Partnership/Program/2.webp";
import partnershipprogram_image3 from "../../../images/Partnership/Program/3.webp";

// Icons import
import { HiArrowUpRight } from "react-icons/hi2";

const PartnershipProgram = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [phone, setPhone] = useState('');

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setSelectedCountryCode(null);
    setPhone('');
    setShowDialog(false);
  };

  return (
    <div className='partnershipprogram'>
      <Slide bottom>
        <div className='partnershipprogram_header'>
          <p>ABOUT</p>
          <h1>What is CraftPartner program ?</h1>
        </div>
        <div className='partnershipprogram_content_container'>
          <div className='partnershipprogram_content'>
            <div className='partnershipprogram_content_upper'>
              <h6>01</h6>
              <div>
                <h3>Privileged Entry in $680 </h3>
                <h3>Billion Global Market</h3>
              </div>
              <div>
                <p>Gain priority access in the global handicraft market, and leverage our wide range of high-quality products to cater to diverse customer preferences.</p>
              </div>
            </div>
            <img src={partnershipprogram_image1} alt="Image 1" />
          </div>
          <div className='partnershipprogram_content'>
            <div className='partnershipprogram_content_upper'>
              <h6>02</h6>
              <div>
                <h3>Strategic Business Support </h3>
                <h3>to Maximize Returns</h3>
              </div>
              <div>
                <p>Experience the expert guidance to stay ahead of the competition in the thriving handicraft industry and multiply your return generation capacity.</p>
              </div>
            </div>
            <img src={partnershipprogram_image2} alt="Image 2" />
          </div>
          <div className='partnershipprogram_content'>
            <div className='partnershipprogram_content_upper'>
              <h6>03</h6>
              <div>
                <h3>Platform to Patronage </h3>
                <h3>Ethnic Treasures</h3>
              </div>
              <div>
                <p>Preserve and promote the rich cultural heritage, empower artisans and their communities, and showcase the beauty and diversity of indigenous handicrafts to your customers.</p>
              </div>
            </div>
            <img src={partnershipprogram_image3} alt="Image 3" />
          </div>
        </div>
        <div className='partnershipprogram_button' onClick={handleOpenDialog}>
          <p>Show Interest</p>
          <span><HiArrowUpRight /></span>
        </div>
      </Slide>

      {showDialog && (
        <div className="dialog">
          <div className="dialog_content">
            <button className="dialog_close" onClick={handleCloseDialog}>
              &times;
            </button>
            <h2>We'll reach out to you shortly</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name<span>*</span>: 
                <input
                  type="text"
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                Email<span>*</span>:
                <input
                  type="email"
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className='phone_field'>
                Phone:
                <Select
                    options={countriesCode}
                    value={selectedCountryCode}
                    onChange={(selectedOption) => setSelectedCountryCode(selectedOption)}
                    className="select_container"
                    classNamePrefix="select"
                  />
                <input
                  type="tel"
                  placeholder='Enter Your Contact No.'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                />
              </label>
              <div className="dialog_submit">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnershipProgram;
