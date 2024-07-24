import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h2 className='footer_aboutUs'>About Us</h2>
          <p className='footer_aboutUs_para'>
            Our mission at CookBook is to make everyday cooking fun, because we believe that cooking is key to a happier and healthier life for people, communities, and the planet. We empower homecooks all over the world to help each other by sharing recipes and cooking tips.
          </p>
          <div className="app-buttons">
            <a href="#"><img src="public/Apple store.png" alt="App Store" /></a>
            <a href="#"><img src="public/Google play.png" alt="Google Play" /></a>
          </div>
        </div>
        <div className="learn-more">
          <h2>Learn More</h2>
          <ul>
            <li><a href="#">CookBook Community</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className="social-icons">
            <a href="#"><img src="public/Instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="public/Facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="public/Pinterest.png" alt="Pinterest" /></a>
            <a href="#"><img src="public/Twitter.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer-vegetables">
        <img src="vegetables.png" alt="Vegetables" />
      </div>
    </footer>
  );
};

export default Footer;

