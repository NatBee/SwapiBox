const root = 'https://swapi.co/api';

let apiGet = (url) => {
  return fetch(url)
  .then( response => response.json() ) 
}

export default {
  getData(source) {
    return apiGet(`${root}/${source}/`)
  }
}