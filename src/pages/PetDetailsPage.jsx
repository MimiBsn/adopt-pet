import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const PetDetailsPage = ({ pets, setPets }) => {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [pet, setPet] = useState(pets);

  const { petId } = useParams();
  const nav = useNavigate();
  const handleBack = () => {
    nav("/");
  };

  const handleDelete = () => {
    if (confirm("Are you sure ?")) {
      axios
        .delete(`${API_URL}/pets/${petId}`)
        .then((response) => {
          axios.get(`${API_URL}/pets`).then((response) => {
            setPets(response.data);
          });
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
        const ourOnePet = await axios.get(`${API_URL}/pets/${petId}`);
        console.log("first console log", ourOnePet.data);
        setPet(ourOnePet.data);
        const id = ourOnePet.data.country;

        const getCountry = await axios.get(`${API_URL}/country/${id}`);
        setCountry(getCountry.data.name);

        const countryId = ourOnePet.data.city;

        const getCity = await axios.get(`${API_URL}/cities/${countryId}`);

        setCity(getCity.data.name);
      } catch (err) {
        console.log(err);
      }
    };
    getOnePets();
  }, [petId]);

  function adoptFees() {
    if (pet.species === "Dog") {
      return "250€";
    } else {
      return "200€";
    }
  }

  if (!pet) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="petDetailPage">
      <div className="details-card">
        <h1>Hello I'm {pet.pet_name} !</h1>
        <div className="img-infobox">
          <img src={pet.thumbnail} alt={pet.pet_name} />
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
                <td>{pet.primary_breed}</td>
                <th>Purebred</th>
                <td>{pet.purebred}</td>
              </tr>
              <tr>
                <th>Age </th>
                <td>{!pet.age ? pet.pet_age : pet.age} year old</td>
                <th>Hair length </th>
                <td>{pet.hair_length}</td>
              </tr>
              <tr>
                <th>Sex </th>
                <td>{pet.sex}</td>
                <th>I'm from</th>
                <td>{country}</td>
              </tr>
              <tr>
                <th>Size </th>
                <td>{pet.size}</td>
                <th>I live in</th>
                <td>{city}</td>
              </tr>
              <tr>
                <th>Color </th>
                <td>{pet.color}</td>
                <th>I'm needy </th>
                <td>{pet.special_needs}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pet-story">
          <h3>My story</h3>
          <p>{pet.story}</p>
        </div>
        <div className="end-page-btn">
          <Link to={`/pets/updatepet/${pet.id}`}>
            <button>Update informations</button>
          </Link>
          <button onClick={handleDelete}>Delete pet informations</button>
          <button onClick={handleBack}>Return home</button>
        </div>
      </div>
    </div>
  );
};
