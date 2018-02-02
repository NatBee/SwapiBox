import React from 'react';
import ReactDOM from 'react-dom';
import helper from './helper';
import { shallow } from 'enzyme';
import mockData from './mockData';
import cleanMockData from '/cleanMockData'
/* eslint-disable */ 
console.log(mockData)
describe('movieData', () => {
  let mockMovieData;
  let cleanedMockMovieData;

  beforeAll(() => {
    mockMovieData = {mockData}
    renderedComponent = shallow(<App />)
  })

  it('fetch is called with the correct params', () => {
    const expectedParams = [
      "https://swapi.co/api/films/",
      {
        body: JSON.stringify({films: mockMovieData}),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          movieData: mockMovieData
        })
      })
    })
  

  });


  
})