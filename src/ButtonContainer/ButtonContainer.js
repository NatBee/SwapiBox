import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = ({people, planet, vehicle}) => {

  return (
    <section className="btn-container">
      <button onClick={ () => people()}>
        People
      </button>
      <button onClick={ () => planet()}>
        Planet
      </button>      
      <button onClick={ () => vehicle()}>
        Vehicle
      </button>
    </section>
  )
}

export default ButtonContainer