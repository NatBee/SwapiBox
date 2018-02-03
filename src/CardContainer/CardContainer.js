import React from 'react';
import Card from '../Card/Card.js'
import './CardContainer.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const CardContainer = ({peopleData, planetData, vehicleData, favorites, source, handleClick}) => {
  // put in condition for source value to set newCard for correct data set
  let newCard;
  if(source === 'people') {
    newCard = peopleData.map(people => <Card data={ people } source={source} handleClick={handleClick}/>)
  } else if(source === 'planets') {
    newCard = planetData.map(planet => <Card data={ planet } source={source} handleClick={handleClick}/>)
  } else if(source === 'vehicles') {
    newCard = vehicleData.map(vehicle => <Card data={ vehicle } source={source} handleClick={handleClick}/>)
  } else if(source === 'favorites' && favorites.length !== 0) {
    newCard = favorites.map(favorite => <Card data={ favorite } source={source} handleClick={handleClick}/>)
  } else if(source === 'favorites' && favorites.length === 0) {
    return 'There are no favorites selected!'
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