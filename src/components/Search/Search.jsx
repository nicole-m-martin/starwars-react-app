import React from 'react';
import { useSearchChar } from '../../hooks/useSearchChar';
import { searchAllChars } from '../../services/StarWarsApi';
import SearchBar from './SearchBar';
import Spinner from '../UI/Spinner';
import style from './Search.module.css';

const Search = () => {
  const { loading, chars, setChars, searchTerm, setSearchTerm, setQuery } =
    useSearchChar();

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const searchedChars = await searchAllChars(searchTerm);
    setChars(searchedChars);
    setQuery();
  }

  function onClear() {
    setSearchTerm('');
  }

  if (loading) return <Spinner />;
  return (
    <div>
      <SearchBar
        onSearchChange={onSearchChange}
        searchTerm={searchTerm}
        onSubmit={onSubmit}
        onClear={onClear}
        chars={chars}
      />
      <button className={style.searchButton} onClick={onClear}>
        Clear Search!
      </button>
    </div>
  );
};

export default Search;
