import React from 'react';
import { Pet } from '../models/Pet';

interface PetCardProperty{
    pet: Pet;
}

const PetCard: React.FC<PetCardProperty> = ({ pet }) => {
    return (
        <div>
            <h2>{pet.name}</h2>
            <img src={pet.imageURL} alt={pet.name}/>
            <p>{pet.description}</p>
            <p>Category: {pet.category}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender}</p>
            <p>Created At: {pet.createdAt.toDateString()}</p>
        </div>
    );
};

export default PetCard;