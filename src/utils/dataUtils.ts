import { Pet } from '../models/Pet';

const sampleData: Pet[] = [
    {
        id: '1',
        name: 'Goldie',
        category: 'dog',
        breed: 'Golden Retriever',
        age: 3,
        gender: 'male',
        imageURL: 'https://images.app.goo.gl/TK1TapsLcSwLwGAK6',
        description: 'Goldie is from the big apple! She is super friendly and adores the beach!',
        createdAt: new Date('2023-05-01'),
    },
];

export default sampleData;