import { useState, useEffect } from 'react';
import { getAllChars } from '../services/StarWarsApi';

export const useChars = () => {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getAllChars()
      .then((chars) => setChars(chars))
      .finally(() => setLoading(false));
  }, []);

  return { loading, chars, setChars };
};
