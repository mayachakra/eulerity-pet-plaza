import { useState, useEffect } from 'react';
import { Pet } from '../models/Pet';
//import sampleData from '../utils/dataUtils';

const petData = (samplePetData: Pet[]) => {
    const [pets, setPets] = useState<Pet[]>(samplePetData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setPets(samplePetData);
    }, [samplePetData]);

    return { pets, isLoading, error };
};

export default petData;
