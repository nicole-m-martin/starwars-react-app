import React, { useState } from 'react';
import CharList from '../components/Characters/CharList';
import PgButtons from '../components/Pagination/PgButtons';
import SearchBar from '../components/Search/SearchBar';
import Spinner from '../components/UI/Spinner';
import { useChars } from '../hooks/charHooks';
import { searchAllChars, getAllChars } from '../services/StarWarsApi';
import stars from '../assets/stars.jpeg';

const StarWarsContainer = () => {
  const { loading, setLoading, chars, setChars, pageNumber, setPageNumber } =
    useChars();

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
