// src/components/HeroSection.jsx

import React from 'react';
import './Hero_section.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
     
      <div className="hero-content">
        <div className="search-bar">
          <input type="text" placeholder="Search recipes..." />
          <button>
            <img src='public/iconamoon_search-light.svg' alt="Search" />
          </button>
        </div>
        <div>
          <div>
            <button className='primary_button'>ADD RECIPE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;