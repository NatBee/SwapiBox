/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import { shallow } from 'enzyme';
import mockData from '../..mockData.js';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Card />)
  expect(renderedComponent).toMatchSnapshot()
})