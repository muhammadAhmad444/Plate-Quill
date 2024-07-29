import React from 'react';
import './RecipesCollection.css';

const RecipesCollection = () => {
  return (
    <div className="collections-container">
      <h1 className="collections-title">COLLECTIONS</h1>
      <div className="collections-grid">
        <div className="collection-item pancakes"></div>
        <div className="collection-item salad"></div>
        <div className="collection-item assorted-dishes"></div>
      </div>
    </div>
  );
};

export default RecipesCollection;
