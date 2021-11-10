import React from 'react';

const PgButtons = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} value="left">
        Left
      </button>
      <button onClick={onClick} value="right">
        Right
      </button>
    </div>
  );
};

export default PgButtons;
