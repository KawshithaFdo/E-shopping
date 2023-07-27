import React from "react";
import "./Navbar.css";

const NavBar = ({ profile, cart, logout }) => {
  const handleLogout = () => {
    // Implement the logout functionality here...
    console.log("Logged out");
    logout();
  };

  return (
    <div className="navbar">
      <div className="nav-items">
        <button className="nav-button" onClick={() => cart()}>
          Cart
        </button>
        <button className="nav-button" onClick={() => profile()}>
          Profile
        </button>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavBar;
