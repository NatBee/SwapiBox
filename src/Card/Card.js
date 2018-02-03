import React from 'react';
import './Card.css';

const Card = ({data, source}) => {

  const cardDisplayKey = Object.keys(data).map(key => <h3 className="key">{key}</h3>);   
  const cardDisplayValues = Object.values(data).map(value => <h3 className="value">{value}</h3>);                          

  return (
    <article className='card'>
      <h3>{cardDisplayKey} :</h3>
      <h3>{cardDisplayValues}</h3>
    </article>
  );
}

export default Card;