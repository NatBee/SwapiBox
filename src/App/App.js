import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import ScrollContainer from '../ScrollContainer/ScrollContainer.js';
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

  getData = (source) => {
    api.getData(source)
    .then(response => console.log(response))
    //instead of console.log going to this.cleanData(response) in helper
    //where it will return clean data then set state
  }

  favorites = () => {
    console.log('hey there')
  }

  handleClick = (source) => {
    if(source === 'people') {
      // console.log('peeps')
    this.getData('people');
    } else if (source === 'planet') {
      console.log('planet')
    } else if (source === 'vehicle') {
      console.log('ride')
    }

  }

  render() {
    return (
      <div className="App">
        <ScrollContainer className="scroll-container"/>
        <Nav 
          className="App-header" 
          favorites={this.favorites}
        />
        <ButtonContainer 
          className="Btn-container" 
          handleClick={this.handleClick} 
        />
        <CardContainer 
        className="card-container"
        />
      </div>
    );
  }
}

export default App;
