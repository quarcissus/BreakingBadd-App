import React from 'react';

export const Character = ({ character }) => {
  return (
    <div>
      <h1 className='char-name'>{character.author}</h1>
      <img
        className='character-img'
        src={character.img}
        alt={character.author}
      ></img>
    </div>
  );
};
