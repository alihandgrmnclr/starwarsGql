<template>
  <div>
    <h1 class="page-header">Movies</h1>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
      <template v-for="movie in movies" :key="movie">
        <div>
          <NuxtLink :to="`movies/${movie.id}`" class="movie_link">
            <p>{{ movie.title }}, {{ movie.releaseDate }}</p>
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { getAllFilms } from '@/service/apiService'

const movies = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await getAllFilms().then(data => data.allFilms.films)
    movies.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false  
  }
})
</script>

<style scoped>
.movie_link {
  text-decoration: none;
  color: white;
  font-weight: 600;
  display: inline-block;
}

</style>