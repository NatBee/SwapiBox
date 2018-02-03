import React from 'react';
import ReactDOM from 'react-dom';
import helper from './helper';
import mockData from './mockData';
/* eslint-disable */ 
/* eslint-disable max-len */
const Helper = new helper;

describe('fetch movieData', () => {
  let mockMovieData;

  beforeEach(() => {
    mockMovieData = mockData.movieData;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( mockMovieData )
      })
    })
  })

  it('fetch is called with the correct params', () => {
    const expectedParams = [ "https://swapi.co/api/films/" ];
    Helper.getMovieData();

    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('should return a film data object', async () => {
    expect(await Helper.getMovieData()).toEqual(mockMovieData)
  })

  it('should return an error message if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.resolve( 'Error! Fetching films failed!' )
        })
    })

    const errorMessage = await Helper.getMovieData();
    
    expect(errorMessage).toEqual('Error! Fetching films failed!');
  })    
})

describe('fetch peopleData', () => {
  let mockPeopleData;

  beforeEach(() => {
    mockPeopleData = mockData.peopleData;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockPeopleData} )
      })
    })
  })

  it('fetch is called with the correct params', () => {
    const expectedParams = [ "https://swapi.co/api/people/" ];
    Helper.getPeopleData();

    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('should return a people data object', async () => {
    expect(await Helper.getPeopleData()).toEqual(mockPeopleData)
  })

  it('should return an error message if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.resolve( 'Error! Fetching films failed!' )
        })
    })

    const errorMessage = await Helper.getPeopleData();
    
    expect(errorMessage).toEqual('Error! Fetching people failed!');
  })    
})

describe('fetch planetdata', () => {
  let mockPlanetData;

  beforeEach(() => {
    mockPlanetData = mockData.planetData;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockPlanetData} )
      })
    })
  })

  it('fetch is called with the correct params', () => {
    const expectedParams = [ "https://swapi.co/api/planets/" ];
    Helper.getPlanetsData();

    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('should return a planet data object', async () => {
    expect(await Helper.getPlanetsData()).toEqual(mockPlanetData)
  })

  it('should return an error message if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.resolve( 'Error! Fetching films failed!' )
        })
    })

    const errorMessage = await Helper.getPlanetsData();
    
    expect(errorMessage).toEqual('Error! Fetching planets failed!');
  })    
})

describe('fetch vehicledata', () => {
  let mockVehicleData;

  beforeEach(() => {
    mockVehicleData = mockData.vehicleData;

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve( {results: mockVehicleData} )
      })
    })
  })

  it('fetch is called with the correct params', () => {
    const expectedParams = [ "https://swapi.co/api/vehicles/" ];
    Helper.getVehiclesData();

    expect(window.fetch).toHaveBeenCalledWith(...expectedParams);
  });

  it('should return a planet data object', async () => {
    expect(await Helper.getVehiclesData()).toEqual(mockVehicleData)
  })

  it('should return an error message if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          status: 500,
          json: () => Promise.resolve( 'Error! Fetching films failed!' )
        })
    })

    const errorMessage = await Helper.getVehiclesData();
    
    expect(errorMessage).toEqual('Error! Fetching vehicles failed!');
  })    
})
