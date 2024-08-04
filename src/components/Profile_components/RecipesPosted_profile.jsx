// src/components/RecipesPosted_prifle

import React from 'react';
import './RecipesPosted_profile.css';

const RecipesPosted = () => {
  const dishes = [
    { name: 'Egg Sandwitch', image: 'public/Egg Sandwitch.png' },
    { name: 'Watermelon Mojito', image: 'public/Watermelon Mojito.png' },
    { name: 'Pasta', image: 'public/Pasta.png'},
    
  ];

  return (
    <div className="cravings-section">
      <h2>Recipes Posted</h2>
      <div className="dishes recipesPosted-gallary">
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

export default RecipesPosted;
