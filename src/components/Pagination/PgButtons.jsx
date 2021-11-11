import React from 'react';

const PgButtons = ({ pageNumber, previousPage, nextPage, chars }) => {
  return (
    <div>
      <button disabled={pageNumber === 1} onClick={previousPage} value="left">
        Previous
      </button>
      <button disabled={chars.length < 10} onClick={nextPage} value="right">
        Next
      </button>
    </div>
  );
};

export default PgButtons;
