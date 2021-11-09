import React from 'react';

const CharItem = ({ name, gender, hair, mass, height }) => {
  return (
    <div>
      <h1> Name: {name}</h1>
      <p> Gender: {gender}</p>
      <p>Hair Color: {hair}</p>
      <p>Mass: {mass}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default CharItem;
