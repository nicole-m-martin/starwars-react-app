import React from 'react';
import CharItem from './CharItem';
import style from '../Characters/Characters.module.css';
import PropTypes from 'prop-types';

const CharList = ({ chars }) => {
  // Calculate the average Height using reduce!
  let charHeight = chars
    .filter(function (char) {
      return char.height !== 'unknown';
    })
    .map(function (char) {
      return char.height;
    });

  const averageHeight = charHeight.reduce((average, height, index, array) => {
    return Math.ceil(average + height / array.length);
  }, 0);

  // Calculate the average Mass using reduce!
  let charMass = chars
    .filter(function (char) {
      return char.mass !== 'unknown';
    })
    .map(function (char) {
      return char.mass;
    });

  const averageMass = charMass.reduce((average, mass, index, array) => {
    return Math.ceil(average + mass / array.length);
  }, 0);

  // Sort order function - Realized this only sorts Characters on each page (1-10), I need to figure out a recursive function to get all data AND then sort characters on whole app.
  const orderedChars = chars.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section className={style.charCardGrid}>
        <ul>
          {orderedChars.map(({ name, gender, hair, mass, height }) => (
            <li style={{ listStyle: 'none' }} key={name}>
              <CharItem
                name={name}
                gender={gender}
                hair={hair}
                mass={mass}
                height={height}
              />
            </li>
          ))}
        </ul>
        <div className={style.spanDiv}>
          <span className={style.ave}>Average Height: {averageHeight} </span>
          <span className={style.ave}>Average Mass: {averageMass} </span>
        </div>
      </section>
    </>
  );
};

export default CharList;

CharList.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  hair: PropTypes.string,
  mass: PropTypes.string,
  height: PropTypes.string,
};
