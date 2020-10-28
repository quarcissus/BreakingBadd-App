import React from 'react';

export const NextQuote = ({ setNext }) => {
  const handleOnClick = () => {
    setNext(true);
  };
  return (
    <div className='arrows-container'>
      <button onClick={handleOnClick}>
        <span>N</span>
        <span>ext</span>
      </button>
    </div>
  );
};
