import { useState, useEffect } from 'react';
import { getAllChars } from '../services/StarWarsApi';

export const useChars = () => {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    getAllChars(pageNumber)
      .then((chars) => setChars(chars))
      .finally(() => setLoading(false));
  }, [pageNumber]);

  return { loading, setLoading, chars, setChars, pageNumber, setPageNumber };
};
