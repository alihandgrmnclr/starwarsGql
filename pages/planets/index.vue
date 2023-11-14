<script setup>
import { getAllPlanets, getAllPlanetsCount } from '@/service/apiService'
</script>

<template>
  <Head>
    <Title>Star Wars | Planets</Title>
  </Head>
  <GenericList
    title="Planets"
    page="planets"
    :fetch-data-function="getAllPlanets"
    :fetch-data-count-function="getAllPlanetsCount"
  >
  </GenericList>
</template>