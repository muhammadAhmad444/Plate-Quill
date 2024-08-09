import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return <div className="navBar">

    <nav className="navbar">
    <Link to="/">
    <div className="navbar-logo">
        <img src="public/Logo.png" alt="Logo" />
      </div>
    </Link>
     
      <div className="navbar-links">
        <Link to="/signup" className="navbar-link">Sign Up</Link>

        <Link to="/login" className="navbar-link">Login</Link>

        <Link to="/RecipeInfo" className="navbar-link">Recipe Info</Link>

        <Link to="/RecipeShop" className="navbar-link">Shop</Link>

        <Link to="/ProfilePage" className="navbar-link">
        <div className="">
        <img src="public/iconoir_profile-circle.png" alt="Logo" />
        </div>

        </Link>

        <Link to="/SelectCategoryPage" className="navbar-link">

        <div className="">
        <img src="public/ph_plus.png" alt="add new recipe" />
      </div>

        </Link>

      </div>
    </nav>

  </div>;
};

export default Navbar;
