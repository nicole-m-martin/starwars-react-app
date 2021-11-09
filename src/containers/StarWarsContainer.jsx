import React, { useState, useEffect } from 'react';
import CharList from '../components/Characters/CharList';
import { getAllChars } from '../services/StarWarsApi';

const StarWarsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getAllChars()
      .then((chars) => setChars(chars))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <CharList chars={chars} />
    </main>
  );
};

export default StarWarsContainer;
