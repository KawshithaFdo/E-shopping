import React, { useState } from "react";
import "./SignupPage.css";
import axios from "axios";

const SignupPage = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const signup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        username: username,
        dob: dob,
        address: address,
        contact: contact,
        email: email,
        password: password,
      });
      setCurrentPage("login");
    } catch (error) {
      alert("Error");
      console.error("Error fetching data:", error);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handledobChange = (e) => {
    setDob(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="text" value={dob} onChange={handledobChange} required />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="contact"
            value={contact}
            onChange={handleContactChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
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
        <button type="submit" onClick={() => signup()}>
          Signup
        </button>
        <p className="login-signup-link">
          Already have an account?{" "}
          <span onClick={() => setCurrentPage("login")}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
