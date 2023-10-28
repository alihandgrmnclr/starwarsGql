<template>
  <div>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <h1 class="page-header">{{ starship.name }}</h1>
      <p>Vehicle Class: {{ starship.starshipClass }}</p>
      <p>Crew: {{ starship.crew || '0' }}</p>
      <p>Cargo Capacity: {{ starship.cargoCapacity || '0' }}</p>
      <p>Max Atmosphering Speed: {{ starship.maxAtmospheringSpeed }} km/h</p>
      <p>Passangers: {{ starship.passangers || '0' }}</p>
      <p>Length: {{ starship.length }} m</p>
      <p>Manufacturers: 
        <template v-for="manufacturer, index in manufacturers" :key="manufacturer">
          {{ manufacturer }}<span v-if="index < manufacturers.length - 1">, </span>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { getStarship } from '@/service/apiService'

const idParam = useRoute().params.id
const loading = ref(true)
const starship = ref(null)
const manufacturers = ref([])

onMounted(async () => {
  try {
    const response = await getStarship(idParam).then(data => data.starship)
    starship.value = response
    manufacturers.value = response.manufacturers
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

</script>

<style scoped>

</style>