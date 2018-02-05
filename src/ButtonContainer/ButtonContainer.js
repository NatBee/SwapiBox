import React from 'react';
import PropTypes from 'prop-types';
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
        View Favorites {numberOfFavorites}
      </button>
    </section>
  )
}

ButtonContainer.propTypes = {
  handleClickPeople: PropTypes.func,
  handleClickPlanets: PropTypes.func,
  handleClickVehicles: PropTypes.func,
  handleClickFavorites: PropTypes.func,
  favorites: PropTypes.array,
  props: PropTypes.shape({
      data: PropTypes.array
  })
}

export default ButtonContainer