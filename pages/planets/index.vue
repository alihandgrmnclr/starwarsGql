<script setup>
import { getAllPlanets, getAllPlanetsCount } from '@/service/apiService'
</script>

<template>
  <GenericList
    title="Planets"
    page="planets"
    :fetch-data-function="getAllPlanets"
    :fetch-data-count-function="getAllPlanetsCount"
  >
  </GenericList>
</template>