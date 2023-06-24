import React, { useState } from 'react';
import "./packages.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { HiArrowUpRight } from "react-icons/hi2";
import Fade from 'react-reveal/Fade';
import Select from 'react-select';
import countriesCode from '../countries.json';

const Packages = () => {
    const handleExpandDetailsClick = (event) => {
        event.preventDefault();
    };

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
        <div className='packages'>
            <Fade big>
            <div className='packages_header'>
                <p>PACKAGES</p>
                <h1>Premium Packages to choose from</h1>
            </div>
            <div className='packages_content'>
                <div className='packages_content_single'>
                    <div className='packages_content_single_show'>
                        <div className='packages_content_single_show_left'>
                            <h1>Freedom Package</h1>
                            <p>Benefit from a curated selection of inventory, attractive discounts, and convenient delivery options. We also offer comprehensive support, covering essential services and post-sales assistance, ensuring your success in the handicraft industry.</p>
                        </div>
                        <span>@</span>
                        <h2>$5,000</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <a href="#" onClick={handleExpandDetailsClick}>Expand details</a>
                            </AccordionSummary>
                            <AccordionDetails className='hide_content'>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>01</p>
                                        <h3>Inventory Worth</h3>
                                        <h3>$5000</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>02</p>
                                        <h3>Flat Discount</h3>
                                        <h3>on Face Value</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>03</p>
                                        <h3>Door Step</h3>
                                        <h3>Delivery</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>04</p>
                                        <h3>Free</h3>
                                        <h3>Documentation</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>05</p>
                                        <h3>Custom</h3>
                                        <h3>Clearance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>06</p>
                                        <h3>Freight</h3>
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>07</p>
                                        <h3>Packaging</h3>
                                        <h3>Cost</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>08</p>
                                        <h3>Post Sales</h3>
                                        <h3>Product Support</h3>
                                    </div>                                    
                                </div>
                                <div className='get_it_now_button' onClick={handleOpenDialog}>
                                    <p>Get It Now</p>
                                    <span><HiArrowUpRight /></span>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
                <div className='packages_content_single'>
                    <div className='packages_content_single_show'>
                        <div className='packages_content_single_show_left'>
                            <h1>Beginner Package</h1>
                            <p>Benefit from a curated selection of inventory, attractive discounts, and convenient delivery options. We also offer comprehensive support, covering essential services and post-sales assistance, ensuring your success in the handicraft industry.</p>
                        </div>
                        <span>@</span>
                        <h2>$7,000</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <a href="#" onClick={handleExpandDetailsClick}>Expand details</a>
                            </AccordionSummary>
                            <AccordionDetails className='hide_content'>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>++</p>
                                        <h3>Everything from</h3>
                                        <h3>Freedom Package</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>09</p>
                                        <h3>Digital</h3>
                                        <h3>Transformation</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>10</p>
                                        <h3>Product Listing</h3>
                                        <h3>Management</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>11</p>
                                        <h3>Search Engine</h3>
                                        <h3>Optimization</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>12</p>
                                        <h3>Digital Marketing</h3>
                                        <h3>Optimization</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>13</p>
                                        <h3>Social Media</h3>
                                        <h3>Management</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>14</p>
                                        <h3>Listing</h3>
                                        <h3>Management</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>15</p>
                                        <h3>Business Setup</h3>
                                        <h3>Guidance</h3>
                                    </div>
                                </div>
                                <div className='get_it_now_button' onClick={handleOpenDialog}>
                                    <p>Get It Now</p>
                                    <span><HiArrowUpRight /></span>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                </div>
                <div className='packages_content_single'>
                    <div className='packages_content_single_show'>
                        <div className='packages_content_single_show_left'>
                            <h1>Boost Package</h1>
                            <p>This all-inclusive package offers a curated inventory selection, impressive discounts, and hassle-free delivery. Benefit from essential services such as documentation, custom clearance, freight insurance, and packaging at no extra cost. Enhance your online presence with a complimentary website, product listing management, SEO, digital marketing, and social media management.</p>
                        </div>
                        <span>@</span>
                        <h2>$10,000</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <a href="#" onClick={handleExpandDetailsClick}>Expand details</a>
                            </AccordionSummary>
                            <AccordionDetails className='hide_content'>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>++</p>
                                        <h3>Everything from</h3>
                                        <h3>Beginner Package</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>16</p>
                                        <h3>Experience</h3>
                                        <h3>Center</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>17</p>
                                        <h3>Online Store</h3>
                                        <h3>Promo Setup</h3>
                                    </div>
                                    <div>
                                        <p></p>
                                        <h3></h3>
                                        <h3></h3>
                                    </div>
                                </div>
                                <div className='get_it_now_button' onClick={handleOpenDialog}>
                                    <p>Get It Now</p>
                                    <span><HiArrowUpRight /></span>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                </div>
                <div className='packages_content_single'>
                    <div className='packages_content_single_show'>
                        <div className='packages_content_single_show_left'>
                            <h1>Advanced Package</h1>
                            <p>Benefit from a curated selection of inventory, attractive discounts, and convenient delivery options. We also offer comprehensive support, covering essential services and post-sales assistance, ensuring your success in the handicraft industry.</p>
                        </div>
                        <h2>Talk to Sales</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <a href="#" onClick={handleExpandDetailsClick}>Expand details</a>
                            </AccordionSummary>
                            <AccordionDetails className='hide_content'>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>++</p>
                                        <h3>Everything from</h3>
                                        <h3>Boost Package</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>18</p>
                                        <h3>Dedicated</h3>
                                        <h3>Region</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>19</p>
                                        <h3>Sales Commission</h3>
                                        <h3>on B2C Direct Sales</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>20</p>
                                        <h3>Sales Commission</h3>
                                        <h3>on B2B Direct Sales</h3>
                                    </div>
                                </div>
                                <div className='get_it_now_button' onClick={handleOpenDialog}>
                                    <p>Get It Now</p>
                                    <span><HiArrowUpRight /></span>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                </div>
            </div>
            </Fade>

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
    )
}

export default Packages