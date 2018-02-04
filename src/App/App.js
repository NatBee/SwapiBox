import React, { Component } from 'react';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import ScrollContainer from '../ScrollContainer/ScrollContainer.js';
import CardContainer from '../CardContainer/CardContainer.js';
import DataCleaner from '../helper.js'
import logo from '../images/Star-Wars-Logo.png';
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
    this.randomNumber();
    this.retrieveFavorites();
  }

  randomNumber = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(6));
    this.getMovieData(randomNumber)
  }

  getMovieData = async (number) => {
    const scrolls =  await this.cleaner.getMovieData();
    const title = scrolls.results[number].title
    const releaseDate = scrolls.results[number].release_date
    const openingCrawl = scrolls.results[number].opening_crawl
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
    this.setState({ source: 'favorites' });
  }

  handleClick = async (data) => {
    const favoritesArray = await this.state.favorites;
    if(!favoritesArray.includes(data)) {
      data.favorite = true;
      this.setState ({ favorites: [...favoritesArray, data] })
    } else {
      data.favorite = false;
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
    getFavorites
    ? this.setState ({ favorites: parsedFavorites }) 
    : this.setState ({ favorites: [] }) 
  }

  render() {
    return (
      <div className="App">
        <img  src={logo} 
              className="App-logo" 
              alt="logo" 
        />
        <h1 className="App-title">
          SwapiBox
        </h1>
        <ButtonContainer 
          className="Btn-container" 
          handleClickPeople={this.handleClickPeople}
          handleClickPlanets={this.handleClickPlanets}
          handleClickVehicles={this.handleClickVehicles}
          handleClickFavorites={this.handleClickFavorites}
          favorites={this.state.favorites}
        />
        <CardContainer 
          peopleData={this.state.peopleData}
          planetData={this.state.planetData}
          vehicleData={this.state.vehicleData}
          favorites={this.state.favorites}
          source={this.state.source}
          handleClick={this.handleClick}
        />
        <ScrollContainer 
          className="scroll-container" 
          movieData={this.state.movieData}
        />
      </div>
    );
  }
}

export default App;
