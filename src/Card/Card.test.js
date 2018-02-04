/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import { shallow } from 'enzyme';
import mockData from '../mockData.js';

it('should match the snapshot', () => {
  const mockPeople = mockData.peopleData
  const renderedComponent = shallow(<Card data={mockPeople} />);

  expect(renderedComponent).toMatchSnapshot();
})

it('should have a className of .fav if favorited', () => {

})

it('should have a className of .card if not favorited', () => {
  
})