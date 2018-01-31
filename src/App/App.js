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
      vehicleData: [],
      movieData: []
    }
  }

  componentDidMount() {
 this.getMovieData();
  }

  getMovieData = async () => {
      const scrolls =  await api.getMovieData();
      const title = scrolls.results[6].title
      const releaseDate = scrolls.results[6].release_date
      const openingCrawl = scrolls.results[6].opening_crawl
      const cleanData = {title, releaseDate, openingCrawl}

      // const cleanData = await helper.scrollCleaner(scrolls.results)
      this.setState ({
        movieData: cleanData
      })
    // })
  }

  getData = (source) => {
    api.getData(source)
    .then(response => {
      if(source === 'people') {
        this.setState ({
          peopleData: [response]
        })
      } else if(source === 'planets') {
        this.setState ({
          planetData: [response]
        })
      } else if(source === 'vehicles') {
        this.setState ({
          vehicleData: [response]
        })
      }
    })
  }

  favorites = () => {
    console.log('hey there')
  }

  handleClick = (source) => {
    if(source === 'people' && this.state.peopleData.length === 0) {
      this.getData('people');
    } else if (source === 'planets' && this.state.planetData.length === 0) {
      this.getData('planets');
    } else if (source === 'vehicles' && this.state.vehicleData.length === 0) {
      this.getData('vehicles');
    }

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav 
          className="App-header" 
          favorites={this.favorites}
        />
        <ScrollContainer className="scroll-container"/>
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
