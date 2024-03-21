import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import AddPetForm from "./components/AddPetForm.jsx";
import { Route, Routes } from "react-router-dom";
import { PetDetailsPage } from "./pages/PetDetailsPage";
import { DashboardPage } from "./pages/DashboardPage";
import UpdatePetForm from "./components/UpdatePetForm.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { About } from "./components/About.jsx";
import { PetAdvice } from "./components/PetAdvice.jsx";
import AdoptPage from "./components/AdoptPage.jsx";

function App() {
  const [pets, setPets] = useState(null);

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
        <Route path="/pet-advice" element={<PetAdvice />}></Route>

        <Route path="/adopt" element={<AdoptPage />}></Route>
        <Route
          path="/pets/updatepet/:petId"
          element={<UpdatePetForm pets={pets} setPets={setPets} />}
        />
        <Route path="/rehome" element={<AddPetForm />}></Route>

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
