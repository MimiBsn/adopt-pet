export const PetCard = ({ pets, setPets, onePet }) => {
  return (
    <div className="pet-card">
      <img src={onePet.thumbnail} alt={onePet.pet_name} />
      <h2>{onePet.pet_name}</h2>
      <p>Breed : {onePet.primary_breed}</p>
      <p>Age : {onePet.pet_age}</p>
    </div>
  );
};
