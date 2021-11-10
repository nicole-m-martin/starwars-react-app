import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button>Click!</button>
    </form>
  );
};

export default SearchBar;
