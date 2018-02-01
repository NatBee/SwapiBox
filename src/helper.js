class CleanData {

  getMovieData = async () => {
    const response = await fetch(`https://swapi.co/api/films/`)
    return response.json() 
  }

 getPeopleData = async () => {
    const peopleData = await fetch(`https://swapi.co/api/people/`);
    const response = await peopleData.json()
    const homeWorld = await this.peopleHomeWorldData(response.results);
    const species = await this.peopleSpeciesData(homeWorld);
 
    return species;
  }

  peopleHomeWorldData = async (info) => {
    const homeWorldData = await info.map(async (person) => {
      const homeWorld = await fetch(person.homeworld);
      const homeWorldResponse = await homeWorld.json();
      const homeWorldObj = {  ...person,
                              homeworld: homeWorldResponse.name, 
                              population: homeWorldResponse.population, 
                              favorite: false
                            };
      
      return homeWorldObj; 
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

//call planets
//clean planets
//clean residents
//return cleaned residents to clean planets
//return updated object
  getPlanetsData = async () => {
    const planetsData = await fetch(`https://swapi.co/api/planets/`);
    const response = await planetsData.json();
    const cleanedPlanets = await this.cleanPlanets(response.results);
    // const cleanedResidents = await this.cleanResidents(cleanedPlanets)
    return Promise.all(cleanedPlanets);
  }

  cleanPlanets = async (info) => {
    const planetsData = await info.map(async (planet) => {
      const cleanResident = await this.cleanResidents(planet.residents)
      const planetObj = await { name: planet.name, 
                          climate: planet.climate, 
                          population: planet.population, 
                          terrain: planet.terrain, 
                          residents: cleanResident, 
                          favorite: false};
      return planetObj;
    })

    return Promise.all(planetsData);
  }

  cleanResidents = async (info) => {
    const resident = await info.map(async (person) => {
      const residentData = await fetch(person);
      const residentResponse = await residentData.json();
      const residentName = await residentResponse.name

      return residentName;
    })  

    return Promise.all(resident);
  } 

  getVehiclesData = async () => {
    const vehiclesData = await fetch(`https://swapi.co/api/vehicles/`);
    const response = await vehiclesData.json();
    
    return response;
  }
}

export default CleanData;