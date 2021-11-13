import React from 'react';
import style from '../Search/Search.module.css';
import PropTypes from 'prop-types';
const SearchBar = ({ searchTerm, onSearchChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={style.search}
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <input className={style.searchButton} type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
