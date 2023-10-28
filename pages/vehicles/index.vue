<script setup>
import { getAllVehicles, getAllVehiclesCount } from '@/service/apiService'
</script>

<template>
  <GenericList
    title="Vehicles"
    page="vehicles"
    :fetch-data-function="getAllVehicles"
    :fetch-data-count-function="getAllVehiclesCount"
  >
  </GenericList>
</template>