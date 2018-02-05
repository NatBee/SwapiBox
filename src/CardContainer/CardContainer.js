import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({peopleData, planetData, vehicleData, favorites, source, handleClick, isFavorite}) => {
  let newCard;
  let newSource;

  if(source === 'people') {
    newCard = peopleData.map((people, index) => <Card data={ people } handleClick={handleClick} key={index} isFavorite={isFavorite}/>);
    newSource = source.toUpperCase();
  } else if(source === 'planets') {
    newCard = planetData.map((planet, index) => <Card data={ planet } handleClick={handleClick} key={index} isFavorite={isFavorite}/>);
    newSource = source.toUpperCase();
  } else if(source === 'vehicles') {
    newCard = vehicleData.map((vehicle, index) => <Card data={ vehicle } handleClick={handleClick} key={index} isFavorite={isFavorite}/>);
    newSource = source.toUpperCase();
  } else if(source === 'favorites' && favorites.length !== 0) {
    newCard = favorites.map((favorite, index) => <Card data={ favorite } handleClick={handleClick} key={index} isFavorite={isFavorite}/>);
    newSource = source.toUpperCase();
  } else if(source === 'favorites' && favorites.length === 0) {
    return 'There are no favorites selected!'
  }

  return (
    <article className="card-container">
      <h3 className='card-header'>
        {newSource} CARDS
      </h3>
      <section className='card-wrap'>
        {newCard}
      </section>
    </article>
  )
}

CardContainer.propTypes = {
  peopleData: PropTypes.array,
  planetData: PropTypes.array,
  vehicleData: PropTypes.array,
  favorites: PropTypes.array,
  source: PropTypes.string,
  handleClick: PropTypes.func
}

export default CardContainer