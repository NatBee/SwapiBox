import React from 'react';
import './Card.css';

const Card = ({data, handleClick}) => {

  const cardDisplayKey = Object.keys(data).map((title, index) => <h3 className="title" key={index}>{title}</h3>);   
  const cardDisplayValues = Object.values(data).map( (value, index) => <h3 className="value" key={index}>{value}</h3>);                          

  return (
    <article className='card'>
      <button onClick={() => handleClick(data)}>
        Favorite
      </button>
      <h3>
        {cardDisplayKey}
      </h3>
      <h3>
        {cardDisplayValues}
      </h3>
    </article>
  );
}

export default Card;