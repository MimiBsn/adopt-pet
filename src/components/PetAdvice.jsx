
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/dog.avif";
import image from "../assets/cute.avif";
import picture from "../assets/dog png.jpeg";
import pics from "../assets/french-bull.avif";


const adviceList = [
    {
      id:0,
      question:" 1. Have you obtained consent from the property owner?",
      answer:"If you're a tenant, it's essential to obtain approval from your landlord before introducing a pet into your rental property. Additionally, it's crucial to understand that even accommodations advertised as pet-friendly may impose limitations based on the type of pet, its weight, or breed. Furthermore, consider the duration of your lease and your long-term plans; if you relocate, you must ensure that your next residence also accommodates your pet.",  
    },
    {
        id:1,
        question:"2. It might be necessary to modify your timetable.",
        answer:"Diverse pets demand varying degrees of dedication and time, yet they all necessitate consistent attention and companionship, states Holly Sizemore, Chief Mission Officer at Best Friends Animal Society.",  
    },
    {
        id:2,
        question:"3. You'll always have company in the bathroom.",
        answer:"Your furry companion enjoys sleeping on the bed, joining you to watch your favorite shows, and offering companionship while you cook dinner. Therefore, it's common for them to want to be close to you even when you're attending to personal matters. ",  
    },
    {
        id:3,
        question:"4. Owning pets can incur significant costs",
        answer:"Some pet owners opt to purchase pet insurance to help cover unexpected veterinary costs. Pet insurance premiums vary depending on the coverage level and the pet's age, breed, and health.",  
    },
    {
        id:4,
        question:"5. Ensure your living space is conducive to pets.",
        answer:"Before bringing a pet into your home, it's essential to ensure that your living space is adequately prepared to guarantee the safety of your new companion. This includes making adjustments to your home, yard, and any fences you may have. Tasks such as securing furniture, storing cleaning supplies out of reach, repairing screens and doors, among other measures, are crucial steps in pet-proofing your home.",  
    },
    {
        id:5,
        question:"6. Creatures can serve as excellent companions.",
        answer:"Before bringing a pet into your home, it's essential to ensure that your living space is adequately prepared to guarantee the safety of your new companion. This includes making adjustments to your home, yard, and any fences you may have. Tasks such as securing furniture, storing cleaning supplies out of reach, repairing screens and doors, among other measures, are crucial steps in pet-proofing your home.",  
    },
]



export const PetAdvice = () => {
    const handleSubmit = ()=> {
        console.log('Button clicked');
    }
    const handleSliderPrev = () => {
        console.log("❮");
    }
    const handleSliderNext = () => {
        console.log("❯");
    }

  

    
    

  return (
    <>
     <h2 className='checklist'>
     Checklist for Pet Adoption: 10 Factors to Ponder Before Bringing a Pet Home.
    </h2>

    

    <div class="image-container">
            <button class="prev" onclick={handleSliderPrev}>▼</button>
            <img src={logo} alt="logo" width={300} height={300} className='image'/>
            <img src={image} alt="image" width={300} height={300} className='image' />
            <img src={picture} alt="picture" width={300} height={300} className='image' />
            <img src={pics} alt="picture" width={300} height={300} className='image' />
            <button class="next" onclick={handleSliderNext}>▲</button>
    </div>
     
    <section>
    <div className='advice' >
        <h2 className='text'>What should I consider before adopting a pet?</h2>
    </div>
  
       
        <div className='advice'>
            {adviceList.length > 1 && adviceList.map(({id, question, answer})=>(
                <div key={id} className="relative mb-2">
                <h5>
                    <label htmlFor={`collapse-${id}`} className="" >
                    <h2 className='question'>{question}</h2>   
                    </label>
                </h5>
                <input className="faq-toggler hidden" type="checkbox" name="" id={`collapse-${id}`} />
                <div
                    className="collapse-item"
                  >
                    <div>
                        <p className='answer'>{answer}</p> 
                    </div>
                  </div>
                  
                </div>
            ))}
        </div>
    </section>
    </>   
  )
}