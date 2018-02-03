import React, { Component } from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import ScrollContainer from '../ScrollContainer/ScrollContainer.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DataCleaner from '../helper.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      peopleData: [],
      planetData: [],
      vehicleData: [],
      movieData: [],
      source: '',
      favorites: []
    }

    this.cleaner = new DataCleaner()
  }

  componentDidMount() {
    this.getMovieData();
    this.retrieveFavorites();
  }

  getMovieData = async () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const scrolls =  await this.cleaner.getMovieData();
    const title = scrolls.results[randomNumber].title
    const releaseDate = scrolls.results[randomNumber].release_date
    const openingCrawl = scrolls.results[randomNumber].opening_crawl
    const cleanData = {title, releaseDate, openingCrawl}

    this.setState ({ movieData: [cleanData] })
  }

  handleClickPeople = async () => {
    if(this.state.peopleData.length === 0) {
      const people = await this.cleaner.getPeopleData();
      this.setState ({
        peopleData: people,
        source: 'people'
      });
    } else {
      this.setState ({ source: 'people' });
    }
  }

  handleClickPlanets = async () => {
    if(this.state.planetData.length === 0) {
      const planet = await this.cleaner.getPlanetsData();
      this.setState ({
        planetData: planet,
        source: 'planets'
      });
    } else {
      this.setState ({ source: 'planets' });
    }
  }

  handleClickVehicles = async () => {
    if(this.state.vehicleData.length === 0) {
      const vehicle = await this.cleaner.getVehiclesData();
      this.setState ({
        vehicleData: vehicle,
        source: 'vehicles'
      });
    } else {
      this.setState ({ source: 'vehicles' });
    }
  }

  handleClickFavorites = () => {
    console.log('hey there')
  }

  handleClick = async (data) => {
    const favoritesArray = await this.state.favorites;
    
    if(!favoritesArray.includes(data)) {
      this.setState ({ favorites: [...favoritesArray, data] })
    } else {
      const removeFavorite = favoritesArray.filter(favorite => {
        return favorite !== data
      })
      this.setState ({ favorites: removeFavorite })
    }

    await this.storeFavorites();
  } 

  storeFavorites = () => {
    const favorites = this.state.favorites;
    const stringifiedArray = JSON.stringify(favorites);
    localStorage.setItem('favorites', stringifiedArray);
  }

  retrieveFavorites = () => {
    const getFavorites = localStorage.getItem('favorites');
    const parsedFavorites = JSON.parse(getFavorites);
    this.setState ({ favorites: parsedFavorites});
  }

  render() {
    return (
      <div className="App">
        <ScrollContainer 
          className="scroll-container"
          className="App-header" 
          handleClickFavorites={this.handleClickFavorites}
          favorites={this.state.favorites}
        />
        <ButtonContainer 
          className="Btn-container" 
          handleClickPeople={this.handleClickPeople}
          handleClickPlanets={this.handleClickPlanets}
          handleClickVehicles={this.handleClickVehicles}
        />
        <CardContainer 
          peopleData={this.state.peopleData}
          planetData={this.state.planetData}
          vehicleData={this.state.vehicleData}
          source={this.state.source}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
