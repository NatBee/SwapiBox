/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollContainer from './ScrollContainer.js';
import { shallow } from 'enzyme';
import mockData from '../..mockData.js'

it('should match the snapshot', () => {
  const renderedComponent = shallow(<ScrollContainer />)
  expect(renderedComponent).toMatchSnapShot()
})

it('should have 1 .card tag', () => {
  const renderedComponent = shallow(<ScrollContainer scrollText={mockData}/>)
  expect(renderedComponent.find(.card).length).toEqual(1)
})