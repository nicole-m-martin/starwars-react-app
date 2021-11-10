import React from 'react';
import CharList from '../components/Characters/CharList';
import PgButtons from '../components/Pagination/PgButtons';
import SearchBar from '../components/Search/SearchBar';
import Spinner from '../components/UI/Spinner';
import { useChars } from '../hooks/charHooks';

const StarWarsContainer = () => {
  const { loading, chars } = useChars();

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
