<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ starship.name }}</h1>
      <ListItem
        label="Vehicle Class"
        :value="starship.starshipClass"      
      >
      </ListItem>
      <ListItem
        label="Crew"
        :value="starship.crew"      
      >
      </ListItem>
      <ListItem
        label="Cargo Capacity"
        :value="starship.crew"      
      >
      </ListItem>
      <ListItem
        suffix="km/h"
        label="Max Atmosphering Speed"
        :value="starship.maxAtmospheringSpeed"      
      >
      </ListItem>
      <ListItem
        label="Passengers"
        :value="starship.passengers"      
      >
      </ListItem>
      <ListItem
        suffix="m"
        label="Starship Length"
        :value="starship.length"      
      >
      </ListItem>
      <ListItem
        label="Manufacturers"
        :value="manufacturers"      
      >
      </ListItem>
    </div>
  </div>
</template>

<script setup>
import { getStarship } from '@/service/apiService'

const idParam = useRoute().params.id
const loading = ref(true)
const starship = ref(null)

const manufacturers = computed(() => starship.value.manufacturers.join(", "))

onMounted(async () => {
  try {
    const response = await getStarship(idParam).then(data => data.starship)
    starship.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>