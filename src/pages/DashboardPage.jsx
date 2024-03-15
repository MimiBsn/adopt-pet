import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const DashboardPage = ({ pets, setPets }) => {
  useEffect(() => {
    const getPets = async () => {
      try {
        const response = await axios.get("http://localhost:5001/pets");
        console.log(response.data);
        setPets(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPets();
  }, []);

  if (!pets) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="first-content"></div>
      <div className="dashboard-page">
        {pets.length > 1 &&
          pets.map((onePet) => {
            return (
              <Link key={onePet.id} to={`/pets/${onePet.id}`}>
                <div className="pet-card">
                  <img src={onePet.thumbnail} alt={onePet.pet_name} />
                  <h2>{onePet.pet_name}</h2>
                  <p>Breed : {onePet.primary_breed}</p>
                  <p>Age : {onePet.pet_age}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
