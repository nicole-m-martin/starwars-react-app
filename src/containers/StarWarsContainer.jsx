import React, { useState } from 'react';
import CharList from '../components/Characters/CharList';
import PgButtons from '../components/Pagination/PgButtons';
import SearchBar from '../components/Search/SearchBar';
import Spinner from '../components/UI/Spinner';
import { useChars } from '../hooks/charHooks';
import { searchAllChars } from '../services/StarWarsApi';

const StarWarsContainer = () => {
  const { loading, chars, setChars } = useChars();

  const [searchTerm, setSearchTerm] = useState('');

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const searchedChars = await searchAllChars(searchTerm);
    setChars(searchedChars);
  }

  if (loading) return <Spinner />;
  return (
    <main>
      <SearchBar
        onSearchChange={onSearchChange}
        searchTerm={searchTerm}
        onSubmit={onSubmit}
      />
      <PgButtons />
      <CharList chars={chars} loading={loading} />
    </main>
  );
};

export default StarWarsContainer;
