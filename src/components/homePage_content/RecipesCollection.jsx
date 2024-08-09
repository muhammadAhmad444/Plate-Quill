import React from 'react';
import './RecipesCollection.css';

const RecipesCollection = () => {
  return (
    <div className="collections-container">
      <h1 className="collections-title">COLLECTIONS</h1>
      <div className="collections-grid">
        <div className="collection-item pancakes hoverable-component"></div>
        <div className="collection-item salad hoverable-component"></div>
        <div className="collection-item assorted-dishes hoverable-component"></div>
      </div>
    </div>
  );
};

export default RecipesCollection;
