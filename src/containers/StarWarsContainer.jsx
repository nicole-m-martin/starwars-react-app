import React from 'react';
import CharList from '../components/Characters/CharList';
import PgButtons from '../components/Pagination/PgButtons';
import Spinner from '../components/UI/Spinner';
import { useChars } from '../hooks/useChars';

import stars from '../assets/stars.jpeg';

import Search from '../components/Search/Search';

const StarWarsContainer = () => {
  const { loading, chars, pageNumber, setPageNumber } = useChars();

  function previousPage() {
    setPageNumber(pageNumber - 1);
  }

  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  if (loading) return <Spinner />;
  return (
    <main style={{ backgroundImage: `url(${stars})` }}>
      <Search loading={loading} chars={chars} />

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
