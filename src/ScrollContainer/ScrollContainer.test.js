/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollContainer from './ScrollContainer.js';
import { shallow } from 'enzyme';
import mockData from '../mockData.js'

describe('ScrollContainer', () => {
  let mockFavorites;
  let mockMovie;
  let renderedComponent;

  beforeAll(() => {
    mockFavorites = mockData.favorites;
    mockMovie = mockData.movieData;
    renderedComponent = shallow(<ScrollContainer 
                                  favorites={mockFavorites} 
                                  movieData={mockMovie} 
                                />)
  })

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot()
  })

  it('should have 1 .opening-crawl tag', () => {
    expect(renderedComponent.find(".opening-crawl").length).toEqual(1);
  })

})