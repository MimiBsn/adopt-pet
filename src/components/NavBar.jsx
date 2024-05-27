import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Login from "./Login";
import Signup from "./SignUp";
import ProfileIcon from "../assets/ProfileIcon.png";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("adopt");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for tracking login status

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignupModal(!showSignupModal);
  };

  const toggleModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setIsLoggedIn(true);
    console.log(`islogin ${isLoggedIn}`);
  };

  // const handleLogin = () => {
  //   // Logic for handling successful login
  //   setIsLoggedIn(true);
  //   toggleModal();
  //   console.log(`islogin ${isLoggedIn}`);
  // };

  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <nav>
        <ul>
          <li></li>
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
            <Link to="/about">About</Link>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          {isLoggedIn ? (
            <li>
              <img src={ProfileIcon} className="profileIcon" />
            </li>
          ) : (
            <>
              <button className="login-button" onClick={toggleLoginModal}>
                Login
              </button>
              <button className="signup-button" onClick={toggleSignUpModal}>
                Sign Up
              </button>
            </>
          )}
        </ul>
      </nav>
      {showLoginModal && <Login toggleModal={toggleModal} />}{" "}
      {showSignupModal && <Signup toggleModal={toggleModal} />}{" "}
    </div>
  );
};

export default NavBar;
