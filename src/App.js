import { useEffect, useState } from 'react';
import './App.css';
import getRandomName from './get-random-name';
import DogCard from './DogCard';

// Hit this url and you will recieve the data shaped like this:
// {
//     "message": "https://images.dog.ceo/breeds/papillon/n02086910_3455.jpg",
//     "status": "success"
// }
// The image url changes every time you hit the endpoint
const RANDOM_DOG_URL = 'https://dog.ceo/api/breeds/image/random';

function App() {
    return (
        <div className="App">
            <h1>Go Fetch!</h1>
        </div>
    );
}

export default App;
