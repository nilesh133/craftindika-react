import React from 'react'
import "./mission.css"

const Mission = () => {
    return (
        <div className='mission'>
            <div className='mission_heading'>
                <p>MISSION</p>
                <h3>Preserve, Enrich & Deliver Masterpieces</h3>
            </div>
            <div className='mission_stats'>
                <div className='mission_stats_single'>
                    <div className='mission_stats_single_circle'>
                        1000+
                    </div>
                    <h3>Products</h3>
                    <p>active and listed</p>
                </div>
                <div className='mission_stats_single'>
                    <div className='mission_stats_single_circle'>
                        500+
                    </div>
                    <h3>Sells</h3>
                    <p>sold and supported</p>
                </div>
                <div className='mission_stats_single'>
                    <div className='mission_stats_single_circle'>
                        5+
                    </div>
                    <h3>Countries</h3>
                    <p>served and growing</p>
                </div>
            </div>
        </div>
    )
}

export default Mission