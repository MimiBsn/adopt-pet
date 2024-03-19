import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo.png";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("adopt");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
