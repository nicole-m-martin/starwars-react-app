import React from 'react';
import style from './Pagination.module.css';
import PropTypes from 'prop-types';

const PgButtons = ({ pageNumber, previousPage, nextPage, chars }) => {
  return (
    <div>
      <button
        className={style.btn}
        disabled={pageNumber === 1}
        onClick={previousPage}
      >
        Previous
      </button>
      <button
        className={style.btn}
        disabled={chars.length < 10}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PgButtons;

PgButtons.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
