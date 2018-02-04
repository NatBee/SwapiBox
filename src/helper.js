class CleanData {

  getMovieData = async () => {
    try {
      const response = await fetch(`https://swapi.co/api/films/`);
    
      return await response.json(); 
    } catch(err) {
      return 'Error! Fetching films failed!'
    }
  }

  getPeopleData = async () => {
    try {
      const peopleData = await fetch(`https://swapi.co/api/people/`);
      const response = await peopleData.json();
      const homeWorld = await this.peopleHomeWorldData(response.results);
   
      return homeWorld;
    } catch(err) {
      return 'Error! Fetching people failed!'
    }
  }

  peopleHomeWorldData = async (info) => {
    const homeWorldData = await info.map(async (person) => {
      const name = person.name;
      const cleanSpecies = await this.peopleSpeciesData(person);
      const species = cleanSpecies.name;
      const homeWorld = await fetch(person.homeworld);
      const homeWorldResponse = await homeWorld.json();
      const homeWorldObj = await {  favorite: false,
                                    name: name,
                                    homeworld: homeWorldResponse.name, 
                                    population: homeWorldResponse.population, 
                                    species: species
                                  };

      return homeWorldObj; 
    }) 

    return Promise.all(homeWorldData);
  }

  peopleSpeciesData = async (info) => {
    const species = await fetch(info.species);
    const speciesResponse = await species.json();      

    return speciesResponse;
  }

  getPlanetsData = async () => {
    try {
      const planetsData = await fetch(`https://swapi.co/api/planets/`);
      const response = await planetsData.json();
      const cleanedPlanets = await this.cleanPlanets(response.results);

      return Promise.all(cleanedPlanets);      
    } catch(err) {
      return 'Error! Fetching planets failed!'
    }
  }

  cleanPlanets = async (info) => {
    const planetsData = await info.map(async (planet) => {
      const cleanResident = await this.cleanResidents(planet.residents);
      const planetObj = await { favorite: false,
                                name: planet.name, 
                                climate: planet.climate, 
                                population: planet.population, 
                                terrain: planet.terrain, 
                                residents: cleanResident
                              };
      return planetObj;
    })

    return Promise.all(planetsData);
  }

  cleanResidents = async (info) => {
    const resident = await info.map(async (person) => {
      const residentData = await fetch(person);
      const residentResponse = await residentData.json();
      const residentName = await residentResponse.name;

      return residentName;
    })  

    return Promise.all(resident);
  } 

  getVehiclesData = async () => {
    try {
    const vehiclesData = await fetch(`https://swapi.co/api/vehicles/`);
    const response = await vehiclesData.json();
    const cleanVehicleData = await response.results.map( async (vehicle) => {
      const vehicleObj = await {  favorite: false,
                                  name: vehicle.name,
                                  model: vehicle.model,
                                  class: vehicle.vehicle_class,
                                  passengers: vehicle.passengers
                                };

      return vehicleObj;
    } )
  
    return Promise.all(cleanVehicleData); 
    } catch(err) {
      return 'Error! Fetching vehicles failed!'
    }
  }

}

export default CleanData;