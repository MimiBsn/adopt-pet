import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo.png";
import Login from "./Login";
import Signup from "./SignUp";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("adopt");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupnModal, setShowSignupnModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignupnModal(!showSignupnModal);
  };

  const toggleModal = () => {
    setShowLoginModal(false);
    setShowSignupnModal(false);
  };

  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <nav>
        <ul>
          <li
            className={activeTab === "adopt" ? "active" : ""}
            onClick={() => handleTabClick("adopt")}
          >
            <Link to="/adopt">Adopt a Pet</Link>
          </li>
          <li
            className={activeTab === "petAdvice" ? "active" : ""}
            onClick={() => handleTabClick("petAdvice")}
          >
            <Link to="/pet-advice">Pet Advice</Link>
          </li>
          <li
            className={activeTab === "rehome" ? "active" : ""}
            onClick={() => handleTabClick("rehome")}
          >
            <Link to="/rehome">Rehome</Link>
          </li>
          <li
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleTabClick("about")}
          >
            <Link to="/about">About </Link>
          </li>
          <div className="login-signup-buttons">
            <button className="login-button" onClick={toggleLoginModal}>
              Login
            </button>
            <button className="signup-button" onClick={toggleSignUpModal}>
              Sign Up
            </button>
          </div>
        </ul>
      </nav>
      {showLoginModal && <Login toggleModal={toggleModal} />}{" "}
      {showSignupnModal && <Signup toggleModal={toggleModal} />}{" "}
    </div>
  );
};

export default NavBar;
