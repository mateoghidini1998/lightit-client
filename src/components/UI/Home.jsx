import React from 'react';
import '../../styles/UI/Layout.css';
import HeroBanner from './HeroBanner';
import InfoCard from './InfoCard';

function Home() {
  return (
    <div className="home-container">
      <HeroBanner/>
      <div className="home-info-container">
        <div className="cards-container">
          <InfoCard
              title="Welcome to Our Symptom Checker"
              description="Are you feeling unwell or experiencing unusual symptoms? Our Symptom Checker is here to help you identify potential causes and guide you towards appropriate next steps. Whether you're dealing with a common ailment or a more complex condition, our tool provides reliable information to assist you in understanding your symptoms."
            />
          <InfoCard
              title="Empowering Self-Care"
              description="Our goal is to empower you to make informed decisions about your health. The Symptom Checker is designed to provide educational information and guidance, but it is not a substitute for professional medical advice. Always consult with a qualified healthcare provider for a proper diagnosis and personalized treatment plan."
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
