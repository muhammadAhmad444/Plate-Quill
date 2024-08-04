// src/App.js
import React, { useState } from "react";
import Sidebar from "../components/recipesPage/SidebarShop";
import RecipeList from "../components/recipesPage/RecipeList";
import recipes from "../components/recipesPage/recipes"; // Assuming the recipe data is in a separate file
import "./RecipeShop.css"


const RecipesPage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleFilterChange = (filters) => {
    // Implement filtering logic here based on the filters applied
    // For now, let's just set the filtered recipes to all recipes
    setFilteredRecipes(recipes);
  };

  return (
    <div className="RecipeShop">
      <Sidebar onFilterChange={handleFilterChange} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default RecipesPage;
