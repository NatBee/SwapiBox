import React from 'react';
import Card from '../Card/Card.js'
import './CardContainer.css';

const CardContainer = ({peopleData, planetData, vehicleData, source, handleClick}) => {
  // put in condition for source value to set newCard for correct data set
  let newCard;
  if(source === 'people') {
    newCard = peopleData.map(people => <Card data={ people } source={source} handleClick={handleClick}/>)
  } else if(source === 'planets') {
    newCard = planetData.map(planet => <Card data={ planet } source={source} handleClick={handleClick}/>)
  } else if(source === 'vehicles') {
    newCard = vehicleData.map(vehicle => <Card data={ vehicle } source={source} handleClick={handleClick}/>)
  }

  return (
    <article className="card-container">
      <h3>
        Card Container
      </h3>
      <section className='card-wrap'>
        {newCard}
      </section>
    </article>
  )
}

export default CardContainer