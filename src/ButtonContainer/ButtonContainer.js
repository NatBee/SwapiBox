import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = ({handleClick}) => {

  return (
    <section className="btn-container">
      <button className="people" onClick={ () => handleClick('people')}>People</button>
      <button className="planet" onClick={ () => handleClick('planets')}>Planet</button>      
      <button className="vehicle" onClick={ () => handleClick('vehicles')}>Vehicle</button>
    </section>
  )
}

export default ButtonContainer