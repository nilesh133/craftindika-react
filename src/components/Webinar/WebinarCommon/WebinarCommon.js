import React from 'react';
import "./webinarcommon.css";

const WebinarCommon = ({data: {image, heading1, heading2, paraLine1, paraLine2, link, isReverse}}) => {
    return (
    <div className={isReverse ? "webinar_common_reverse" : "webinar_common"}>
        <div className='webinar_common_image' style={{backgroundImage: `url(${image})`}}>
            {/* <img src = {image}/> */}
        </div>
        <div className='webinar_common_content' style={{transform: isReverse ? "translateX(11rem)" : "translateX(-11rem)"}}>
            <h3>{heading1}</h3>
            <h1>{heading2}</h1>
            <div className='webinar_common_content_paras'>
                <p>{paraLine1}</p>
                <p>{paraLine2}</p>
            </div>
            <a href='#'>{link}</a>
        </div>
    </div>
  )
}

export default WebinarCommon