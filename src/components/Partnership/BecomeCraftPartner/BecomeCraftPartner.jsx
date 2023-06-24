import React, { useState } from 'react';
import "./becomecraftpartner.css"
import { HiArrowUpRight } from 'react-icons/hi2';
import Flip from 'react-reveal/Flip';
import Select from 'react-select';
import countriesCode from '../countries.json';

const BecomeCraftPartner = () => {
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
    <div className='becomecraftpartner'>
      <div className='becomecraftpartner_heading'>
        <Flip top>
          <h3>Become a</h3>
        </Flip>
        <Flip bottom>
          <h3>CraftPartner</h3>
        </Flip>
      </div>
      <Flip left>
        <div className='becomecraftpartner_paras'>
          <p>Join the CraftPartner Program today and discover an exclusive</p>
          <p>collection tailored for your larger spaces, offices, hotels, and more.</p>
        </div>
        <div className='becomecraftpartner_button' onClick={handleOpenDialog}>
          <p>Partner Now</p>
          <span>
            <HiArrowUpRight />
          </span>
        </div>
      </Flip>

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

export default BecomeCraftPartner;
