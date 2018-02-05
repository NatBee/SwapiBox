import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({data, handleClick, isFavorite}) => {
  
  const cardDisplayEntries = Object.entries(data).map((item, index) => {
    return (
      <p className={`${item[0]}`}>
        <h3 key={`${item[0]}-${index}`}>{item[0].toUpperCase()}:</h3>  
        <h3 key={`${item[1]}-${index}`}>{item[1]}</h3>  
      </p>
    )
  })

  return (
    <article className='card'>
      <p className="fav-icon" onClick={() => handleClick(data)}>
        <i className={`fas fa-sun ${isFavorite}`}></i>
      </p>
      <section className='card-display'>
        <h3 className='title'>
          {cardDisplayEntries}
        </h3>
      </section>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.array
}

export default Card;