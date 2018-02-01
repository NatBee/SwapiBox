/* eslint-disable */ 
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';
import mockData from '../..mockData.js'

it('should match the snapshot', () => {
  const renderedComponent = shallow(<CardContainer />)
  expect(renderedComponent).toMatchSnapShot()
})

it('should render expected number of cards for people', () => {
  const renderedComponent = shallow(<CardContainer />)
  expect(renderedComponent.find(.card).length).toEqual(10)
})

it('should render expected number of cards for planets', () => {
  const renderedComponent = shallow(<CardContainer />)
  expect(renderedComponent.find(.card).length).toEqual(10)
})

it('should render expected number of cards for vehicles', () => {
  const renderedComponent = shallow(<CardContainer />)
  expect(renderedComponent.find(.card).length).toEqual(10)
})