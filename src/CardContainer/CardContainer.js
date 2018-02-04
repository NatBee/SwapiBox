import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({peopleData, planetData, vehicleData, favorites, source, handleClick}) => {
  let newCard;
  if(source === 'people') {
    newCard = peopleData.map(people => <Card data={ people } handleClick={handleClick}/>)
  } else if(source === 'planets') {
    newCard = planetData.map(planet => <Card data={ planet } handleClick={handleClick}/>)
  } else if(source === 'vehicles') {
    newCard = vehicleData.map(vehicle => <Card data={ vehicle } handleClick={handleClick}/>)
  } else if(source === 'favorites' && favorites.length !== 0) {
    newCard = favorites.map(favorite => <Card data={ favorite } handleClick={handleClick}/>)
  } else if(source === 'favorites' && favorites.length === 0) {
    return 'There are no favorites selected!'
  }

  return (
    <article className="card-container">
      <h3 className='card-header'>
        Card Container
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