<template>
  <div class="page">
    <div class="flex justify-between">
      <div class="page-header w-full">{{ props.title }}</div>
      <Filter
        :data="listData" 
        v-model="filteredText"
        @filteredData="handleFilter"
        @noResult="handleNoResult"
      >
      </Filter>
    </div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <template v-if="noResult">
        <p>There is no result for that search</p>
      </template>
      <template v-else>
        <template v-for="data in listItems" :key="data">
          <div>
            <NuxtLink :to="`/${props.page}/${data.id}`">
              <p class="listItem">{{ data.name }}</p>
            </NuxtLink>
          </div>
        </template>
      </template>
      <Paginator 
        :isFetching="isFetching"
        :amount="allDataCount"
        :perPage="dataPerPage"
        @changePage="handlePage"
      >
      </Paginator>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String },
  page: { type: String },
  fetchDataFunction: { type: Function },
  fetchDataCountFunction: { type: Function }
}) 

const { allDataCount, isFetching, listData, pageDetails, handlePageChange } = usePage()

const dataPerPage = 20
const loading = ref(true)
const dataAmount = ref(0)
const filteredResults = ref([])
const filteredText = ref('')
const noResult = ref(false)

const listItems = computed(() => {
  if (filteredText.value.length > 0) return filteredResults.value
  return listData.value
})

const handlePage = async (page) => {
  filteredResults.value = []
  filteredText.value = ''
  handlePageChange(page, props.page)
}

const handleFilter = (data) => {
  filteredResults.value = data
}

const handleNoResult = (data) => {
  noResult.value = data
}

onMounted(async () => {
  try {
    const allData = `all${props.title}`
    const response = await props.fetchDataFunction(dataPerPage, null)
    const fetchData = response[allData]

    pageDetails.value.pageInfo = fetchData.pageInfo
    pageDetails.value.pageName = props.page
    listData.value = fetchData[props.page]
    
    allDataCount.value = await props.fetchDataCountFunction().then(listData => listData[allData].totalCount)
    dataAmount.value = listData.value.length

  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>
