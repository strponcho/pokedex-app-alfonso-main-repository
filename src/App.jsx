import React, { useState } from 'react';
import Finder from './components/Finder';
import PokemonCard from './components/PokemonCard';
import './styles.css'; 

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setError(null); // Limpiar error previo
    setPokemonData(null); // Limpiar datos previos

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      const formattedData = {
        name: data.name,
        id: `#${data.id}`,
        imageUrl: data.sprites.other['official-artwork'].front_default,
        types: data.types.map(typeInfo => typeInfo.type.name),
        weight: `${data.weight / 10} kg`,
        height: `${data.height / 10} m`,
        stats: {
          HP: data.stats[0].base_stat,
          ATK: data.stats[1].base_stat,
          DEF: data.stats[2].base_stat,
          SATK: data.stats[3].base_stat,
          SDEF: data.stats[4].base_stat,
          SPD: data.stats[5].base_stat,
        }
      };
      setPokemonData(formattedData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <Finder onSearch={handleSearch} />
      {error ? (
        <p>{error}</p>
      ) : pokemonData ? (
        <PokemonCard pokemonData={pokemonData} />
      ) : (
        <p>Escribe el nombre o ID de un Pokémon</p>
      )}
    </div>
  );
}

export default App;

