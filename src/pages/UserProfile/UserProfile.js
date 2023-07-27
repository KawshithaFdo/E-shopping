import React from "react";
import "./UserProfile.css";
import { useHistory } from "react-router-dom";

const UserProfile = ({ setCurrentPage }) => {
  const handleGoBack = () => {
    setCurrentPage("dashboard");
  };

  // Dummy user data
  const user = {
    name: "John Doe",
    dateOfBirth: "1985-07-15",
    address: "123 Main Street, City",
    email: "john.doe@example.com",
    contacts: "123-456-7890",
    // Add more fields for other user information
    profileImageUrl: "https://dummyimage.com/200x200/ccc/fff", // Dummy profile image URL
  };

  return (
    <div className="user-profile-container">
      <div className="user-info">
        <h2>User Profile</h2>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back
        </button>
        <div className="profile-image">
          <img src={user.profileImageUrl} alt="Profile" />
        </div>
        <div className="profile-section">
          <label>Name:</label>
          <span>{user.name}</span>
        </div>
        <div className="profile-section">
          <label>Date of Birth:</label>
          <span>{user.dateOfBirth}</span>
        </div>
        <div className="profile-section">
          <label>Address:</label>
          <span>{user.address}</span>
        </div>
        <div className="profile-section">
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className="profile-section">
          <label>Contacts:</label>
          <span>{user.contacts}</span>
        </div>
        {/* Add more fields for other information */}
      </div>
    </div>
  );
};

export default UserProfile;
