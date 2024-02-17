import React from 'react';

const AnimalCard = ({ animal }) => {
  const { name, type, classe, diet, behavior, images } = animal;

  return (
    <div>
      <h2>{name}</h2>
      <p>Tipo: {type}</p>
      <p>Classe: {classe}</p>
      <p>Alimentação: {diet}</p>
      <p>Comportamento: {behavior}</p>
      {images && images.map((image) => (
        <img key={image} src={image} alt={name} />
      ))}
    </div>
  );
}

export default AnimalCard;