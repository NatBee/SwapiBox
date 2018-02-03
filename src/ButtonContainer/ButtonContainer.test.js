/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonContainer from './ButtonContainer.js';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<ButtonContainer />);
  
  expect(renderedComponent).toMatchSnapshot();
})