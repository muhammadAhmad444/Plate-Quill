// src/components/CravingsSection.jsx

import React from 'react';
import './CravingsSection.css';

const CravingsSection = () => {
  const dishes = [
    { name: 'Chicken Pasta', image: '/chiken-pasta.png' },
    { name: 'Chicken Pizza', image: 'public/Chiken-pizza.png' },
    { name: 'Tomato Basil Soup', image: '/tomato-basil-soup.png' },
    { name: 'Paneer Butter Masala', image: '/paneer-butter-masala.png' },
  ];

  return (
    <div className="cravings-section">
      <h2>WHAT WE'RE CRAVING</h2>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <div key={index} className="dish hoverable-component">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CravingsSection;


