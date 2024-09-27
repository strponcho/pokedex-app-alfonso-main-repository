import React from 'react';

const ImageContainer = ({ imageUrl }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt="Pokémon" width="200" />
    </div>
  );
};

export default ImageContainer;
