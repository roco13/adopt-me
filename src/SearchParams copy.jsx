import { useState, useEffect } from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    //const location = "Seatle, WA";
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [""];

    useEffect( () => {
        requestPets()
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
            );
            const json = await res.json();
            setPets(json.pets);
    }
    
    return (
        <div className="search-params">
            <form onSubmit={ e => {
                e.preventDefault();
                requestPets();
                }}>
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }} 
                        id="animal" 
                        value={animal} 
                        placeholder="animal"
                    >
                        <option />
                        {ANIMALS.map( animal => <option key="animal" value={animal}>{animal}</option>)}
                    
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                        onChange={(e) => setBreed(e.target.value)} 
                        id="breed" 
                        value={breed} 
                        placeholder="breed"
                        disabled={breeds.length === 0}
                    >
                        <option />
                        {breeds.map( breed => <option key="breed" value={breed}>{breed}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {pets.map( pet => {
                <Pet 
                name={pet.name}
                animal={pet.animal}
                breed={pet.breed}
                key={pet.id}
                />
            })}
        </div>
    )
}
export default SearchParams;