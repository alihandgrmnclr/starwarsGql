<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ starship.name }}</h1>
      <p>
        <span class="listItem-Header">Vehicle Class:</span> {{ starship.starshipClass }}
      </p>
      <p>
        <span class="listItem-Header">Crew:</span> {{ starship.crew || '0' }}
      </p>
      <p>
        <span class="listItem-Header">Cargo Capacity:</span> {{ starship.cargoCapacity || '0' }}
      </p>
      <p>
        <span class="listItem-Header">Max Atmosphering Speed:</span> {{ starship.maxAtmospheringSpeed }} km/h
      </p>
      <p>
        <span class="listItem-Header">Passangers:</span>{{ starship.passangers || '0' }}
      </p>
      <p>
        <span class="listItem-Header">Length:</span> {{ starship.length }} m
      </p>
      <p>
      <span class="listItem-Header">Manufacturers:</span>
        <template v-for="manufacturer, index in manufacturers" :key="manufacturer">
          {{ manufacturer }}<span v-if="index < manufacturers.length - 1">, </span>
        </template>
      </p>
    </div>
  </div>
</template>

<script setup>
import { getStarship } from '@/service/apiService'

const idParam = useRoute().params.id
const loading = ref(true)
const starship = ref(null)
const manufacturers = ref([])

onMounted(async () => {
  try {
    const response = await getStarship(idParam).then(data => data.starship)
    starship.value = response
    manufacturers.value = response.manufacturers
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>