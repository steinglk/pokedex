import { useEffect, useState } from 'react';
import {useLocalStorage} from 'react-use';
import NavBar from './components/NavBar'
import CustomCard from './components/CustomCard'
import SearchItem from './components/SearchItem'
import CustomAlert from './components/CustomAlert'
import './App.css';

function App() {
  const [cacheSearch, setCacheSearch, removeCacheSearch] = useLocalStorage('pokemonSearch', []);
  const [pokemon, setPokemon] = useState({});
  const [searchPokemon, setSearchPokemon] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleRequestToAPI();
  }, []);

  useEffect(() => {
    saveInCache();
  }, [pokemon]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  },[open]);

  function checkInCache() {
    return cacheSearch.find(item => item.name === searchPokemon.toLocaleLowerCase);
  }

  function saveInCache() {
    setCacheSearch([...cacheSearch, pokemon]);
  }

  async function handleFindPokemon() {
    const result = checkInCache();
    if(result) {
      return setPokemon(result);
    }
    await handleRequestToAPI();
  }

  async function handleRequestToAPI(){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon || 'pikachu'}`);
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
      setOpen(true);
    }

  }


  return (
    <div className="App">
      <NavBar />
      <div className='containerCard'> 
        <CustomCard name={pokemon.name} 
        abilities={pokemon.abilities} 
        image={pokemon.image}/>
        <SearchItem searchPokemon={searchPokemon} 
        setSearchPokemon={setSearchPokemon} 
        handleFindPokemon={handleFindPokemon}/>
      </div>
      {open && <CustomAlert />}
    </div>
  );
}

export default App;
