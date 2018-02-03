import React from 'react';
import logo from '../images/Star-Wars-Logo.png';
import './ScrollContainer.css';

const ScrollContainer = ({handleClickFavorites, favorites}) => {
  const numberOfFavorites = favorites.length;

  return (
    <section>
      <section className="scroll-container">
        <h1>
          Opening Scroll
        </h1>
      </section>
      <img  src={logo} 
            className="App-logo" 
            alt="logo" 
      />
      <h1 className="App-title">
        Lego Star Wars
      </h1>
      <button className="favorites" onClick={ () => handleClickFavorites()}>
        View Favorites 
        <div>
          {numberOfFavorites}
        </div>
      </button>
    </section>
  )
} 

export default ScrollContainer;