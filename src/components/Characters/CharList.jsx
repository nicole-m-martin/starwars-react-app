import React from 'react';
import CharItem from './CharItem';
import style from '../Characters/Characters.module.css';
import PropTypes from 'prop-types';

const CharList = ({ chars, searchTerm }) => {
  // Calculate the average Height using reduce!
  const charHeight = chars.map((char) => {
    return `${char.height}`;
  });

  const averageHeight = charHeight.reduce((average, height, index, array) => {
    return average + height / array.length;
  }, 0);

  // Calculate the average Mass using reduce!
  const charMass = chars.map((char) => {
    return `${char.mass}`;
  });

  const averageMass = charMass.reduce((average, mass, index, array) => {
    return average + mass / array.length;
  }, 0);

  // Sort order function - Realized this only sorts Characters on each page (1-10), I need to figure out a recursive function to get all data AND then sort characters on whole app.
  const orderedChars = chars.sort((a, b) => a.name.localeCompare(b.name));

  // Converts all names to lowercase for search
  const filteredChars = orderedChars.filter((char) => {
    return char.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <section className={style.charCardGrid}>
        <ul>
          {filteredChars.map((char) => (
            <li style={{ listStyle: 'none' }} key={char.name}>
              <CharItem
                name={char.name}
                gender={char.gender}
                hair={char.hair}
                mass={char.mass}
                height={char.height}
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
