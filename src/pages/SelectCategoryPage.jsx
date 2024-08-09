import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/SelectCategory/CategoryList.css';

const categories = [
  'Quick & Easy',
  'Healthy',
  'Vegetarian',
  'Soup',
  'Pasta & Noodles',
  'Curry',
  'Appetizers',
  'Lunch',
  'Dinner',
  'Other',
];

const SelectCategoryPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/RecipeUploadPage', { state: { category } });
  };

  return (
    <div className="select-category">
      <h1>Select a Category</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category} className="category-item" onClick={() => handleCategoryClick(category)}>
            {category} <span>&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectCategoryPage;
