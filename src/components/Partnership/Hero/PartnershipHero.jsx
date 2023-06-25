import React, { useEffect, useState } from 'react';
import './partnershiphero.css';

const PartnershipHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className={`partnership_hero ${showContent ? 'show' : ''}`}>
      <nav className={`partnership_hero_nav ${isMenuOpen ? 'open' : ''}`}>
        <div className='partnership_hero_nav_logo'>
          <h3>CRAFTINDIKA ©</h3>
        </div>
        <div className='menu_button' onClick={handleMenuToggle}>
          <div className={`menu_icon ${isMenuOpen ? 'open' : ''}`}>
            <span style={{ transform: isMenuOpen ? 'translateY(8px)' : 'translateY(0)', transformOrigin: 'top' }}></span>
            <span style={{ transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)', opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? 'translateY(-8px)' : 'translateY(0)', transformOrigin: 'bottom' }}></span>
          </div>
        </div>
        <ul className={`menu_items ${isMenuOpen ? 'open' : ''}`}>
          <li>Company</li>
          <li>Collections</li>
          <li>Curations</li>
          <li>CraftPartner</li>
          <li>Connect</li>
        </ul>
      </nav>
      <div className={`partnership_hero_heading ${showContent ? 'show' : ''}`}>
        <h1>
          CraftPartner<span> ©</span>
        </h1>
        <h1>Program</h1>
      </div>
    </div>
  );
};

export default PartnershipHero;
