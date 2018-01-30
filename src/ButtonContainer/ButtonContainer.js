import React, { Component } from 'react';
import './ButtonContainer.css';

const ButtonContainer = (props) => {

  const people = () => {
    console.log('peeps')
  }

  const planet = () => {
    console.log('planet')
  }

  const vehicle = () => {
    console.log('ride')
  }

  return (
    <section className="btn-container">
      <button onClick={this.people}>
        People
      </button>
      <button onClick={this.planet}>
        Planet
      </button>      
      <button onClick={this.vehicle}>
        Vehicle
      </button>
    </section>
  )
}

export default ButtonContainer