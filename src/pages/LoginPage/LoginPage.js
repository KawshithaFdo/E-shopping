import React, { useState } from "react";
import "./LoginPage.css";
import axios from "axios";

const LoginPage = ({ setCurrentPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        username: username,
        password: password,
      });
      setCurrentPage("dashboard");
    } catch (error) {
      alert(error);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="username"
            value={username}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" onClick={() => login()}>
          Login
        </button>
        <p className="login-signup-link">
          Don't have an account?{" "}
          <span onClick={() => setCurrentPage("signup")}>Signup</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
