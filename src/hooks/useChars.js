import { useState, useEffect } from 'react';
import { getAllChars } from '../services/StarWarsApi';

// Custom Hook to load the character list and set the page numbers

export const useChars = () => {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    getAllChars(pageNumber)
      .then((chars) => setChars(chars))
      .finally(() => setLoading(false))
      .catch((error) => console.log('Error fetching from SWAPI: ', error));
  }, [pageNumber]);

  return {
    loading,
    setLoading,
    chars,
    setChars,
    pageNumber,
    setPageNumber,
  };
};
