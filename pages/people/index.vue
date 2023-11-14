<script setup>
import { getAllPeople, getAllPeopleCount } from '@/service/apiService'
</script>

<template>
  <Head>
    <Title>Star Wars | Characters</Title>
  </Head>
  <GenericList
    title="People"
    page="people"
    :fetch-data-function="getAllPeople"
    :fetch-data-count-function="getAllPeopleCount"
  >
  </GenericList>
</template>