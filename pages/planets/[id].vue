<template>
  <Head>
    <Title>Planets | {{ planet?.name }}</Title>
  </Head>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ planet.name }}</h1>
      <ListItem
        label="Climate"
        :value="climates"
      >
      </ListItem>
      <ListItem
        label="Terrain"
        :value="terrains"
      >
      </ListItem>
      <ListItem
        label="Gravity"
        :value="planet.gravity"
      >
      </ListItem>
      <ListItem
        label="Population"
        :value="formatNumber(planet.population)"
      >
      </ListItem>
      <ListItem
        label="Surface Water"
        :value="planet.surfaceWater"
      >
      </ListItem>
      <ListItem
        suffix="h"
        label="Rotation Period"
        :value="planet.rotationPeriod"
      >
      </ListItem>
    </div> 
  </div>
</template>

<script setup>
import  { getPlanet } from '@/service/apiService'
import { formatNumber } from '@/utils/numberFormatter'

const idParam = useRoute().params.id
const loading = ref(true)
const planet = ref(null)

const climates = computed(() => planet.value.climates.join(", "))
const terrains = computed(() => planet.value.terrains.join(", "))

onMounted(async () => {
  try {
    const response = await getPlanet(idParam).then(data => data.planet)
    planet.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>