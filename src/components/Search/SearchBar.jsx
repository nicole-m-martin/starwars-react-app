import React, { useState } from 'react';
import { searchAllChars } from '../../services/StarWarsApi';

const SearchBar = () => {
  const [text, setText] = useState('');

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   searchAllChars(text);
  //   setText(e.target.value);
  //   console.log('clicked');
  // };

  const onChange = (e) => {
    searchAllChars(text);
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search By Name"
        onChange={onChange}
        value={text}
      />
    </>
  );
};

export default SearchBar;
