import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
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
      movieData: []
    }

    this.cleaner = new DataCleaner()
  }

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = async () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(6));
    const scrolls =  await this.cleaner.getMovieData();
    const title = scrolls.results[randomNumber].title
    const releaseDate = scrolls.results[randomNumber].release_date
    const openingCrawl = scrolls.results[randomNumber].opening_crawl
    const cleanData = {title, releaseDate, openingCrawl}

    this.setState ({
      movieData: cleanData
    })
  }

  getData = async (source) => {
    const sourceData = await this.cleaner.getData(source)
    console.log(sourceData)

      if(source === 'people') {
        const peopleArr = await this.cleaner.peopleDetails(sourceData)
        this.setState ({
          peopleData: peopleArr
        })
      } else if(source === 'planets') {
        this.setState ({
          planetData: this.cleaner.planetDetails(sourceData)
        })
      } else if(source === 'vehicles') {
        this.setState ({
          vehicleData: this.cleaner.vehicleDetails(sourceData)
        })
      }
    
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
    // console.log(DataCleaner)
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
