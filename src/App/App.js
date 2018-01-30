import React, { Component } from 'react';
import Header from '../Header/Header.js'
import ButtonContainer from '../ButtonContainer/ButtonContainer.js'
import CardContainer from '../CardContainer/CardContainer.js'
import logo from '../logo.svg';
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

  

  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <ButtonContainer className="Btn-container"/>
        <CardContainer className="card-container"/>
      </div>
    );
  }
}

export default App;
