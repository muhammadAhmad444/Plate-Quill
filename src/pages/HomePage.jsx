import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/hero_section/Hero_section";
import CravingsSection from "../components/homePage_content/CravingsSection";
import MoreRecipes from "../components/homePage_content/MoreRecipe";
import RecipesCollection from "../components/homePage_content/RecipesCollection";
import PopularRecipes from "../components/homePage_content/PopularRecipes";

const HomePage = () => {
  return (
   <div>

    <HeroSection/>
    <CravingsSection/>
    <MoreRecipes/>
    <RecipesCollection/>
    <PopularRecipes/>

   </div>
  );
};

export default HomePage;
