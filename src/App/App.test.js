import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import mockData from '../mockData.js'
/* eslint-disable */ 
global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
    },
        
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

describe('App tests', () => {
  const mockMovie = mockData.movieData;
  const mockPeople = mockData.peopleData;
  const mockPlanets = mockData.planetData;
  const mockVehicles = mockData.vehicleData;
  const mockFavorites = mockData.favorites;
  let renderedComponent;

  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockMovie} )
      })
    })

    renderedComponent = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should gather movie data for 1 movie', () => {
    expect(renderedComponent.state('movieData').length).toEqual(1);

    renderedComponent.setState(mockMovie);
    renderedComponent.update();

    expect(renderedComponent.state('movieData').length).toEqual(1);
  })

  it('should gather clean data from people data set', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockPeople} )
      })
    })

    expect(renderedComponent.state('peopleData').length).toEqual(0);
    
    renderedComponent.setState({peopleData: mockPeople});
    renderedComponent.update();
    
    expect(renderedComponent.state('peopleData').length).toEqual(1);
  })

  it('should gather clean data from planet data set', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockPlanets} )
      })
    })

    expect(renderedComponent.state('planetData').length).toEqual(0);

    renderedComponent.setState({planetData: mockPlanets});
    renderedComponent.update();

    expect(renderedComponent.state('planetData').length).toEqual(1);
  })

  it('should gather clean data from vehicle data set', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockVehicles} )
      })
    })
  
    expect(renderedComponent.state('vehicleData').length).toEqual(0);
    
    renderedComponent.setState({vehicleData: mockVehicles});
    renderedComponent.update();

    expect(renderedComponent.state('vehicleData').length).toEqual(1);
  })

  it('should store favorites', () => {
    renderedComponent.setState({favorites: mockFavorites});
    renderedComponent.update();

    expect(renderedComponent.state('favorites').length).toEqual(1);
  })

  //I think the above tests are not necessary

  it('should add a card to favorites', async () => {

    expect(renderedComponent.state('favorites').length).toEqual(0);
    
    await renderedComponent.instance().handleClickFavorites(mockFavorites[0]);
    
    await expect(renderedComponent.state('favorites').length).toEqual(1);
  })

  it('should update favorites state on reload if there are stored favorites', () => {
    const storedFavorites = 1;

    expect(renderedComponent.state('favorites').length).toEqual(storedFavorites)
  })

  it('when Favorites button is clicked, it should render the number of favorited cards', async () => {
    expect(renderedComponent.state('favorites').length).toEqual(0);
    console.log(renderedComponent.state())

    await renderedComponent.instance().handleClickFavorites();

    console.log(renderedComponent.state())
    await expect(renderedComponent.state('favorites').length).toEqual(10);
  })

  it('when People button is clicked, it should render 10 cards with .people className', async () => {
    expect(renderedComponent.state('peopleData').length).toEqual(0);

    console.log(renderedComponent.state())
    await renderedComponent.instance().handleClickPeople();

    console.log(renderedComponent.state())
    await expect(renderedComponent.state('peopleData').length).toEqual(10);
 
  })

  it('when Planets button is clicked, it should render 10 cards with .planets className', async () => {
    expect(renderedComponent.state('planetData').length).toEqual(0);

    console.log(renderedComponent.state())
    await renderedComponent.instance().handleClickPlanets();

    console.log(renderedComponent.state())
    await expect(renderedComponent.state('planetData').length).toEqual(10);
  })

  it('when Vehicles button is clicked, it should render 10 cards with .vehicles className', async () => {
    expect(renderedComponent.state('vehicleData').length).toEqual(0);
    console.log(renderedComponent.state())

    await renderedComponent.instance().handleClickVehicles();

    console.log(renderedComponent.state())
    await expect(renderedComponent.state('vehicleData').length).toEqual(10);
  })


})