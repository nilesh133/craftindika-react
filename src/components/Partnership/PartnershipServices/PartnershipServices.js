import React from 'react';
import "./partnershipservices.css";

// Icons import
import { TbSpeakerphone, TbMessages, TbCircles } from "react-icons/tb";
import {TfiViewListAlt} from "react-icons/tfi";
import {BsBoxSeam} from "react-icons/bs";
import {AiOutlineInsurance} from "react-icons/ai"

const PartnershipServices = () => {
  return (
    <div className='partnershipservices'>
      <div className='partnershipservices_header'>
        <p>SERVICES</p>
        <h1>What are we offering?</h1>
      </div>
      <div className='partnershipservices_services'>
        <div className='partnershipservices_services_single'>
          <span><TbSpeakerphone /></span>
          <div>
            <h3>Brand</h3>
            <h3>Marketing</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
          <span><TbMessages /></span>
          <div>
            <h3>Social Media</h3>
            <h3>Optimization</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
          <span><TfiViewListAlt /></span>
          <div>
            <h3>eCommerce</h3>
            <h3>Listing</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
          <span><BsBoxSeam /></span>
          <div>
            <h3>Worldwide Shipment</h3>
            <h3>Capabilities</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
          <span><AiOutlineInsurance /></span>
          <div>
            <h3>Insurance</h3>
            <h3>Coverage</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
          <span><TbCircles /></span>
          <div>
            <h3>Custom International</h3>
            <h3>Clearance</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnershipServices