import React from 'react'
import "./footer.css";

// Images import
import footer_logo from "../../images/Footer/footer_logo.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_upper'>
                <div className='footer_upper_links'>
                    <div className='footer_upper_links_itemscontainer'>
                        <div className='footer_upper_links_item'>
                            <p>01</p>
                            <h3>Company</h3>
                        </div>
                        <div className='footer_upper_links_item'>
                            <p>02</p>
                            <h3>Collections</h3>
                        </div>
                        <div className='footer_upper_links_item'>
                            <p>03</p>
                            <h3>Curations</h3>
                        </div>
                        <div className='footer_upper_links_item'>
                            <p>04</p>
                            <h3>CraftPartner</h3>
                        </div>
                        <div className='footer_upper_links_item'>
                            <p>05</p>
                            <h3>Contact</h3>
                        </div>
                    </div>
                    <div className='footer_upper_links_infocontainer'>
                        <div className='footer_upper_links_item' style={{marginRight: "5.5rem"}}>
                            <p>Location</p>
                            <h3>Bhubaneswar, Odisha – India</h3>
                        </div>
                        <div className='footer_upper_links_item'>
                            <p>Phone</p>
                            <h3>+91 982-789-4737</h3>
                        </div>
                    </div>
                </div>
                <div className='footer_upper_logo'>
                    <img src = {footer_logo}/>
                </div>
            </div>
            <div className='footer_lower'>
                <div className='footer_lower_left'>
                    <p>2023 © CraftIndika. Crafted with precision and engineering.</p>
                </div>
                <div className='footer_lower_right'>
                    <a href='#'>Privacy Policy.</a>
                    <a href='#'>Terms and Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer