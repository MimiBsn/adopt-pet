import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import AddPetForm from "./components/AddPetForm.jsx";
import { Route, Routes } from "react-router-dom";
import { PetDetailsPage } from "./pages/PetDetailsPage";
import { UpdatePetPage } from "./pages/UpdatePetPage";
import { DashboardPage } from "./pages/DashboardPage";
import UpdatePetForm from "./components/UpdatePetForm.jsx";

function App() {
  const [pets, setPets] = useState();

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<DashboardPage pets={pets} setPets={setPets} />}
        />
        <Route
          path="/pets/:petId"
          element={<PetDetailsPage pets={pets} setPets={setPets} />}
        />
        <Route
          path="/pets/updatepet/:petId"
          element={<UpdatePetForm pets={pets} setPets={setPets} />}
        />
        <Route path="/rehome" element={<AddPetForm />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
