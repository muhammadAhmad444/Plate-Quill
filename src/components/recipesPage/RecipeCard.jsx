// src/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h4>{recipe.title}</h4>
      <p>by {recipe.author}</p>
      <div className="rating">
        {'★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating)}
      </div>
    </div>
  );
};

export default RecipeCard;