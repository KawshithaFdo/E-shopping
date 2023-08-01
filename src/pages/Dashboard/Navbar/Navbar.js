import React from "react";
import "./Navbar.css";

const NavBar = ({ profile, cart, logout, user, back, AddItem }) => {
  const handleLogout = () => {
    console.log("Logged out");
    logout();
  };

  return (
    <div className="navbar">
      <div className="nav-items">
        {user && (
          <button onClick={() => back()}>
            <h2 className="nav-item">{user}</h2>
          </button>
        )}
        {cart && (
          <button className="nav-button" onClick={() => cart()}>
            Cart
          </button>
        )}
        {profile && (
          <button className="nav-button" onClick={() => profile()}>
            Profile
          </button>
        )}
        {AddItem && (
          <button className="nav-button" onClick={() => AddItem()}>
            Add Product
          </button>
        )}
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
