import React, { useState } from "react";
import AddPetForm from "../components/AddPetForm";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("adopt");
  const [subTab, setSubTab] = useState("findAPet");

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === "adopt") {
      setSubTab("findAPet");
    } else if (tab === "rehome") {
      setSubTab("howToRehome");
    }
  };

  const handleSubTabClick = (tab) => {
    setSubTab(tab);
  };

  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li
            className={activeTab === "adopt" ? "active" : ""}
            onClick={() => handleTabClick("adopt")}
          >
            Adopt
          </li>
          <li
            className={activeTab === "rehome" ? "active" : ""}
            onClick={() => handleTabClick("rehome")}
          >
            Rehome
          </li>
        </ul>
      </nav>
      <div className="sub-tabs">
        {activeTab === "adopt" && (
          <ul>
            <li
              className={subTab === "findAPet" ? "active" : ""}
              onClick={() => handleSubTabClick("findAPet")}
            >
              Find a Pet
            </li>
            <li
              className={subTab === "howToAdopt" ? "active" : ""}
              onClick={() => handleSubTabClick("howToAdopt")}
            >
              How to Adopt
            </li>
            <li
              className={subTab === "petAdvice" ? "active" : ""}
              onClick={() => handleSubTabClick("petAdvice")}
            >
              Pet Advice
            </li>
          </ul>
        )}
        {activeTab === "rehome" && (
          <ul>
            <li
              className={subTab === "howToRehome" ? "active" : ""}
              onClick={() => handleSubTabClick("howToRehome")}
            >
              How to Rehome
            </li>
            <li
              className={subTab === "rehomeAdvice" ? "active" : ""}
              onClick={() => handleSubTabClick("rehomeAdvice")}
            >
              Rehome Advice
            </li>
          </ul>
        )}
      </div>
      <div className="tab-content">
        {activeTab === "rehome" ? <AddPetForm /> : null}
      </div>
    </div>
  );
};

export default NavBar;
