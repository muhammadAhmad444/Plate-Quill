import React from 'react';
import './PopularRecipes.css';

const PopularRecipes = () => {
  return (
    <div className="recipes-container">
      <div className='recipes-title-content'>
      <h1 className="recipes-title">The Most Popular Recipes on CookBook Right Now</h1>
      <a href="#" className="recipes-link">View Complete Guide</a>
      </div>
     
      <div className="recipes-grid">
        <div className="recipes-item">
          <div className="recipes-image garlic-bread"></div>
          <p className="recipes-description">"Garlic bread: A comforting slice of heaven."</p>
        </div>
        <div className="recipes-item">
          <div className="recipes-image chocolate-pudding"></div>
          <p className="recipes-description">"Chocolate pudding: A rich, velvety delight that satisfies any sweet craving."</p>
        </div>
        <div className="recipes-item">
          <div className="recipes-image shrimp-noodles"></div>
          <p className="recipes-description">"Shrimp noodles: A savory seafood twist to noodle perfection."</p>
        </div>
      </div>
     
    </div>
  );
};

export default PopularRecipes;
