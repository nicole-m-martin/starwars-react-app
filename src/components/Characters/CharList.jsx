import React from 'react';
import Spinner from '../UI/Spinner';
import CharItem from './CharItem';
import { useChars } from '../../hooks/charHooks';

const CharList = () => {
  const { loading, chars } = useChars();

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

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <ul>
          {chars.map((char) => (
            <li key={char.name}>
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
        <span>Average Height: {averageHeight} </span>
        <span>Average Mass: {averageMass} </span>
      </>
    );
  }
};

export default CharList;
