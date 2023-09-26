import graphql from "graphql.js"

const graph = graphql(
  "https://swapi-graphql.netlify.app/.netlify/functions/index",
  {
    method: "POST", // POST by default.
    headers: {
      // headers
      // "Access-Token": "some-access-token",
      // OR "Access-Token": () => "some-access-token"
    },
    fragments: {
      // fragments, you don't need to say `fragment name`.
    },
  }
)
export const getAllFilms = async () => {
  const apiCall = await graph(`query allFilms {
    allFilms {
      films {
        title
        director
        releaseDate
        id
      }
    }
  }`)
  return apiCall()
}

export const getAllPeopleCount = async () => {
  const apiCall = await graph(`query allPeopleCount {
    allPeople {
      totalCount
    }
  }`)
  return apiCall()
}

export const getAllPeople = async (first, after) => {
  const apiCall = await graph(`query allPeople($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      people {
        name
        id
      }
    }
  }`)
  return apiCall({
    first,
    after
  })
}

export const getAllVehicles = async () => {
  const apiCall = await graph(`query getAllVehicles {
    allVehicles {
      vehicles {
        name
        vehicleClass
        id
      }
    }
  }`)
  return apiCall()
}

export const getAllStarShips = async () => {
  const apiCall = await graph(`query allStarShips {
    allStarships {
      starships {
        id
        name
        cargoCapacity
        crew
        length
        manufacturers
        maxAtmospheringSpeed
        starshipClass
        passengers
        model
      }
    }
  }`)
  return apiCall()
}

export const getAllPlanets = async () => {
  const apiCall = await graph(`query getAllPlanets {
    allPlanets {
      planets {
        name
        id
      }
    }
  }`)
  return apiCall()
}

export const getFilm = async (id) => {
  const apiCall = await graph(`query getFilm($filmId: ID) {
    film(id: $filmId) {
      title
      director
      openingCrawl
      producers
      releaseDate
    }
  }`)
  return apiCall({
    filmId: id
  })
}

export const getPerson = async (id) => {
  const apiCall = await graph(`query getPerson($personId: ID) {
    person(id: $personId) {
      name
      birthYear
      gender
      eyeColor
      hairColor
      height
      mass
      skinColor
      homeworld {
        id
        name
      }
    }
  }`)
  return apiCall({
    personId: id
  })
}

export const getPlanet = async (id) => {
  const apiCall = await graph(`query getPlanet($planetId: ID) {
    planet(id: $planetId) {
      name
      climates
      created
      diameter
      gravity
      population
      terrains
      surfaceWater
      rotationPeriod
    }
  }`)
    return apiCall({
      planetId: id
    })
}

export const getVehicle = async (id) => {
  const apiCall = await graph(`query getVehicle($vehicleId: ID) {
    vehicle(id: $vehicleId) {
      crew
      cargoCapacity
      model
      maxAtmospheringSpeed
      name
      passengers
      vehicleClass
      length
      manufacturers
    }
  }`)
    return apiCall({
      vehicleId: id
    })

}