/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonContainer from './ButtonContainer.js';
import { shallow } from 'enzyme';
import mockData from '../mockData.js'

const mockFavorites = mockData.favorites

it('should match the snapshot', () => {
  const renderedComponent = shallow(<ButtonContainer favorites={mockFavorites}/>);
  
  expect(renderedComponent).toMatchSnapshot();
})