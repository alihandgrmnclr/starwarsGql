<template>
  <div>
    <div class="flex justify-between">
      <div class="page-header w-full">Characters</div>
      <Filter></Filter>
    </div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <template v-for="char in people" :key="char">
        <div class="characters">
          <NuxtLink :to="`/characters/${char.id}`">
            <p class="char">{{ char.name }}</p>
          </NuxtLink>
        </div>
      </template>
      <Pagination :amount="allPeopleCount" :perPage=20 @changePage="handlePage"></Pagination>
    </div>
  </div>
</template>

<script setup>
import { getAllPeople, getAllPeopleCount } from '@/service/apiService'

const charsPerPage = 20
const people = ref([])
const loading = ref(true)
const charactersAmount = ref(0)
const allPeopleCount = ref(null)

const pageInfo = ref(null)
const currentPage = ref(1)

const handlePage = async (page) => {
  if (currentPage.value < page.page + 1) {
    const response = await getAllPeople(20, null, null, pageInfo.value.endCursor)
    people.value = response.allPeople.people
    pageInfo.value = response.allPeople.pageInfo
    currentPage.value ++
  } else if (currentPage.value > page.page + 1) {
    const response = await getAllPeople(null, 20, pageInfo.value.startCursor, null)
    people.value = response.allPeople.people
    pageInfo.value = response.allPeople.pageInfo
    currentPage.value --
  }
  
  // if ( currentPage.value < page.page + 2) {
  //   const response = await getAllPeople(null, 20, null, null)
  // }
}


onMounted(async () => {
  try {
    const response = await getAllPeople(charsPerPage, null)
    const data = response.allPeople
    pageInfo.value = data.pageInfo
    people.value = data.people

    allPeopleCount.value = await getAllPeopleCount().then(people => people.allPeople.totalCount)
    charactersAmount.value = people.value.length
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.char {
  @apply inline;
}
</style>