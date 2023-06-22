import React from 'react';
import "./webinarschedule.css";
import { HiArrowUpRight } from 'react-icons/hi2';

const WebinarSchedule = () => {
  return (
    <div className='webinarschedule'>
        <div className='webinarschedule_paras'>
            <p>Don't miss this incredible opportunity to launch your successful handicraft business and become a patron of the arts. Register for free</p>
            <p>or choose our premium membership for exclusive benefits and greater impact</p>
        </div>
        <div className='webinarschedule_details'>
            <h4>DATE</h4>
            <h1>24th Sep 2023, 09:00 IST</h1>
        </div>
        <div className='webinarschedule_details'>
            <h4>LOCATION</h4>
            <h1>Zoom (will be shared later)</h1>
        </div>
        <div className='webinarschedule_details_button'>
                <p>Ticket Starts at $9.95</p>
                <span><HiArrowUpRight /></span>
            </div>
    </div>
  )
}

export default WebinarSchedule