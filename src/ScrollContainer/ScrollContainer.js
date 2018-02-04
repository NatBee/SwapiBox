import React from 'react';
import logo from '../images/Star-Wars-Logo.png';
import './ScrollContainer.css';

const ScrollContainer = ({handleClickFavorites, favorites, movieData}) => {
  const numberOfFavorites = favorites.length;
  const openingScroll = movieData.map( data => {
    return (
      <section>
        <p className="opening-crawl">{data.openingCrawl}</p>
        <p className="title">{data.title}</p>
        <p className="release-date">{data.releaseDate}</p>
      </section>
    )
  }); 

  return (
    <section>
      <section className="scroll-container">
        {openingScroll}
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