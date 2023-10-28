import { getAllPlanets } from '@/service/apiService'
import { getAllPeople } from '@/service/apiService'
import { getAllVehicles } from '@/service/apiService'
import { getAllStarships } from '@/service/apiService'

export const setPage = async (action, pageDetails, perPage, allDataCount) => {
  const actions = {
    next: async () => await fetchFunction(perPage, null, null, pageDetails.pageInfo.endCursor),
    prev: async () => await fetchFunction(null, perPage, pageDetails.pageInfo.startCursor, null),
    first: async () => await fetchFunction(perPage, null, null, null),
    last: async () => {
      const totalPage = Math.ceil(allDataCount / perPage)
      const lastPageAmount = allDataCount - (perPage * (totalPage - 1))
      return await fetchFunction(null, lastPageAmount, null, null)
    }
  }
  const pageName = pageDetails.pageName
  
  const apiFunctions = {
    people: getAllPeople,
    vehicles: getAllVehicles,
    planets: getAllPlanets,
    starships: getAllStarships
  }

  const fetchFunction = apiFunctions[pageName]
  const capitalPageName = pageName.charAt(0).toUpperCase() + (pageName.slice(1))

  const response = await actions[action]()

  return {
    listData: response[`all${capitalPageName}`][pageName],
    pageDetails: response[`all${capitalPageName}`].pageInfo
  }
}