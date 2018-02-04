import React from 'react';
import PropTypes from 'prop-types';
import './ScrollContainer.css';

const ScrollContainer = ({handleClickFavorites, favorites, movieData}) => {
  
  const openingScroll = movieData.map( (data, index) => {
    return (
      <section className="crawl" key={index} >
        <p className="opening-crawl">{data.openingCrawl}</p>
        <p className="title">{data.title}</p>
        <p className="release-date">{data.releaseDate}</p>
      </section>
    )
  }); 

  return (
    <section className="container">
      <div className="fade"></div>
      <section className="scroll-container">
        {openingScroll}
      </section>
    </section>
  )
} 

ScrollContainer.propTypes = {
  movieData: PropTypes.array
}

export default ScrollContainer;