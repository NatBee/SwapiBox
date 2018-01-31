import React from 'react';
import logo from '../images/Star-Wars-Logo.png';
import './Nav.css';

const Nav = ({favorites}) => {


  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Lego Star Wars</h1>
      <button className="favorites" onClick={ () => favorites()}>
      View Favorites 3
      </button>
    </div>
  )
} 

export default Nav;