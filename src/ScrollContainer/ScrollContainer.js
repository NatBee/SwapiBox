import React from 'react';
import './ScrollContainer.css';

const ScrollContainer = ({handleClickFavorites, favorites, movieData}) => {
  
  const openingScroll = movieData.map( data => {
    return (
      <section className="crawl">
        <p className="opening-crawl">{data.openingCrawl}</p>
        <p className="title">{data.title}</p>
        <p className="release-date">{data.releaseDate}</p>
      </section>
    )
  }); 

  return (
    <section className="container">
      <div class="fade"></div>
      <section className="scroll-container">
        {openingScroll}
      </section>
    </section>
  )
} 

export default ScrollContainer;