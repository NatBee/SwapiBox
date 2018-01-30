import React, { Component } from 'react';
import Header from '../Header/Header.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import CardContainer from '../CardContainer/CardContainer.js';
import api from '../api.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peopleData: [],
      planetData: [],
      vehicleData: []
    }
  }

  favorites = () => {
    console.log('hey there')
  }

  people = () => {
    console.log('peeps')
  }

  planet = () => {
    console.log('planet')
  }

  vehicle = () => {
    console.log('ride')
  }

  render() {
    return (
      <div className="App">
        <Header 
          className="App-header" 
          favorites={this.favorites}
        />
        <ButtonContainer 
          className="Btn-container" 
          people={this.people} 
          planet={this.planet} 
          vehicle={this.vehicle}
        />
        <CardContainer 
        className="card-container"
        />
      </div>
    );
  }
}

export default App;
