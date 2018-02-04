import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({data, handleClick}) => {
  
  const cardDisplayKey = Object.keys(data).map((title, index) => <h3 className={`title ${title}`} key={index}>{title}</h3>);   
  const cardDisplayValues = Object.values(data).map( (value, index) => <h3 className={`value ${value}`} key={index}>{value}</h3>);                          

  return (
    <article className='card'>
      <p onClick={() => handleClick(data)}>
        <i class="fas fa-sun"></i>
      </p>
      <section className='card-display'>
        <h3 className='title'>
          {cardDisplayKey}
        </h3>
        <h3 className='value'>
          {cardDisplayValues}
        </h3>
      </section>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.array
}

export default Card;