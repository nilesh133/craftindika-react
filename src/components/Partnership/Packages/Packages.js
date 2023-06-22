import React from 'react'
import "./packages.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const Packages = () => {
    return (
        <div className='packages'>
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
                        <h2>$5000</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <span>Show details</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>01</p>
                                        <h3>Inventory Worth</h3>
                                        <h3>$5000</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>02</p>
                                        <h3>20% Flat Discount</h3>
                                        <h3>on Face VAlue</h3>
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
                                        <h3>Freight</h3>
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>06</p>
                                        <h3>Custom</h3>
                                        <h3>Clearance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>07</p>
                                        <h3>Packaging</h3>
                                        <h3>Cost</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>08</p>
                                        <h3>Post Sales</h3>
                                        <h3>Production Support</h3>
                                    </div>
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
                        <h2>$7000</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <span>Show details</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>01</p>
                                        <h3>Inventory Worth</h3>
                                        <h3>$5000</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>02</p>
                                        <h3>20% Flat Discount</h3>
                                        <h3>on Face VAlue</h3>
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
                                        <h3>Freight</h3>
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>06</p>
                                        <h3>Custom</h3>
                                        <h3>Clearance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>07</p>
                                        <h3>Packaging</h3>
                                        <h3>Cost</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>08</p>
                                        <h3>Post Sales</h3>
                                        <h3>Production Support</h3>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                </div>
                <div className='packages_content_single'>
                    <div className='packages_content_single_show'>
                        <div className='packages_content_single_show_left'>
                            <h1>Boost Package</h1>
                            <p>his all-inclusive package offers a curated inventory selection, impressive discounts, and hassle-free delivery. Benefit from essential services such as documentation, custom clearance, freight insurance, and packaging at no extra cost. Enhance your online presence with a complimentary website, product listing management, SEO, digital marketing, and social media management.</p>
                        </div>
                        <h2>$5000</h2>
                    </div>
                    <div className='packages_content_single_hide'>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <span>Show details</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>01</p>
                                        <h3>Inventory Worth</h3>
                                        <h3>$5000</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>02</p>
                                        <h3>20% Flat Discount</h3>
                                        <h3>on Face VAlue</h3>
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
                                        <h3>Freight</h3>
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>06</p>
                                        <h3>Custom</h3>
                                        <h3>Clearance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>07</p>
                                        <h3>Packaging</h3>
                                        <h3>Cost</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>08</p>
                                        <h3>Post Sales</h3>
                                        <h3>Production Support</h3>
                                    </div>
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
                                id="panel1a-header"
                            >
                                <span>Show details</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='packages_content_single_hide_content'>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>01</p>
                                        <h3>Inventory Worth</h3>
                                        <h3>$5000</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>02</p>
                                        <h3>20% Flat Discount</h3>
                                        <h3>on Face VAlue</h3>
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
                                        <h3>Freight</h3>
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>06</p>
                                        <h3>Custom</h3>
                                        <h3>Clearance</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>07</p>
                                        <h3>Packaging</h3>
                                        <h3>Cost</h3>
                                    </div>
                                    <div className='packages_content_single_hide_content_box'>
                                        <p>08</p>
                                        <h3>Post Sales</h3>
                                        <h3>Production Support</h3>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages