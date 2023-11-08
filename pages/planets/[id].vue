<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ planet.name }}</h1>
      <div>
        <span class="listItem-Header">Climate:</span>
        <span v-for="climate, index in climates" :key="climate">
          {{ climate }} <span v-if="index < climates.length - 1">, </span>
        </span>
      </div>
      <div> 
        <span class="listItem-Header">Terrains:</span>
        <span v-for="terrain, index in terrains" :key="terrain">
        {{ terrain }}<span v-if="index < terrains.length - 1">, </span>
      </span>
      </div>
      <p>
        <span class="listItem-Header">Gravity:</span> {{ planet.gravity }}
      </p>
      <p>
        <span class="listItem-Header">Population:</span> {{ formatNumber(planet.population) }}
      </p>
      <p>
        <span class="listItem-Header">Surface Water:</span> {{ planet.surfaceWater || 'none'}}
      </p>
      <p>
        <span class="listItem-Header">Rotation Period:</span> {{ planet.rotationPeriod }}h
      </p>
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