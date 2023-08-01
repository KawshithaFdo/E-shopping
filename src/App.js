import React, { useState } from "react";
import HomePage from "./pages/Homepage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import CartScreen from "./pages/Cart/Cart";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            user={user}
          />
        );
      case "login":
        return (
          <LoginPage
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            setAdmin={setAdmin}
            user={user}
          />
        );
      case "signup":
        return (
          <SignupPage
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            user={user}
          />
        );
      case "dashboard":
        return (
          <Dashboard
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            user={user}
          />
        );
      case "profile":
        return (
          <UserProfile
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            user={user}
          />
        );
      case "cart":
        return (
          <CartScreen
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            user={user}
          />
        );
      case "adminDashboard":
        return (
          <AdminDashboard
            setCurrentPage={setCurrentPage}
            setAdmin={setAdmin}
            admin={admin}
          />
        );
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setUser={setUser}
            user={user}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
