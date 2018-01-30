import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
/* eslint-disable */ 

describe('App tests', () => {

  beforeEach(() => {
    renderedComponent = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  })

  it('should gather clean data from people data set', () => {
    expect(renderedComponent.state().peopleData).length).toBe()
  })

  it('should gather clean data from planet data set', () => {
    expect(renderedComponent.state().planetData).length).toBe()
  })

  it('should gather clean data from vehicle data set', () => {
    expect(renderedComponent.state().vehicleData).length).toBe()
  })

  it('should have ')

})