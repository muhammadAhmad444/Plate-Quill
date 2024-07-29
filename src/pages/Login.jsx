import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, rememberMe })
    });

    const data = await response.json();
    // Handle the response from the backend
    console.log(data);
  };

  return (
    <div className="login-container">
     <div className='login-sidebar'>
     <div className="login-form">
        <h1>LOG IN</h1>
        <form onSubmit={handleLogin}>
          <div className="input-container margin-bt">
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
          <button type="submit" className="login-button">LOGIN</button>
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
        <div className="signup">
          <a href="#">Sign up</a>
        </div>
      </div>
     </div>
      
      <div className="login-image"></div>
    </div>
  );
};

export default Login;
