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

  it('should gather movie data for 1 movie', () => {
    expect(renderedComponent.state().movieData).length).toBe(1)
  })

  it('should gather clean data from people data set', () => {
    expect(renderedComponent.state().peopleData).length).toBe(10)
  })

  it('should gather clean data from planet data set', () => {
    expect(renderedComponent.state().planetData).length).toBe(10)
  })

  it('should gather clean data from vehicle data set', () => {
    expect(renderedComponent.state().vehicleData).length).toBe(10)
  })

  it('when People button is clicked, it should render 10 cards with .people className', () => {

  })

  it('when Planets button is clicked, it should render 10 cards with .planets className', () => {
    
  })

  it('when Vehicles button is clicked, it should render 10 cards with .vehicles className', () => {
    
  })

  it('when Favorites button is clicked, it should render the number of favorited cards', () => {
    
  })

})