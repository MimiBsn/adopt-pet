import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddPetForm from "./AddPetForm";
import pics from "../assets/cute-pet.jpeg";

export default function AdoptPage() {
  const nav = useNavigate();
  const handleBack = () => {
    nav("/");
  };
  return (
    <>
      <h1 className="adopt-text">How to Adopt a Pet</h1>
      <img
        src={
          "https://images.unsplash.com/photo-1557495235-340eb888a9fb?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={pics}
        width={600}
        // height={400}
        className="adopt-logo"
      />
      <div>
        <h3 className="first-text">
          Finding a new home for your pet should be a smooth and stress-free
          process for both you and your furry friend. Our Experts will assist
          you in rehoming your pet directly from your caring home to another.
        </h3>
      </div>

      <div>
        <h3 className="para-text">
          1. Determine what sort of pet are you able to adopt..
        </h3>
      </div>

      <div>
        <p className="find-text">
          Arguably the most crucial aspect of the adoption process is
          determining the type of cat you're interested in and capable of
          adopting. Are you considering a young kitten, a fully grown cat, or
          perhaps a senior feline? Would you be willing to adopt a cat with
          special needs who might otherwise struggle to find a home?{" "}
        </p>
      </div>

      <div>
        <h3 className="para-text">2. Review Applications</h3>
      </div>

      <div>
        <p className="find-text">
          The committed team at Rehome will provide you with comprehensive
          assistance in choosing the most suitable potential adopters.
        </p>
      </div>

      <div>
        <h3 className="para-text">3. Meet Adopters</h3>
      </div>
      <div>
        <p className="find-text">
          The Rehome team will assist you in arranging secure and stress-free
          meetings with potential applicants.
        </p>
      </div>
      <div>
        <h3 className="para-text">4. Finalize Adoption</h3>
      </div>
      <div>
        <p className="find-text">
          Rehome will furnish you with a transfer of ownership template to use
          with your adopter, which will form the basis of the adoption process.
        </p>
      </div>

      <div>
        <button type="submit" onClick={handleBack} className="button">
          Get Started
        </button>
      </div>
    </>
  );
}
