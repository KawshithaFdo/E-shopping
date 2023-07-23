import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add authentication logic
    // For now, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p className="login-signup-link">
          Don't have an account?{' '}
          <span onClick={() => setCurrentPage('signup')}>Signup</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
