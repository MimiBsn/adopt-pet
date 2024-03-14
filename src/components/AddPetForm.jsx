import React, { useState } from "react";

const AddPetForm = () => {
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [size, setSize] = useState("");
  const [breed, setBreed] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [purebred, setPurebred] = useState("");
  const [petAge, setPetAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [actQuickly, setActQuickly] = useState("");
  const [hairLength, setHairLength] = useState("");
  const [species, setSpecies] = useState("");
  const [color, setColor] = useState("");
  const [specialNeeds, setSpecialNeeds] = useState("");

  const handleChange = (e) => {
    const { name, value, type, selectedIndex } = e.target;
    switch (name) {
      case "petName":
        setPetName(value);
        break;
      case "age":
        setAge(Number(value));
        break;
      case "sex":
        console.log(value);
        setSex(value === "0" ? 0 : 1);
        break;
      case "size":
        setSize(selectedIndex);
        break;
      case "breed":
        setBreed(value);
        break;
      case "thumbnail":
        setThumbnail(e.target.files[0]);
        break;
      case "images":
        setImages([...e.target.files]);
        break;
      case "purebred":
        setPurebred(value === "0" ? 0 : 1);
        break;
      case "petAge":
        setPetAge(selectedIndex);
        break;
      case "country":
        setCountry(selectedIndex);
        break;
      case "city":
        setCity(selectedIndex);
        break;
      case "actQuickly":
        setActQuickly(value === "0" ? 0 : 1);
        break;
      case "hairLength":
        setHairLength(value === "0" ? 0 : 1);
        break;
      case "species":
        setSpecies(selectedIndex);
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
      petName: petName,
      age: age,
      sex: sex,
      size: size,
      breed: breed,
      thumbnail: thumbnail,
      images: images,
      purebred: purebred,
      petAge: petAge,
      country: country,
      city: city,
      actQuickly: actQuickly,
      hairLength: hairLength,
      species: species,
      color: color,
      specialNeeds: specialNeeds,
    };

    console.log({ petData });
    // try {
    //   const response = await axios.post("http://localhost:5001/pets", petData);

    //   console.log("Pet added successfully:", response.data);
    // } catch (error) {
    //   console.error("There was a problem adding the pet:", error);
    // }

    // Clear the form
    // setPetName("");
    // setAge("");
    // setSex("");
    // setSize("");
    // setBreed("");
    // setThumbnail(null);
    // setImages([]);
    // setPurebred("");
    // setPetAge("");
    // setCountry("");
    // setCity("");
    // setActQuickly("");
    // setHairLength("");
    // setSpecies("");
    // setColor("");
    // setSpecialNeeds("");
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
            <option value={1}>Puppy</option>
            <option value={2}>Young</option>
            <option value={3}>Adult</option>
            <option value={4}>Senior</option>
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
            value="0"
            onChange={handleChange}
            checked={sex === 0}
            required
            className="form-input"
          />
          <label>Male</label>
          <input
            type="radio"
            id="female"
            name="sex"
            value="1"
            onChange={handleChange}
            checked={sex === 1}
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
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label>Primary Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={breed}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Thumbnail:</label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={handleChange}
            accept="image/*"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
            accept="image/*"
            multiple
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Purebred:</label>
          <input
            type="radio"
            id="purebredYes"
            name="purebred"
            value="0"
            onChange={handleChange}
            checked={purebred === 0}
            required
            className="form-input"
          />
          <label>Yes</label>
          <input
            type="radio"
            id="purebredNo"
            name="purebred"
            value="1"
            onChange={handleChange}
            checked={purebred === 1}
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
            value="0"
            onChange={handleChange}
            checked={actQuickly === 0}
            required
            className="form-input"
          />
          <label>Yes</label>
          <input
            type="radio"
            id="actQuicklyNo"
            name="actQuickly"
            value="1"
            onChange={handleChange}
            checked={actQuickly === 1}
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
            value="0"
            onChange={handleChange}
            checked={hairLength === 0}
            required
            className="form-input"
          />
          <label>Yes</label>
          <input
            type="radio"
            id="hairLengthNo"
            name="hairLength"
            value="1"
            onChange={handleChange}
            checked={hairLength === 1}
            required
            className="form-input"
          />
          <label>No</label>
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
            <option value="1">Cat</option>
            <option value="2">Dog</option>
            <option value="3">Bird</option>
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
