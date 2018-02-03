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