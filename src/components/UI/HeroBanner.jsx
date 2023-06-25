import React from 'react';
import HomeBanner from '../../assets/images/home-image.jpg'

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img src={HomeBanner} alt="Background" className="banner-image" />
      <div className="banner-overlay">
        <div className="hero-text">
          <h1>Welcome to Our Symptom Checker</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;