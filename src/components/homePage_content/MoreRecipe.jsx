// src/components/MoreReipe.jsx

import React from 'react';
import './MoreRecipe.css';

const MoreRecipes = () => {
  const dishes = [
    { name: 'Quick & Easy', image: 'public/Quick & Easy.png' },
    { name: 'Healthy', image: 'public/healty-recipes.png' },
    { name: 'BBQ', image: 'public/BBQ.png' },
    { name: 'Deserts', image: 'public/Deserts.png' },
    { name: 'Vegetarian', image: 'public/Vegetarian.png' },
  ];

  return (
    <div className="more-recipes-section">
      <h2>MORE RECIPES</h2>
      <div className="recipes-gallary">
        {dishes.map((dish, index) => (
          <div key={index} className="more-recipes-gallary hoverable-component">
            <img src={dish.image} alt={dish.name} className="recipes-gallary-image" />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreRecipes;
