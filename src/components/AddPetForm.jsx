import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPetForm = () => {
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [primaryBreed, setPrimaryBreed] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [purebred, setPurebred] = useState("");
  const [petAge, setPetAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [actQuickly, setActQuickly] = useState("");
  const [hairLength, setHairLength] = useState("");
  const [species, setSpecies] = useState("");
  const [color, setColor] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");

  const handleThumbnailChange = (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("file", file);
    formData.append("upload_preset", "luxmtkpk");
    const uploadImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/doceqzmuk/image/upload",
          formData
        );
        console.log(response.data.url);
        setThumbnail(response.data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    uploadImage();
  };

  const handleChange = (e) => {
    const { name, value, selectedIndex } = e.target;
    switch (name) {
      case "petName":
        setPetName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "sex":
        setSex(value);
        break;
      case "size":
        setSize(value);
        break;
      case "primaryBreed":
        setPrimaryBreed(value);
        break;
      case "purebred":
        setPurebred(value);
        break;
      case "petAge":
        setPetAge(value);
        break;
      case "country":
        setCountry(selectedIndex);
        break;
      case "city":
        setCity(selectedIndex);
        break;
      case "actQuickly":
        setActQuickly(value);
        break;
      case "hairLength":
        setHairLength(value);
        break;
      case "species":
        setSpecies(value);
        break;
      case "color":
        setColor(value);
        break;
      case "specialNeeds":
        setSpecialNeeds(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to hold the form data
    const petData = {
      sex: sex,
      purebred: purebred,
      pet_age: petAge,
      size: size,
      country: country,
      city: city,
      act_quickly: actQuickly,
      hair_length: hairLength,
      species: species,
      pet_name: petName,
      color: color,
      age: age,
      special_needs: specialNeeds,
      primary_breed: primaryBreed,
      thumbnail: thumbnail,
    };

    console.log({ petData });
    try {
      const response = await axios.post("http://localhost:5001/pets", petData);

      console.log("Pet added successfully:", response.data);
    } catch (error) {
      console.error("There was a problem adding the pet:", error);
    }

    // Clear the form
    setPetName("");
    setAge("");
    setSex("");
    setSize("");
    setPrimaryBreed("");
    setThumbnail(null);
    setPurebred("");
    setPetAge("");
    setCountry("");
    setCity("");
    setActQuickly("");
    setHairLength("");
    setSpecies("");
    setColor("");
    setSpecialNeeds("");
  };

  return (
    <div className="add-pet-form-container">
      <h2>Add Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pet Name:</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={petName}
            className="form-input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="petAge">Pet Age:</label>
          <select
            id="petAge"
            name="petAge"
            value={petAge}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select pet age</option>
            <option value={"Puppy"}>Puppy</option>
            <option value={"Young"}>Young</option>
            <option value={"Adult"}>Adult</option>
            <option value={"Senior"}>Senior</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Sex:</label>
          <input
            type="radio"
            id="male"
            name="sex"
            value="Male"
            onChange={handleChange}
            checked={sex === "Male"}
            required
            className="form-input"
          />
          <label>Male</label>
          <input
            type="radio"
            id="female"
            name="sex"
            value="Female"
            onChange={handleChange}
            checked={sex === "Female"}
            required
            className="form-input"
          />
          <label>Female</label>
        </div>

        <div className="form-group">
          <label>Size:</label>
          <select
            id="size"
            name="size"
            value={size}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label>primaryBreed:</label>
          <input
            type="text"
            id="primaryBreed"
            name="primaryBreed"
            value={primaryBreed}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Profile Image:</label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={handleThumbnailChange}
            accept="image/*"
            required
            className="form-input"
          />
          {thumbnail && (
            <img
              src={thumbnail}
              alt="Thumbnail"
              style={{ maxWidth: "100px", maxHeight: "100px", margin: "5px" }}
            />
          )}
        </div>
        <div className="form-group">
          <label>Purebred:</label>
          <input
            type="radio"
            id="purebredYes"
            name="purebred"
            value="Yes"
            onChange={handleChange}
            checked={purebred === "Yes"}
            required
            className="form-input"
          />
          <label>Yes</label>
          <input
            type="radio"
            id="purebredNo"
            name="purebred"
            value="No"
            onChange={handleChange}
            checked={purebred === "No"}
            required
            className="form-input"
          />
          <label>No</label>
        </div>
        <div className="form-group">
          <label>Act Quickly:</label>
          <input
            type="radio"
            id="actQuicklyYes"
            name="actQuickly"
            value="Yes"
            onChange={handleChange}
            checked={actQuickly === "Yes"}
            required
            className="form-input"
          />
          <label>Yes</label>
          <input
            type="radio"
            id="actQuicklyNo"
            name="actQuickly"
            value="No"
            onChange={handleChange}
            checked={actQuickly === "No"}
            required
            className="form-input"
          />
          <label>No</label>
        </div>
        <div className="form-group">
          <label>Hair Length:</label>
          <input
            type="radio"
            id="hairLengthYes"
            name="hairLength"
            value="Short"
            onChange={handleChange}
            checked={hairLength === "Short"}
            required
            className="form-input"
          />
          <label>Short</label>
          <input
            type="radio"
            id="hairLengthNo"
            name="hairLength"
            value="Long"
            onChange={handleChange}
            checked={hairLength === "Long"}
            required
            className="form-input"
          />
          <label>Long</label>
        </div>

        <div className="form-group">
          <label htmlFor="species">Species:</label>
          <select
            id="species"
            name="species"
            value={species}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select species</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Bird">Bird</option>
          </select>
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Special Needs:</label>
          <input
            type="text"
            id="specialNeeds"
            name="specialNeeds"
            value={specialNeeds}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select Country</option>
            <option value="1">Germany</option>
            <option value="2">France</option>
          </select>
        </div>

        {country == "1" && (
          <div className="form-group">
            <label>City:</label>
            <select
              id="city"
              name="city"
              value={city}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select City</option>
              <option value="1">Berlin</option>
              <option value="2">Munich</option>
              <option value="3">Frankfurt</option>
              <option value="4">Hamburg</option>
            </select>
          </div>
        )}
        {country == "2" && (
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <select
              id="city"
              name="city"
              value={city}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select City</option>
              <option value="1">Paris</option>
              <option value="2">Lyon</option>
              <option value="3">Marseille</option>
              <option value="4">Bordeaux</option>
            </select>
          </div>
        )}
        <button type="submit" className="submit-button">
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
