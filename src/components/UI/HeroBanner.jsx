import React from 'react';
import HomeBanner from '../../assets/images/home-image.jpg';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="banner-overlay">
        <div className="hero-text">
          <h1>MEDI<span>SENSE</span></h1>
        </div>
      </div>
      <img src={HomeBanner} alt="Background" className="banner-image" />
    </div>
  );
}

export default HeroBanner;
