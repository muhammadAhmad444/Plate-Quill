import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/hero_section/Hero_section";
import CravingsSection from "../components/homePage_content/CravingsSection";
import MoreRecipes from "../components/homePage_content/MoreRecipe";

const HomePage = () => {
  return (
   <div>

    <HeroSection/>
    <CravingsSection/>
    <MoreRecipes/>

   </div>
  );
};

export default HomePage;
