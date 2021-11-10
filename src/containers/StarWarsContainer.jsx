import React, { useState } from 'react';
import CharList from '../components/Characters/CharList';
import PgButtons from '../components/Pagination/PgButtons';
import SearchBar from '../components/Search/SearchBar';
import Spinner from '../components/UI/Spinner';
import { useChars } from '../hooks/charHooks';
// import { searchChars } from '../hooks/searchHook';

const StarWarsContainer = () => {
  const { loading, chars } = useChars();
  // const { query } = searchChars();
  // const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <Spinner />;
  return (
    <main>
      <SearchBar />
      <PgButtons />
      <CharList chars={chars} loading={loading} />
    </main>
  );
};

export default StarWarsContainer;
