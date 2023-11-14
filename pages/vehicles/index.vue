<script setup>
import { getAllVehicles, getAllVehiclesCount } from '@/service/apiService'
</script>

<template>
  <Head>
    <Title>Star Wars | Vehicles</Title>
  </Head>
  <GenericList
    title="Vehicles"
    page="vehicles"
    :fetch-data-function="getAllVehicles"
    :fetch-data-count-function="getAllVehiclesCount"
  >
  </GenericList>
</template>