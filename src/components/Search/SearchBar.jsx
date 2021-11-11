import React from 'react';

const SearchBar = ({ onClear, searchTerm, onSearchChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search By Name"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button>Click!</button>
      </form>
      <button onClick={onClear}>Clear Search!</button>
    </>
  );
};

export default SearchBar;
