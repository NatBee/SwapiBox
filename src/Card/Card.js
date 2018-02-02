import React from 'react';
import './Card.css';

const Card = ({data}) => {
  // const name = data.name

  return (
    <article className='card'>
      <h3>{data.name}</h3>
      <h3>Home World: {data.homeworld}</h3>
      <h3>Species: {data.species}</h3>
      <h3>Population: {data.population}</h3>
    </article>
  );
}

export default Card;