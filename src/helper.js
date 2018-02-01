class CleanData {
  constructor(props) {

  }

  getMovieData = async () => {
    const response = await fetch(`https://swapi.co/api/films/`)
    return response.json() 
  }

  getData = async (source) => {
    const response = await fetch(`https://swapi.co/api/${source}/`)
    return response.json()
  }

  peopleDetails = async (info) => {
    const homeWorld = await this.peopleHomeWorldData(info.results);
    const species = await this.peopleSpeciesData(info.results);
    const people = {...homeWorld, ...species};
    //the spread operator isn't working and only ...species is updating
    console.log(homeWorld)
    console.log(species)
    console.log(people)

    return people;
  }

  peopleHomeWorldData = async (info) => {

    const homeWorldData = await info.map(async (person) => {
      const name = person.name;
      const homeWorld = await fetch(person.homeworld);
      const homeWorldResponse = await homeWorld.json();
      const homeWorldArray = {  ...person,
                                name: name, 
                                homeworld: homeWorldResponse.name, 
                                population: homeWorldResponse.population
                              }
    
      return homeWorldArray;
     
    }) 

    return Promise.all(homeWorldData);
  }

  peopleSpeciesData = async (info) => {

    const speciesData = await info.map(async (person) => {
      const name = person.name;
      const species = await fetch(person.species);
      const speciesResponse = await species.json();
      const speciesArray = {  ...person,
                              species: speciesResponse.name
                            }
    
      return speciesArray;
     
    }) 

    return Promise.all(speciesData);
  }

  planetDetails(info) {
    console.log(info)
  }

  vehicleDetails(info) {
    console.log(info)
  }
}

export default CleanData;