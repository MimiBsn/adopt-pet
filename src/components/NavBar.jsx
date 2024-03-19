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
            className={activeTab === "findPet" ? "active" : ""}
            onClick={() => handleTabClick("findPet")}
          >
            <Link to="/find-pet">Find Pet</Link>
          </li>
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
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
