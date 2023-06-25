import React from 'react';
import '../../styles/UI/Layout.css';
import HomeBanner from '../../assets/images/home-image.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-banner">
        <img src={HomeBanner} alt="Background" className="banner-image" />
      <div className="banner-overlay">
      <div className="hero-text">
        <h1>Welcome to Our Symptom Checker</h1>
      </div>
      </div>
      
      </div>
      <div className="home-info-container">
        <div className="cards-container">
          <div className="card">
            <h2>Welcome to Our Symptom Checker</h2>
            <p>
              Are you feeling unwell or experiencing unusual symptoms? Our Symptom Checker is here to help you identify
              potential causes and guide you towards appropriate next steps. Whether you're dealing with a common ailment
              or a more complex condition, our tool provides reliable information to assist you in understanding your
              symptoms.
            </p>
          </div>
          <div className="card">
            <h2>Empowering Self-Care</h2>
            <p>
              Our goal is to empower you to make informed decisions about your health. The Symptom Checker is designed to
              provide educational information and guidance, but it is not a substitute for professional medical advice.
              Always consult with a qualified healthcare provider for a proper diagnosis and personalized treatment plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
