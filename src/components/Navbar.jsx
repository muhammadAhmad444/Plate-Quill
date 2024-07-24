import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <div className="navBar">

    <nav className="navbar">
      <div className="navbar-logo">
        <img src="public/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/signup" className="navbar-link">Sign Up</Link>
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </nav>

  </div>;
};

export default Navbar;
