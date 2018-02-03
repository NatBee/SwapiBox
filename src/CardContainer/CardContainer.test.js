/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js';
import { shallow, mount } from 'enzyme';
import mockData from '../mockData.js'

describe('CardContainer', () => {
  let renderedComponent;
  let source;
  const mockPeople = mockData.peopleData;
  const mockPlanets = mockData.planetData;
  const mockvehicles = mockData.vehicleData;
  const mockFavorites = mockData.favorites;

  it('should match the snapshot', () => {
    source = 'people';
    renderedComponent = mount(<CardContainer 
                                  peopleData={mockPeople}
                                  planetData={mockPlanets} 
                                  vehicleData={mockvehicles} 
                                  favorites={mockFavorites}
                                  source={source}
                                />);

    expect(renderedComponent).toMatchSnapshot();
  })

  it('should render expected number of cards for people', () => {
    source = 'people';
    renderedComponent = mount(<CardContainer 
                                  peopleData={mockPeople}
                                  source={source}
                                />);

    expect(renderedComponent.find('.card').length).toEqual(1);
  })

  it('should render expected number of cards for planets', () => {
    source = 'planets';
    renderedComponent = mount(<CardContainer 
                                  planetData={mockPlanets} 
                                  source={source}
                                />);

    expect(renderedComponent.find('.card').length).toEqual(1);
  })

  it('should render expected number of cards for vehicles', () => {
    source = 'vehicles';
    renderedComponent = mount(<CardContainer 
                                  vehicleData={mockvehicles} 
                                  source={source}
                                />);

    expect(renderedComponent.find('.card').length).toEqual(1);
  })

  it('should render expected number of cards for favorites', () => {
    source = 'favorites';
    renderedComponent = mount(<CardContainer  
                                  favorites={mockFavorites}
                                  source={source}
                                />);

    expect(renderedComponent.find('.card').length).toEqual(1);
  })
})