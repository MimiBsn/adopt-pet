import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const PetDetailsPage = ({ pets, setPets }) => {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const { petId } = useParams();
  const nav = useNavigate();
  const handleBack = () => {
    nav("/");
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5001/pets/${petId}`)
      .then((response) => {
        console.log(`Deleted with ID ${petId}`);
      })
      .catch((err) => {
        console.log(err);
      });
    nav("/");
  };

  useEffect(() => {
    const getOnePets = async () => {
      try {
        const ourOnePet = await axios.get(
          `http://localhost:5001/pets/${petId}`
        );
        console.log("first console log", ourOnePet.data);
        setPets(ourOnePet.data);
        const id = ourOnePet.data.country;

        console.log(`iddddds for country ${id}`);

        const getCountry = await axios.get(
          `http://localhost:5001/country/${id}`
        );
        console.log(`response from coutry ${getCountry.data.name}`);
        setCountry(getCountry.data.name);

        const countryId = ourOnePet.data.city;
        console.log("this is our city", countryId);

        const getCity = await axios.get(
          `http://localhost:5001/cities/${countryId}`
        );
        console.log(`response from city ${getCity.data.name}`);
        setCity(getCity.data.name);
      } catch (err) {
        console.log(err);
      }
    };
    getOnePets();
  }, [petId]);

  if (!pets) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="petDetailPage">
        <h1>Hello I'm {pets.pet_name} !</h1>
        <img src={pets.thumbnail} alt={pets.pet_name} />
        <table>
          <tbody>
            <tr>
              <th>{pets.species} breed</th>
              <td>{pets.primary_breed}</td>
              <th>Country</th>
              <td>{country}</td>
            </tr>
            <tr>
              <th>Age </th>
              <td>{!pets.age ? pets.pet_age : pets.age}</td>
              <th>City</th>
              <td>{city}</td>
            </tr>
            <tr>
              <th>Sex </th>
              <td>{pets.sex}</td>
              <th>Purebred</th>
              <td>{pets.purebred}</td>
            </tr>
            <tr>
              <th>Size </th>
              <td>{pets.size}</td>
            </tr>
            <tr>
              <th>Hair length </th>
              <td>{pets.hair_length}</td>
            </tr>
            <tr>
              <th>Special needs </th>
              <td>{pets.special_needs}</td>
            </tr>
          </tbody>
        </table>
        <Link to={`/pets/updatepet/${pets.id}`}>
          <button>Update informations</button>
        </Link>
        <button onClick={handleDelete}>Delete pet informations</button>
        <button onClick={handleBack}>Return home</button>
      </div>
    </>
  );
};
