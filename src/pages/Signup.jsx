import React from "react";

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </form>
    </div>
  );
};

export default Signup;
