import React from "react";
import "./UserProfile.css";
import DefaultUser from "../../assets/default_profile.png";
const UserProfile = ({ setCurrentPage, user }) => {
  const handleGoBack = () => {
    setCurrentPage("dashboard");
  };
  const dob = user.date_of_birth.split("T")[0];

  const userInfo = {
    name: user.username,
    dateOfBirth: dob,
    address: user.address,
    email: user.email,
    contacts: user.contact,
    profileImageUrl: DefaultUser,
  };

  return (
    <div className="user-profile-container">
      <div className="user-info">
        <h2>User Profile</h2>
        <button className="go-back-button" onClick={handleGoBack}>
          Go Back
        </button>
        <div className="profile-image">
          <img src={userInfo.profileImageUrl} alt="Profile" />
        </div>
        <div className="profile-section">
          <label>Name:</label>
          <span>{userInfo.name}</span>
        </div>
        <div className="profile-section">
          <label>Date of Birth:</label>
          <span>{userInfo.dateOfBirth}</span>
        </div>
        <div className="profile-section">
          <label>Address:</label>
          <span>{userInfo.address}</span>
        </div>
        <div className="profile-section">
          <label>Email:</label>
          <span>{userInfo.email}</span>
        </div>
        <div className="profile-section">
          <label>Contacts:</label>
          <span>{userInfo.contacts}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
