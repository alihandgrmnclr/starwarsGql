<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ vehicle.name }}</h1>
      <p>Vehicle Class: {{ vehicle.vehicleClass }}</p>
      <p>Crew: {{ vehicle.crew || '0' }}</p>
      <p>Cargo Capacity: {{ vehicle.cargoCapacity || '0' }}</p>
      <p>Max Atmosphering Speed: {{ vehicle.maxAtmospheringSpeed }} km/h</p>
      <p>Passangers: {{ vehicle.passangers || '0' }}</p>
      <p>Length: {{ vehicle.length }} m</p>
      <p>Manufacturers: 
        <template v-for="manufacturer, index in manufacturers" :key="manufacturer">
          {{ manufacturer }}<span v-if="index < manufacturers.length - 1">, </span>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { getVehicle } from '@/service/apiService'

const idParam = useRoute().params.id
const loading = ref(true)
const vehicle = ref(null)
const manufacturers = ref([])

onMounted(async () => {
  try {
    const response = await getVehicle(idParam).then(data => data.vehicle)
    vehicle.value = response
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