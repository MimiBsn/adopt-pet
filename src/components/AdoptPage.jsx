import React from 'react';
import { Link } from 'react-router-dom';
import AddPetForm from './AddPetForm';
import pics from "../assets/cute-pet.jpeg";


export default function AdoptPage() {
    const handleSubmit = () => {
        console.log("button clicked")
    }

  return (
    <>
    <h2 className='adopt-text'>How to Adopt a Pet</h2>
        <img src={pics} alt={pics} width={400} height={400} className='adopt-logo'/>
    <div>
        <h3 className='first-text'>Finding a new home for your pet should be a smooth and stress-free process for both you and your furry friend. Our Experts will assist you in rehoming your pet directly from your caring home to another.</h3>
    </div>

    <div>
        <h3 className='para-text'>1. Determine what sort of pet are you able to adopt..</h3>
    </div>

    <div>
    <p className='find-text'>Arguably the most crucial aspect of the adoption process is determining the type of cat you're interested in and capable of adopting. Are you considering a young kitten, a fully grown cat, or perhaps a senior feline? Would you be willing to adopt a cat with special needs who might otherwise struggle to find a home? </p>
    </div>

    <div>
        <h3 className='para-text'>2. Review Applications</h3>
    </div>

    <div>
        <p className='find-text'>The committed team at Rehome will provide you with comprehensive assistance in choosing the most suitable potential adopters.</p>
    </div>

    <div>
        <h3 className='para-text'>3. Meet Adopters</h3>
    </div>
    <div>
        <p className='find-text'>The Rehome team will assist you in arranging secure and stress-free meetings with potential applicants.</p>
    </div>
    <div>
        <h3 className='para-text'>4. Finalize Adoption</h3>
    </div>
    <div>
        <p className='find-text'>Rehome will furnish you with a transfer of ownership template to use with your adopter, which will form the basis of the adoption process.</p>
    </div>

    <div>
        <Link to="/rehome">
        <button type='submit' onClick={handleSubmit} className='button'>Get Started</button>
        </Link>
    </div> 
    </>
  )
}