import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = ({handleClickPeople, handleClickPlanets, handleClickVehicles}) => {

  return (
    <section className="btn-container">
      <button className="people" onClick={ () => handleClickPeople()}>People</button>
      <button className="planet" onClick={ () => handleClickPlanets()}>Planet</button>      
      <button className="vehicle" onClick={ () => handleClickVehicles()}>Vehicle</button>
    </section>
  )
}

export default ButtonContainer