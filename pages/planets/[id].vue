<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ planet.name }}</h1>
      <div>Climate:
        <span v-for="climate, index in climates" :key="climate">
          {{ climate }} <span v-if="index < climates.length - 1">, </span>
        </span>
      </div>
      <div>Terrains: 
        <span v-for="terrain, index in terrains" :key="terrain">
        {{ terrain }}<span v-if="index < terrains.length - 1">, </span>
      </span>
      </div>
      <p>Gravity: {{ planet.gravity }}</p>
      <p>Population: {{ formatNumber(planet.population) }}</p>
      <p>Surface Water: {{ planet.surfaceWater }}</p>
      <p>Rotation Period: {{ planet.rotationPeriod }}h</p>
    </div>
  </div>
</template>

<script setup>
import  { getPlanet } from '@/service/apiService'
import { formatNumber } from '@/utils/numberFormatter'

const idParam = useRoute().params.id
const loading = ref(true)
const planet = ref(null)
const climates = ref([])
const terrains = ref([])

onMounted(async () => {
  try {
    const response = await getPlanet(idParam).then(data => data.planet)
    planet.value = response
    climates.value = response.climates
    terrains.value = response.terrains
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>

</style>