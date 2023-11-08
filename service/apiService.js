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

export const getAllPeople = async (first, last, before, after) => {
  const apiCall = await graph(`query People($after: String, $before: String, $first: Int, $last: Int) {
    allPeople(after: $after, before: $before, first: $first, last: $last) {
      people {
        name
        id
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`)
  return apiCall({
    first,
    last,
    before,
    after
  })
}

export const getAllVehiclesCount = async () => {
  const apiCall = await graph(`query allVehiclesCount {
    allVehicles {
      totalCount
    }
  }`)
  return apiCall()
}

export const getAllVehicles = async (first, last, before, after) => {
  const apiCall = await graph(`query Vehicles($after: String, $before: String, $first: Int, $last: Int) {
    allVehicles(after: $after, before: $before, first: $first, last: $last) {
      vehicles {
        name
        vehicleClass
        id
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`)
  return apiCall({
    first,
    last,
    before,
    after
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

export const getAllStarshipsCount = async () => {
  const apiCall = await graph(`query allStarshipsCount {
    allStarships {
      totalCount
    }
  }`)
  return apiCall()
}

export const getAllStarships = async (first, last, before, after) => {
  const apiCall = await graph(`query allStarShips ($after: String, $before: String, $first: Int, $last: Int) {
    allStarships (after: $after, before: $before, first: $first, last: $last) {
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
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`)
  return apiCall({
    first,
    last,
    before,
    after
  })
}

export const getStarship = async (id) => {
  const apiCall = await graph(`query getStarship($starshipId: ID) {
    starship(id: $starshipId) {
      crew
      cargoCapacity
      model
      maxAtmospheringSpeed
      name
      passengers
      starshipClass
      length
      manufacturers
    }
  }`)
  return apiCall({
    starshipId: id
  })
}

export const getAllPlanetsCount = async () => {
  const apiCall = await graph(`query AllPlanetsCount {
    allPlanets {
      totalCount
    }
  }`)
  return apiCall()
}

export const getAllPlanets = async (first, last, before, after) => {
  const apiCall = await graph(`query getAllPlanets($after: String, $before: String, $first: Int, $last: Int) {
    allPlanets(after: $after, before: $before, first: $first, last: $last) {
      planets {
        name
        id
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`)
  return apiCall({
    first,
    last,
    before,
    after
  })
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