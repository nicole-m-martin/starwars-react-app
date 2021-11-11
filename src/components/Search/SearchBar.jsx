import React from 'react';
import style from '../Search/Search.module.css';

const SearchBar = ({ onClear, searchTerm, onSearchChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className={style.search}
          type="text"
          placeholder="Search By Name"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button className={style.searchButton}>Search</button>
      </form>
      <button className={style.searchButton} onClick={onClear}>
        Clear Search!
      </button>
    </>
  );
};

export default SearchBar;
