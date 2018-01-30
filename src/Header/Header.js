import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = (props) => {

  const favorites = () => {
    console.log('hey there')
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Lego Star Wars</h1>
      <button className="favorites" onClick={this.favorites}>
      View Favorites
      </button>
    </div>
  )
}

export default Header