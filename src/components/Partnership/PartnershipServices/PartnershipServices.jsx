import React from 'react';
import "./partnershipservices.css";
import Lottie from 'react-lottie';
import Fade from 'react-reveal/Fade';

// Icons import
import Shop from "../../../images/services/shop.json"
import Business from "../../../images/services/business.json"
import Mandala from "../../../images/services/mandala.json"
import Footprint from "../../../images/services/footprint.json"
import Legal from "../../../images/services/legal.json"
import Logistic from "../../../images/services/Logistic.json"


const PartnershipServices = () => {
  return (
    <div className='partnershipservices'>
      <div className='partnershipservices_header'>
        <p>OFFERINGS</p>
        <h1>What do we cater?</h1>
      </div>
      <div className='partnershipservices_services'>
        <Fade top>
        <div className='partnershipservices_services_single'>
        <span>
          <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Mandala,
                renderer: 'svg'
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3>Incredible Artisanal</h3>
            <h3>Creations</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
        <span>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Legal,
                renderer: 'svg'
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3>Legitimately Handcrafted</h3>
            <h3>Masterpieces</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
        <span>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Business,
                renderer: 'svg'
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3>Seamless Business</h3>
            <h3>Execution</h3>
          </div>
        </div>
        </Fade>
        <Fade bottom>
        <div className='partnershipservices_services_single'>
        <span>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Logistic,
                renderer: 'svg'
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3>Exceptional Fulfilment</h3>
            <h3>Excellence</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
        <span>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Footprint,
                renderer: 'svg'
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3>Peerless Digital</h3>
            <h3>Footprint</h3>
          </div>
        </div>
        <div className='partnershipservices_services_single'>
        <span>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Shop,
                renderer: 'svg'
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3>Advance Experience</h3>
            <h3>Centre</h3>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default PartnershipServices