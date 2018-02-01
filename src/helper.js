class CleanData {
  constructor(props) {

  }

  getMovieData = async () => {
    const response = await fetch(`https://swapi.co/api/films/`)
    return response.json() 
  }

  getPeopleData = async () => {
    const peopleData = await fetch(`https://swapi.co/api/people/`);
    const response = await peopleData.json()
    const homeWorld = await this.peopleHomeWorldData(response.results);
    const species = await this.peopleSpeciesData(response.results);
    const people = {...homeWorld, ...species};
    //the spread operator isn't working and only ...species is updating
    console.log(homeWorld)
    console.log(species)
    console.log(people)

    return people;
  }

  peopleHomeWorldData = async (info) => {
    const homeWorldData = await info.map(async (person) => {
      const homeWorld = await fetch(person.homeworld);
      const homeWorldResponse = await homeWorld.json();
      const homeWorldArray = {  ...person,
                                homeworld: homeWorldResponse.name, 
                                population: homeWorldResponse.population
                              };
      return homeWorldArray; 
    }) 

    return Promise.all(homeWorldData);
  }

  peopleSpeciesData = async (info) => {
    const speciesData = await info.map(async (person) => {
      const species = await fetch(person.species);
      const speciesResponse = await species.json();
      const speciesArray = {  ...person,
                              species: speciesResponse.name
                            };
      return speciesArray;
    }) 

    return Promise.all(speciesData);
  }

  getPlanetsData = async () => {
    const planetsData = await fetch(`https://swapi.co/api/planets/`);
    const response = await planetsData.json();

    return response;
  }

  getVehiclesData = async () => {
    const vehiclesData = await fetch(`https://swapi.co/api/vehicles/`);
    const response = await vehiclesData.json();
    
    return response;
  }
}

export default CleanData;