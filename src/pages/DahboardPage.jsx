import React from "react";
import { useEffect } from "react";
import axios from "axios";

const DahboardPage = () => {
  useEffect(() => {
    const getOnePets = async () => {
      const petId = 9;
      try {
        const ourOnePet = await axios.get(
          `http://localhost:5001/pets/${petId}`
        );
        console.log("first console log", ourOnePet.data);
        //setPets(ourOnePet.data);
        const id = ourOnePet.data.country;

        console.log(`iddddds for country ${id}`);

        const getCountry = await axios.get(
          `http://localhost:5001/country/${id}`
        );
        console.log(`response from coutry ${getCountry.data.name}`);
        //setCountry(getCountry.data.name);

        const cityId = ourOnePet.data.city;
        console.log("this is our city", cityId);

        const getCity = await axios.get(
          `http://localhost:5001/cities/${cityId}`
        );
        console.log(`response from city ${getCity.data.name}`);
        //  setCity(getCity.data.name);
      } catch (err) {
        console.log(err);
      }
    };
    getOnePets();
  }, []);

  return <div>DahboardPage</div>;
};

export default DahboardPage;
