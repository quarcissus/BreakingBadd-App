import React, { useState } from 'react';
import { Character } from './components/Character';
import { NextQuote } from './components/NextQuote';
import { Quote } from './components/Quote';
import useFetchApi from './hooks/useFetchApi';

export const BreakingBad = () => {
  const [next, setNext] = useState(false);
  const url = [
    `https://www.breakingbadapi.com/api/characters?name=`,
    `https://www.breakingbadapi.com/api/quote/random?author=`,
  ]; //[0] pfoto personaje, [1] frase personaje
  const character = useFetchApi(url, next, setNext);

  return (
    <div className='app-wrapper'>
      <h1 className='title'>Breaking Bad</h1>
      <hr />
      {character.loading ? (
        <h1> Loading...</h1>
      ) : character.error ? (
        <>
          <h1>{character.author}</h1>
          <h3> No hay información para ese personaje</h3>
        </>
      ) : (
        <>
          <Character character={character} />
          <Quote quote={character.quote} />
        </>
      )}
      <NextQuote setNext={setNext} />
    </div>
  );
};
