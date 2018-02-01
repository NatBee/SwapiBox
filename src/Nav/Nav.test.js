/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Nav />)
  expect(renderedComponent).toMatchSnapshot()
})