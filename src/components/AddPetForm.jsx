import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

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
  const nav = useNavigate();

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
    const { name, value, selectedIndex, options } = e.target;
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
        console.log(`country ${selectedIndex}`);
        setCity("");
        break;
      case "city":
        const selectedIndex = options.selectedIndex;
        setCity(options[selectedIndex].value);
        console.log(`city ${options[selectedIndex].value}`);
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
      // setPetId(response.data.id);
      nav(`/pets/${response.data.id}`);
      console.log("this is petId", petId);
      console.log("this is response.data.id", response.data.id);
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

    //nav(`/pets/${petId}`);
  };

  return (
    <div className="add-pet-form-container p-8">
      <h2 className="text-2xl mb-4">Add Pet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="petName">Pet Name:</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={petName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        {/* Other form inputs */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
