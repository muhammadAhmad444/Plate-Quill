import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, rememberMe })
    });

    const data = await response.json();
    // Handle the response from the backend
    console.log(data);
  };

  return (
    <div className="signup-container">
      <div className='signup-sidebar'>
        <div className="signup-form">
          <h1>SIGN UP</h1>
          <form onSubmit={handleSignUp}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me?
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="signup-button">SIGN UP</button>
          </form>
          <div className="social-login">
            <div className='social-or'>
              <img src="public/Line 2.png" alt="line" />
              <span>or</span>
              <img src="public/Line 2.png" alt="line" />
            </div>
            <div className='social-login-btn'>
              <button className="social-button google"><img src="public/google-icon.png" alt="google" /></button>
              <button className="social-button facebook"><img src="public/facebook-icon.png" alt="facebook" /></button>
            </div>
          </div>
          <div className="login">
            <a href="#">Log In</a>
          </div>
        </div>
      </div>
      <div className="signup-image"></div>
    </div>
  );
};

export default SignUp;
