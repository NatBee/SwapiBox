import React from 'react';
import Card from '../Card/Card.js'
import './CardContainer.css';

const CardContainer = ({peopleData, planetData, vehicleData, source}) => {
  // put in condition for source value to set newCard for correct data set
  let newCard;
  if(source === 'people') {
    newCard = peopleData.map(people => <Card data={ people } />)
  } else if(source === 'planets') {
    newCard = planetData.map(planet => <Card data={ planet } />)
  } else if(source === 'vehicles') {
    newCard = vehicleData.map(vehicle => <Card data={ vehicle } />)
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