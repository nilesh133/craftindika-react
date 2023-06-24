import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import "./certificate.css";

//import logos
import certificate_logo1 from "../../../images/Certificate-logo/logo1.png";
import certificate_logo2 from "../../../images/Certificate-logo/logo2.png";
import certificate_logo3 from "../../../images/Certificate-logo/logo3.png";
import certificate_logo4 from "../../../images/Certificate-logo/logo4.png";


const Certificate = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id="certificate-section">
        <div className="certificates">
            <div className="certificate-item">
            <Fade left>
                <img src={certificate_logo1} />
            </Fade>
            </div>
            <div className="certificate-item">
                <img src={isMobile ? certificate_logo4 : certificate_logo2} />
            </div>
            <div className="certificate-item">
            <Fade right>
                <img src={certificate_logo3} />
            </Fade>
            </div>           
        </div>
    </section>
  )
}

export default Certificate