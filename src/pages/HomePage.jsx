import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/hero_section/Hero_section";
import CravingsSection from "../components/homePage_content/CravingsSection";
import MoreRecipes from "../components/homePage_content/MoreRecipe";
import RecipesCollection from "../components/homePage_content/RecipesCollection";
import PopularRecipes from "../components/homePage_content/PopularRecipes";

const HomePage = () => {
  // const [user, setUser] = useState([]);

  // fetch data
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);
  // console.log(user, "user");
  return (
    <div>
      <HeroSection />
      <CravingsSection />
      <MoreRecipes />
      <RecipesCollection />
      <PopularRecipes />
      {/* {user ? (
        user.map((us) => <p key={us.id}>{us.title}</p>)
      ) : (
        <p style={{paddingBlock:"40px"}}>loading...</p>
      )} */}
    </div>
  );
};

export default HomePage;
































// To create this dynamically in React, you'll need to set up a component structure that includes a sidebar for filters and a main section for displaying the recipes. The recipes data will be passed as props or fetched from an API. Here’s a basic structure to get you started:

// Create the Recipe Data:
// Let's assume we have a JSON file or an array of recipe objects.
// js
// Copy code
// const recipes = [
//   { id: 1, title: "Chicken Pasta", author: "Thomas Devon", image: "chicken_pasta.jpg", rating: 4 },
//   { id: 2, title: "Raspberry Pastry", author: "Jessy", image: "raspberry_pastry.jpg", rating: 5 },
//   // ... add more recipes
// ];
// App Component:
// This will be the main component where we'll include the Sidebar and RecipeList components.
// jsx
// Copy code
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import RecipeList from './RecipeList';
// import recipes from './recipes'; // Assuming the recipe data is in a separate file

// const App = () => {
//   const [filteredRecipes, setFilteredRecipes] = useState(recipes);

//   const handleFilterChange = (filters) => {
//     // Implement filtering logic here based on the filters applied
//     // For now, let's just set the filtered recipes to all recipes
//     setFilteredRecipes(recipes);
//   };

//   return (
//     <div className="app">
//       <Sidebar onFilterChange={handleFilterChange} />
//       <RecipeList recipes={filteredRecipes} />
//     </div>
//   );
// };

// export default App;
// Sidebar Component:
// This component will handle the filters.
// jsx
// Copy code
// import React from 'react';

// const Sidebar = ({ onFilterChange }) => {
//   const handleFilterChange = (e) => {
//     // Gather all filter values and pass them to the parent component
//     onFilterChange(/* filter values */);
//   };

//   return (
//     <div className="sidebar">
//       <h3>Filters</h3>
//       {/* Render filter options here */}
//       <div>
//         <h4>Cuisine</h4>
//         <ul>
//           <li><input type="checkbox" onChange={handleFilterChange} /> Italian</li>
//           <li><input type="checkbox" onChange={handleFilterChange} /> Mexican</li>
//           {/* ... add more cuisines */}
//         </ul>
//       </div>
//       {/* Add more filter categories similarly */}
//     </div>
//   );
// };

// export default Sidebar;
// RecipeList Component:
// This component will display the list of recipes.
// jsx
// Copy code
// import React from 'react';
// import RecipeCard from './RecipeCard';

// const RecipeList = ({ recipes }) => {
//   return (
//     <div className="recipe-list">
//       {recipes.map(recipe => (
//         <RecipeCard key={recipe.id} recipe={recipe} />
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
// RecipeCard Component:
// This component will display individual recipe details.
// jsx
// Copy code
// import React from 'react';

// const RecipeCard = ({ recipe }) => {
//   return (
//     <div className="recipe-card">
//       <img src={recipe.image} alt={recipe.title} />
//       <h4>{recipe.title}</h4>
//       <p>by {recipe.author}</p>
//       <div className="rating">
//         {'★'.repeat(recipe.rating) + '☆'.repeat(5 - recipe.rating)}
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;
// CSS:
// Add the necessary CSS to style the components.
// css
// Copy code
// /* Add styles for the components */

// .app {
//   display: flex;
// }

// .sidebar {
//   width: 250px;
//   padding: 10px;
//   border-right: 1px solid #ddd;
// }

// .recipe-list {
//   flex: 1;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 20px;
// }

// .recipe-card {
//   width: 200px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   overflow: hidden;
//   text-align: center;
// }

// .recipe-card img {
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
// }

// .recipe-card h4 {
//   margin: 10px 0;
// }

// .rating {
//   margin: 10px 0;
//   color: #ff9800;
// }
// This structure provides a basic setup. You'll need to expand the filtering logic in the Sidebar component and adjust the styling to match your design. Also, if you're fetching data from an API, you should use a library like Axios or the Fetch API to get the data and manage it with state hooks in the App component.






