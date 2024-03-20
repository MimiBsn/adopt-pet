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
    if (confirm("Are you sure ?")) {
      axios
        .delete(`http://localhost:5001/pets/${petId}`)
        .then((response) => {
          console.log(`Deleted with ID ${petId}`);
        })
        .catch((err) => {
          console.log(err);
        });
      nav("/");
    }
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

        const getCountry = await axios.get(
          `http://localhost:5001/country/${id}`
        );
        setCountry(getCountry.data.name);

        const countryId = ourOnePet.data.city;

        const getCity = await axios.get(
          `http://localhost:5001/cities/${countryId}`
        );

        setCity(getCity.data.name);
      } catch (err) {
        console.log(err);
      }
    };
    getOnePets();
  }, [petId]);

  function adoptFees() {
    if (pets.species === "Dog") {
      return "250€";
    } else {
      return "200€";
    }
  }

  if (!pets) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="petDetailPage">
      <div className="details-card">
        <h1>Hello I'm {pets.pet_name} !</h1>
        <div className="img-infobox">
          <img src={pets.thumbnail} alt={pets.pet_name} />
          <div className="info-box">
            <h2>
              Cared for by <strong>IronHack Ranch Animal Rescue</strong>
            </h2>
            <h4>Adoption process</h4>
            <ol>
              <li>Submit application</li>
              <li>Meet the pet</li>
              <li>Home check</li>
            </ol>
            <h4>Adoption fee : {adoptFees()}</h4>
            <p>
              This helps <strong>IronHack Ranch Rescue</strong> with pet care
              costs.
            </p>
            <button>Get to know me ?</button>
          </div>
        </div>
        <div className="pet-table">
          <h3>My informations</h3>
          <table className="pet-info">
            <tbody>
              <tr>
                <th>Breed</th>
                <td>{pets.primary_breed}</td>
                <th>Purebred</th>
                <td>{pets.purebred}</td>
              </tr>
              <tr>
                <th>Age </th>
                <td>{!pets.age ? pets.pet_age : pets.age} year old</td>
                <th>Hair length </th>
                <td>{pets.hair_length}</td>
              </tr>
              <tr>
                <th>Sex </th>
                <td>{pets.sex}</td>
                <th>I'm from</th>
                <td>{country}</td>
              </tr>
              <tr>
                <th>Size </th>
                <td>{pets.size}</td>
                <th>I live in</th>
                <td>{city}</td>
              </tr>
              <tr>
                <th>Color </th>
                <td>{pets.color}</td>
                <th>I'm needy </th>
                <td>{pets.special_needs}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pet-story">
          <h3>My story</h3>
          <p>{pets.story}</p>
        </div>
        <div className="end-page-btn">
          <Link to={`/pets/updatepet/${pets.id}`}>
            <button>Update informations</button>
          </Link>
          <button onClick={handleDelete}>Delete pet informations</button>
          <button onClick={handleBack}>Return home</button>
        </div>
      </div>
    </div>
  );
};
