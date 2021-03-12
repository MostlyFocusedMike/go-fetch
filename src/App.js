import { useEffect, useState } from 'react';
import './App.css';
import getRandomName from './get-random-name';
import DogCard from './DogCard';

const RANDOM_DOG_URL = 'https://dog.ceo/api/breeds/image/random';

function App() {
    const [favoriteDogs, setFavoriteDogs] = useState([])
    const [randomDog, setRandomDog ] = useState(null);

    useEffect(() => {
        loadRandomDog();
    }, [])

    const loadRandomDog = () => {
        fetch(RANDOM_DOG_URL)
            .then(r => r.json())
            .then(dog => setRandomDog({ name: getRandomName(), url: dog.message }));
    }

    const addToFavorites = () => {
        setFavoriteDogs([...favoriteDogs, randomDog])
    }

    return (
        <div className="App">
            <h1>Go Fetch!</h1>
            <button onClick={loadRandomDog}>Find New Dog</button>
            {
                randomDog &&
                <div id='random-dog'>
                    <img src={randomDog.url} alt="Good Dog"></img>
                    <h2>{randomDog.name}</h2>
                </div>
            }
            <button onClick={addToFavorites}>Save That Dog!</button>
            <hr />
            <h1>All My Favorite Dogs</h1>
            <ul id='all dogs'>
                {
                    favoriteDogs.length ?
                    favoriteDogs.map(({ name, url }) => {
                        return <li key={url}>
                            <DogCard name={name} pictureUrl={url} />
                        </li>
                    })
                    : null
                }
            </ul>
        </div>
    );
}

export default App;
