<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ vehicle.name }}</h1>
      <p>
        <span class="listItem-Header">Vehicle Class:</span> {{ vehicle.vehicleClass }}
      </p>
      <p>
        <span class="listItem-Header">Crew:</span> {{ vehicle.crew || '0' }}
      </p>
      <p>
        <span class="listItem-Header">Cargo Capacity:</span> {{ vehicle.cargoCapacity || '0' }}
      </p>
      <p>
        <span class="listItem-Header">Max Atmosphering Speed:</span> {{ vehicle.maxAtmospheringSpeed }} km/h
      </p>
      <p>
        <span class="listItem-Header">Passangers:</span> {{ vehicle.passangers || '0' }}
      </p>
      <p>
        <span class="listItem-Header">Length:</span>{{ vehicle.length }} m
      </p>
      <p>
        <span class="listItem-Header">Manufacturers: </span>
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