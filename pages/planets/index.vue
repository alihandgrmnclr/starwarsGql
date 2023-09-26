<template>
  <div>
    <h1 class="page-header">Planets</h1>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <template v-for="planet in planets" :key="planet">
        <div v-if="planet.name !=='unknown'">
          <NuxtLink :to="`/planets/${planet.id}`">
            <p class="planet">{{ planet.name }}</p>
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { getAllPlanets } from '@/service/apiService'

const planets = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await getAllPlanets().then(data => data.allPlanets.planets)
    planets.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.planet {
  @apply inline;
}
</style>