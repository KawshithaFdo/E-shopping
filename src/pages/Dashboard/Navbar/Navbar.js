import React from "react";
import "./Navbar.css";

const NavBar = ({ profile, cart, logout, user, back }) => {
  const handleLogout = () => {
    console.log("Logged out");
    logout();
  };

  return (
    <div className="navbar">
      <div className="nav-items">
        <button onClick={() => back()}>
          <h2 className="nav-item">{user}</h2>
        </button>
        <button className="nav-button" onClick={() => cart()}>
          Cart
        </button>
        <button className="nav-button" onClick={() => profile()}>
          Profile
        </button>
      </div>
      {logout && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default NavBar;
