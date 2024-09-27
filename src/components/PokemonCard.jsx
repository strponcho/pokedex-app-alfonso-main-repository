import React from 'react';
import BaseStats from './BaseStats';
import Header from './Header';
import ImageContainer from './ImageContainer';

function PokemonCard({ pokemonData }) {
  const { name, id, imageUrl, types, weight, height, stats } = pokemonData;

  return (
    <div className="card">
      <Header name={name} id={id} />
      <ImageContainer imageUrl={imageUrl} />
      <div className="poke-info">
        <div className="types-container">
          {types.map(type => (
            <div key={type} className={`type ${type}`}>{type}</div>
          ))}
        </div>
        <div className="basics-info">
          <div>Peso: {weight}</div>
          <div>Altura: {height}</div>
        </div>
        <BaseStats stats={stats} />
      </div>
    </div>
  );
}

export default PokemonCard;

