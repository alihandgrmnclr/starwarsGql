import { setPage } from './setPage'

export const pageHandler = () => {
  const currentPage = ref(1)
  const isFetching = ref(false)
  const listData = ref([])
  const allDataCount = ref(null)
  const pageDetails = ref({})
  const perPage = ref(20)

  const handlePageChange = async (page, fetchName) => {
    isFetching.value = true
    let response

    if (page.number > currentPage.value + 1) { // Go to last page
      response = await setPage('last', pageDetails.value, perPage.value, allDataCount.value)
      currentPage.value = page.pageCount
    } else if (page.number > currentPage.value) { // Go to the next page
      response = await setPage('next', pageDetails.value, perPage.value)
      currentPage.value ++
    } 

    if (page.number + 1 < currentPage.value) { // Go to first page
      response = await setPage('first', pageDetails.value, perPage.value)
      currentPage.value = 1
    } else if (page.number < currentPage.value) { // Go to the previous page
      response = await setPage('prev', pageDetails.value, perPage.value)
      currentPage.value --
    }

    listData.value = response.listData
    pageDetails.value = {
      pageInfo: response.pageDetails,
      pageName: fetchName
    }
    isFetching.value = false
  }

  return {
    allDataCount,
    currentPage,
    isFetching,
    listData,
    pageDetails,
    handlePageChange
  }
}
