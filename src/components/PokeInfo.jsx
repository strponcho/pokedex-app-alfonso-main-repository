import React from 'react';

const PokemonInfo = ({ types, weight, height }) => {
  return (
    <div className="poke-info">
      <div className="types-container">
        {types.map(type => (
          <div className={`type ${type.toLowerCase()}`} key={type}>{type}</div>
        ))}
      </div>
      <div className="basics-info">
        <div>Peso: {weight}</div>
        <div>Altura: {height}</div>
      </div>
    </div>
  );
};

export default PokemonInfo;
