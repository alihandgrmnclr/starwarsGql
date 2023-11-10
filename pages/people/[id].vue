<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <h1 class="page-header">{{ person.name }}</h1>
      <ListItem
        label="Birthday"
        :value="person.birthYear"
      >
      </ListItem>
      <ListItem
        label="Gender"
        :value="person.gender"
      >
      </ListItem>
      <ListItem
        label="Eye Color"
        :value="person.eyeColor"
      >
      </ListItem>
      <ListItem
        label="Hair Color"
        :value="person.hairColor"
      >
      </ListItem>
      <ListItem
        suffix="cm"
        label="Height"
        :value="person.height"
      >
      </ListItem>
      <ListItem
        suffix="kg"
        label="Body Weight"
        :value="person.mass"
      >
      </ListItem>
      <ListItem
        label="Skin Color"
        :value="person.skinColor"
      >
      </ListItem>
      <ListItem
        label="Homeworld"
        :link="`/planets/${person.homeworld.id}`"
        :value="person.homeworld.name"
      >
      </ListItem>
    </div>
  </div>
</template>

<script setup>
import { getPerson } from '@/service/apiService'

const idParam = useRoute().params.id
const person = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await getPerson(idParam)
    person.value = response.person
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false  
  }
})
</script>
