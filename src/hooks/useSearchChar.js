import { useState, useEffect } from 'react';
import { searchAllChars } from '../services/StarWarsApi';

// Custom Hook to search characters

export const useSearchChar = () => {
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    searchAllChars(query)
      .then((chars) => setChars(chars))
      .finally(() => setLoading(false));
  }, [query]);

  return {
    loading,
    setLoading,
    chars,
    setChars,
    query,
    setQuery,
  };
};
