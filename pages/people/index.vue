<script setup>
import { getAllPeople, getAllPeopleCount } from '@/service/apiService'
</script>

<template>
  <GenericList
    title="People"
    page="people"
    :fetch-data-function="getAllPeople"
    :fetch-data-count-function="getAllPeopleCount"
  >
  </GenericList>
</template>