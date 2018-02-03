import React from 'react';
import './ButtonContainer.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const ButtonContainer = ({handleClickPeople, handleClickPlanets, handleClickVehicles}) => {

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
    </section>
  )
}

export default ButtonContainer