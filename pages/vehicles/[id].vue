<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <ListItem
        label="Vehicle Class"
        :value="vehicle.vehicleClass"
      >
      </ListItem>
      <ListItem
        label="Crew"
        :value="vehicle.crew"
      >
      </ListItem>
      <ListItem
        label="Cargo Capacity"
        :value="vehicle.cargoCapacity"
      >
      </ListItem>
      <ListItem
        suffix="km/h"
        label="Max Atmosphering Speed"
        :value="vehicle.maxAtmospheringSpeed"
      >
      </ListItem>
      <ListItem
        label="Passengers"
        :value="vehicle.passengers"
      >
      </ListItem>
      <ListItem
        suffix="m"
        label="Vehicle Length"
        :value="vehicle.length"
      >
      </ListItem>
      <ListItem
        label="Manufacturers"
        :value="manufacturers"
      >
      </ListItem>
    </div>
  </div>
</template>

<script setup>
import { getVehicle } from '@/service/apiService'

const idParam = useRoute().params.id
const loading = ref(true)
const vehicle = ref(null)

const manufacturers = computed(() => vehicle.value.manufacturers.join(", "))

onMounted(async () => {
  try {
    const response = await getVehicle(idParam).then(data => data.vehicle)
    vehicle.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

</script>