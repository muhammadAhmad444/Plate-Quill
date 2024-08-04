import React from "react";
import { Link } from "react-router-dom";
import ProfileSection from "../components/Profile_components/ProfileSection";
import RecipesPosted from "../components/Profile_components/RecipesPosted_profile";
import Favourites from "../components/Profile_components/Favourites";

const ProfilePage = () => {
  return (
   <div>
        <ProfileSection/>
        <RecipesPosted/>
        <Favourites/>
        
   </div>
  );
};

export default ProfilePage;
