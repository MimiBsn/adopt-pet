import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import DahboardPage from "./pages/DahboardPage.jsx";
import AddPetForm from "./components/AddPetForm.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      {/* <DahboardPage /> */}
      <Footer />
      <Routes>
        <Route path="/rehome" element={<AddPetForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
