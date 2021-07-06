import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import CustomCard from './components/CustomCard'
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    handleRequestToAPI();
  }, []);

  async function handleRequestToAPI(){
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
      const {name, sprites: { other }, abilities} = await response.json();
      const {dream_world: {front_default}} = other;

      const currentPokemon = {
        name,
        abilities,
        image: front_default
      }

      setPokemon(currentPokemon);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="App">
      <NavBar />
      <div className='containerCard'> 
        <CustomCard name={pokemon.name} abilities={pokemon.abilities} image={pokemon.image}/>
      </div>
    </div>
  );
}

export default App;
