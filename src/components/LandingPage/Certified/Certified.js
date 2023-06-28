import React from 'react';
import "./certified.css"
import { TfiArrowTopRight } from 'react-icons/tfi';

const Certified = () => {
    return (
        <div className='certified'>
            <div className='certified_content'>
                <h3>CraftIndika Certified ©</h3>
                <div>
                    <p>CraftIndika prides itself on being India's premier institution, ensuring product authentication and ownership for an</p>
                    <p>array of art and handicraft items via our dedicated Ownership Module.</p>
                </div>
                <div className='certified_content_button'>
                    <p>Shop Now</p>
                    <span><TfiArrowTopRight /></span>
                </div>
            </div>
        </div>
    )
}

export default Certified