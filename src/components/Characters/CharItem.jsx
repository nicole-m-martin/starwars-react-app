import React from 'react';
import style from '../Characters/Characters.module.css';
import PropTypes from 'prop-types';

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

CharItem.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hair: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
