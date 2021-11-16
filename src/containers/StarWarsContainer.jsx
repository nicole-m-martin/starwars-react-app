import React, { useState } from 'react';
import CharList from '../components/Characters/CharList';
import PgButtons from '../components/Pagination/PgButtons';
import Spinner from '../components/UI/Spinner';
import SearchBar from '../components/Search/SearchBar';
import { useChars } from '../hooks/useChars';
import { useSearchChar } from '../hooks/useSearchChar';
import { searchAllChars } from '../services/StarWarsApi';
import { getAllChars } from '../services/StarWarsApi';
import stars from '../assets/stars.jpeg';

const StarWarsContainer = () => {
  const { loading, setLoading, chars, setChars, pageNumber, setPageNumber } =
    useChars();

  const { query } = useSearchChar();

  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setPageNumber(1);
    const searchedChars = await searchAllChars(searchTerm);
    setChars(searchedChars);
  }

  function onClear() {
    setSearchTerm('');
    setPageNumber(1);
    setLoading(true);
    getAllChars(pageNumber)
      .then((chars) => setChars(chars))
      .finally(() => setLoading(false));
  }

  function previousPage() {
    setPageNumber(pageNumber - 1);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  if (loading) return <Spinner />;
  return (
    <main style={{ backgroundImage: `url(${stars})` }}>
      <SearchBar
        onSearchChange={onSearchChange}
        searchTerm={searchTerm}
        onSubmit={onSubmit}
        onClear={onClear}
        query={query}
      />

      <PgButtons
        pageNumber={pageNumber}
        previousPage={previousPage}
        nextPage={nextPage}
        chars={chars}
      />

      <CharList chars={chars} loading={loading} />
    </main>
  );
};

export default StarWarsContainer;
