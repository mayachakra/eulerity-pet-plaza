import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import PetGallery from '../components/Gallery';
import { petData } from '../hooks/petData';
import { Pet } from '../models/Pet';

const HomePage: React.FC = () => {
    const { petData, loading, error} = petData();
    const [ selectedPets, setSelectedPets ] = useState<Pet[]>([]);
    const [ sortOrder, setSortOrder ] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        //fetch data
    }, []);

    //add handle functions

    const sortedPetData = petData.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title); 
    });

    return (
        <div>
            <h1>Pet Plaza</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Uh Oh, there's an error: {error}</p>
            ) : (
                <PetGallery
                    pets={sortedPetData}
                />
            )}
        </div>
    );
};

export default HomePage;