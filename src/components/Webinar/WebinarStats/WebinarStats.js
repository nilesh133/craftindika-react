import React from 'react';
import "./webinarstats.css";

const WebinarStats = () => {
    return (
        <div className='webinar_stats'>
            <div className='webinar_stats_box'>
                <h3>24</h3>
                <h3>Days Left</h3>
            </div>
            <div className='webinar_stats_box'>
                <h3>23</h3>
                <h3>Tickets Left</h3>
            </div>
            <div className='webinar_stats_box'>
                <h3>180+</h3>
                <h3>Signups</h3>
            </div>
        </div>
    )
}

export default WebinarStats