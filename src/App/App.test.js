import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import mockData from '../mockData.js';
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

  it('when People button is clicked, it should render fetched cards', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockPeople} )
      })
    })

    expect(renderedComponent.state('peopleData').length).toEqual(0);
    expect(renderedComponent.state('source')).toEqual('');

    await renderedComponent.instance().handleClickPeople();

    await expect(renderedComponent.state('peopleData').length).toEqual(1);
    await expect(renderedComponent.state('source')).toEqual('people');
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

   it('when Planets button is clicked, it should render fetched cards', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockPlanets} )
      })
    })

    expect(renderedComponent.state('planetData').length).toEqual(0);
    expect(renderedComponent.state('source')).toEqual('');

    await renderedComponent.instance().handleClickPlanets();

    await expect(renderedComponent.state('planetData').length).toEqual(1);
    await expect(renderedComponent.state('source')).toEqual('planets');
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

  it('when Vehicles button is clicked, it should render fetched cards', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockVehicles} )
      })
    })

    expect(renderedComponent.state('vehicleData').length).toEqual(0);
    expect(renderedComponent.state('source')).toEqual('');

    await renderedComponent.instance().handleClickVehicles();

    await expect(renderedComponent.state('vehicleData').length).toEqual(1);
    await expect(renderedComponent.state('source')).toEqual('vehicles');
  })

  it('should store favorites', () => {
    renderedComponent.setState({favorites: mockFavorites});
    renderedComponent.update();

    expect(renderedComponent.state('favorites').length).toEqual(1);
  })

  it('should add a card to favorites', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockFavorites} )
      })
    })

    expect(renderedComponent.state('favorites').length).toEqual(0);
    await renderedComponent.instance().handleClick([{
      "favorite": true,
      "name": "Sail barge",
      "model": "Modified Luxury Sail Barge",
      "class": undefined,
      "passengers": "500"
    }]);
    
    await expect(renderedComponent.state('favorites').length).toEqual(1);
  })

  it('should update source to favorites when click favorites button', async () => {
    expect(renderedComponent.state('source')).toEqual('');
    
    await renderedComponent.instance().handleClickFavorites();

    await expect(renderedComponent.state('source')).toEqual('favorites');
  })
})