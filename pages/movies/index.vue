<template>
  <Head>
    <Title>Star Wars | Movies</Title>
  </Head>
  <div class="page">
    <h1 class="page-header">Movies</h1>
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div class="listItem" v-else>
      <template v-for="movie in movies" :key="movie">
        <div>
          <NuxtLink :to="`movies/${movie.id}`" class="movie_link">
            <p class="listItem">{{ movie.title }}, {{ movie.releaseDate }}</p>
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
  @apply inline-block;
}

</style>