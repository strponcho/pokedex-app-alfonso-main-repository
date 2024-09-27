import React, { useState } from 'react';

function Finder({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm); // Llama a la función de búsqueda
      setSearchTerm(''); // Limpiar el input después de la búsqueda
    }
  };

  return (
    <form onSubmit={handleSubmit} className="finder-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar Pokémon por nombre o ID"
        className="finder-input"
      />
      <button type="submit" className="finder-button">Buscar</button>
    </form>
  );
}

export default Finder;
