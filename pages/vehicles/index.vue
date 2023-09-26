<template>
  <div class="vehicles">
    <h1 class="page-header">Vehicles</h1>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <template v-for="vehicle in vehicles" :key="vehicle">
        <NuxtLink :to="`/vehicles/${vehicle.id}`">
          <p>{{ vehicle.name }}</p>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup>
import { getAllVehicles } from '@/service/apiService'

const vehicles = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await getAllVehicles().then(data => data.allVehicles.vehicles)
    vehicles.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.vehicles {
  background-repeat: no-repeat;
  background-image: url(/images/starship.png);
  background-position: center;
}
</style>