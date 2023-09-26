<template>
  <div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <div >
        <p class="page-header">{{ person.name }}</p>
      </div>
      <p>Birthday: {{ person.birthYear }}</p>
      <p>Gender: {{ person.gender }}</p>
      <p>Eye Color: {{ person.eyeColor }}</p>
      <p>Hair Color: {{ person.hairColor }}</p>
      <p>Height: {{ person.height }}cm</p>
      <p>Weight: {{ person.mass }}kg</p>
      <p>Skin Color: {{ person.skinColor }}</p>
      <p>Homeworld: 
        <template v-if="person.homeworld.name !== 'unknown'">
          <NuxtLink :to="`/planets/${person.homeworld.id}`">
            {{ person.homeworld.name }}
          </NuxtLink>
        </template>
        <template v-else>
          <span>unknown</span>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { getPerson } from '@/service/apiService'

const idParam = useRoute().params.id
const person = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await getPerson(idParam)
    person.value = response.person
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false  
  }
})
</script>

<style scoped>

</style>