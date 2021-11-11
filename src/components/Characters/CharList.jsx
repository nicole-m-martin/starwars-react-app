import React from 'react';
import CharItem from './CharItem';
import style from '../Characters/Characters.module.css';
import PropTypes from 'prop-types';

const CharList = ({ chars }) => {
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

  const orderedCharacters = chars.sort(
    (charA, charB) => charA.name < charB.name
  );

  return (
    <>
      <section className={style.charCardGrid}>
        <ul>
          {orderedCharacters.map((char) => (
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
  name: PropTypes.isRequired,
  gender: PropTypes.isRequired,
  hair: PropTypes.isRequired,
  mass: PropTypes.isRequired,
  height: PropTypes.isRequired,
};
