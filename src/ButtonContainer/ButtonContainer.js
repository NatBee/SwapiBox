import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = ({handleClickPeople, handleClickPlanets, handleClickVehicles, handleClickFavorites, favorites}) => {

  const numberOfFavorites = favorites.length;

  return (
    <section className="btn-container">
      <button className="people" onClick={ () => handleClickPeople()}>
        People
      </button>
      <button className="planet" onClick={ () => handleClickPlanets()}>
        Planet
      </button>      
      <button className="vehicle" onClick={ () => handleClickVehicles()}>
        Vehicle
      </button>
       <button className="favorites" onClick={ () => handleClickFavorites()}>
        View Favorites 
        <div>
          {numberOfFavorites}
        </div>
      </button>
    </section>
  )
}

export default ButtonContainer