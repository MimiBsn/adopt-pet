import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PetCard } from "../components/PetCard";

export const DashboardPage = ({ pets, setPets }) => {
  const [ageFilter, setAgeFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  useEffect(() => {
    getPets();
  }, [ageFilter, typeFilter, countryFilter, searchQuery]);

  const getPets = async () => {
    try {
      let url = `${API_URL}/pets`;
      const queryParams = [];

      if (ageFilter) {
        queryParams.push(`pet_age=${ageFilter}`);
      }
      if (typeFilter) {
        queryParams.push(`species=${typeFilter}`);
      }
      if (countryFilter) {
        queryParams.push(`country=${countryFilter}`);
      }
      if (searchQuery) {
        queryParams.push(`q=${searchQuery}`);
      }

      if (queryParams.length > 0) {
        url += `?${queryParams.join("&")}`;
      }

      console.log(`url dashborad ${url}`);
      const response = await axios.get(url);
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!pets) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="first-content"></div>
      <h1 className="catch-phrase">
        Let's meet your next 4 legged best friend !
      </h1>

      <div className="filter-section">
        <h2>Choose Your Favorite Friend Now !</h2>
        <select
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
        >
          <option value="">All Ages</option>
          <option value="Puppy">Puppy</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Bird">Bird</option>
        </select>

        <select
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.selectedIndex)}
        >
          <option value="">All Countries</option>
          <option value="1">Germany</option>
          <option value="2">France</option>
        </select>

        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="dashboard-page">
        {pets.length > 1 &&
          pets.map((onePet) => {
            return (
              <Link key={onePet.id} to={`/pets/${onePet.id}`}>
                <PetCard
                  pets={pets}
                  setPets={setPets}
                  onePet={onePet}
                  petList={pets}
                  setPetList={setPets}
                />
              </Link>
            );
          })}
      </div>
    </>
  );
};
