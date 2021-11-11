import React from 'react';
import style from '../Characters/Characters.module.css';

const CharItem = ({ name, gender, hair, mass, height }) => {
  return (
    <div className={style.charCard}>
      <h1>{name}</h1>
      <p>Gender: {gender}</p>
      <p>Hair Color: {hair}</p>
      <p>Mass: {mass}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default CharItem;
