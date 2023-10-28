<script setup>
import { getAllStarships, getAllStarshipsCount } from '@/service/apiService'
</script>

<template>
  <GenericList
    title="Starships"
    page="starships"
    :fetch-data-function="getAllStarships"
    :fetch-data-count-function="getAllStarshipsCount"
  >
  </GenericList>
</template>