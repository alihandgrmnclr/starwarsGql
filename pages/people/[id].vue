<template>
  <div class="page">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <div>
        <p class="page-header">{{ person.name }}</p>
      </div>
      <p>
        <span class="listItem-Header">Birthday:</span> {{ person.birthYear }}
      </p>
      <p>
        <span class="listItem-Header">Gender:</span> {{ person.gender }}
      </p>
      <p>
        <span class="listItem-Header">Eye Color:</span> {{ person.eyeColor }}
      </p>
      <p>
        <span class="listItem-Header">Hair Color:</span> {{ person.hairColor }}
      </p>
      <p>
        <span class="listItem-Header">Height:</span> {{ person.height }} cm
      </p>
      <p>
        <span class="listItem-Header">Weight:</span> {{ person.mass }} kg
      </p>
      <p>
        <span class="listItem-Header">Skin Color:</span> {{ person.skinColor }}
      </p>
      <p>
        <span class="listItem-Header">Homeworld: </span>
        <template v-if="person.homeworld.name !== 'unknown'">
          <NuxtLink class="text-blue-700 font-semibold" :to="`/planets/${person.homeworld.id}`">
            {{ person.homeworld.name }}
          </NuxtLink>
        </template>
        <template v-else>
          <span>unknown</span>
        </template>
      </p>
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
