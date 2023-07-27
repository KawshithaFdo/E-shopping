import React, { useState } from "react";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import CartScreen from "./pages/Cart/Cart";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "login":
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case "signup":
        return <SignupPage setCurrentPage={setCurrentPage} />;
      case "dashboard":
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case "profile":
        return <UserProfile setCurrentPage={setCurrentPage} />;
      case "cart":
        return <CartScreen setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
