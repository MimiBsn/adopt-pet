import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { PetDetailsPage } from "./pages/PetDetailsPage";
import { UpdatePetPage } from "./pages/UpdatePetPage";

function App() {
  const [pets, setPets] = useState();

  return (
    <>
      <NavBar />
      <BrowserRouter>
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
            element={<UpdatePetPage pets={pets} setPets={setPets} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
