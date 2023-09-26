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
      <Pagination class="mt" :amount="allPeopleCount"></Pagination>
    </div>
  </div>
</template>

<script setup>
import { getAllPeople, getAllPeopleCount } from '@/service/apiService'

const people = ref([])
const loading = ref(true)
const charactersAmount = ref(0)
const hasNextPage = ref(false)
const endCursor = ref(null)
const allPeopleCount = ref(null)

onMounted(async () => {
  // try {
  //   const response = await getAllPeople().then(data => data.allPeople.people)
  //   people.value = response
  //   charactersAmount.value = people.value.length
  // } catch (error) {
  //   console.error(error)
  // } finally {
  //   loading.value = false
  // }
  try {
    const response = await getAllPeople(20, null)
    const data = response.allPeople
    people.value = data.people

    allPeopleCount.value = await getAllPeopleCount().then(people => people.allPeople.totalCount)
    charactersAmount.value = people.value.length
    hasNextPage.value = data.pageInfo.hasNextPage
    endCursor.value = data.pageInfo.endCursor
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