import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </form>
    </div>
  );
};

export default Login;
