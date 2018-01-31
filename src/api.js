const root = 'https://swapi.co/api';

let apiGet = (url) => {
  return fetch(url)
  .then( response => response.json() ) 
}

export default {
  getMovieData() {
    return apiGet(`${root}/films/`)
  },
  getData(source) {
    return apiGet(`${root}/${source}/`)
  }
}