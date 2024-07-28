// src/components/MoreReipe.jsx

import React from 'react';
import './MoreRecipe.css';

const MoreRecipes = () => {
  const dishes = [
    { name: 'Chicken Pasta', image: '/chiken-pasta.png' },
    { name: 'Chicken Pizza', image: 'public/Chiken-pizza.png' },
    { name: 'Tomato Basil Soup', image: '/tomato-basil-soup.png' },
    { name: 'Paneer Butter Masala', image: '/paneer-butter-masala.png' },
    { name: 'Paneer Butter Masala', image: '/paneer-butter-masala.png' },
  ];

  return (
    <div className="more-recipes-section">
      <h2>WHAT WE'RE CRAVING</h2>
      <div className="recipes-gallary">
        {dishes.map((dish, index) => (
          <div key={index} className="dish">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreRecipes;
