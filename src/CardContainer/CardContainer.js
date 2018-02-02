import React from 'react';
import Card from '../Card/Card.js'
import './CardContainer.css';

const CardContainer = ({peopleData, planetData, vehicleData}) => {
  
  const newCard = peopleData.map(people => <Card data={ people } />)

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