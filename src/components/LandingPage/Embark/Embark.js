import React from 'react'
import "./embark.css"

// Images import
import embark_main_image from "../../../images/LandingPage/Embark/embark_main_image.jpg"

import {TfiArrowTopRight} from "react-icons/tfi"

const Embark = () => {
  return (
    <div className='embark'>
        <div className='embark_content'>
            <div className='embark_content_left'>
                <img src = {embark_main_image}/>
            </div>
            <div className='embark_content_right'>
                <div className='embark_content_right_heading'>
                    <h3>Embark on this artistic</h3>
                    <h3>journey now - become a</h3>
                    <h3>CraftPartner</h3>
                </div>
                <div className='embark_content_right_paras'>
                    <p>Join the CraftPartner Program today and discover an</p>
                    <p>exclusive collection tailored for your larger spaces, offices,</p>
                    <p>hotels, and more.</p>
                </div>
                <div className='embark_content_right_input'>
                    <input type = "text" placeholder='Type your email'/>
                    <div className='embark_content_right_input_shop'>
                        <p>Shop Now</p>
                        <span><TfiArrowTopRight/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Embark