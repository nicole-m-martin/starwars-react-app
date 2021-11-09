import React from 'react';
import Spinner from '../UI/Spinner';
import CharItem from './CharItem';
import { useChars } from '../../hooks/charHooks';

const CharList = () => {
  const { loading, chars } = useChars();

  if (loading) {
    return <Spinner />;
  } else {
    return (
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
    );
  }
};

export default CharList;
