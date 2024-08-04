import React from 'react';
import FilterSection from './FillterSection';

const Sidebar = ({ onFilterChange }) => {
  const cuisines = ["Italian", "Mexican", "Chinese", "Indian"];
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <FilterSection title="Cuisine" items={cuisines} onFilterChange={onFilterChange} />
      <FilterSection title="Meal Type" items={mealTypes} onFilterChange={onFilterChange} />
      {/* Add more FilterSection components as needed */}
    </div>
  );
};

export default Sidebar;
