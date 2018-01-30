import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = ({favorites}) => {


  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Lego Star Wars</h1>
      <button className="favorites" onClick={ () => favorites()}>
      View Favorites
      </button>
    </div>
  )
}

export default Header;