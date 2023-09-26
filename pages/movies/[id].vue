<template>
  <div class="movie">
    <div v-if="loading">
      <Loading></Loading>
    </div>
    <div v-else>
    <h1 class="page-header">{{ film?.title }}</h1>
      <p>Release Date: {{ film?.releaseDate }}</p>
      <p>Director: {{ film?.director }}</p>
      <div>Producers: 
        <span v-for="producer, index in producers" :key="producer">
          {{ producer }} <span v-if="index < producers.length - 1">, </span>
        </span>
      </div>
      <h4 class="my-5">Opening Crawl</h4>
      <p>{{ text }} <span class="text blinking-element"></span></p>
      <Btn @click="regenerateText">Regenerate Crawl</Btn>
    </div>
  </div>
</template>

<script setup>
import { getFilm } from '@/service/apiService'
const idParam = useRoute().params.id
const film = ref()
const producers = ref([])
const openingCrawl = ref(null)
const text = ref('')
const textIndex = ref(0)
const loading = ref(true)
let interval

const typeAnimation = () => {
  interval = setInterval(() => {
    text.value += openingCrawl.value[textIndex.value]
    textIndex.value ++
    if (textIndex.value >= openingCrawl.value.length) clearInterval(interval)
  }, 40)
}

const regenerateText = () => {
  clearInterval(interval)
  text.value = ''
  textIndex.value = 0
  typeAnimation()
}

onMounted(async () => {
  try {
    const response = await getFilm(idParam).then(data => data.film)
    film.value = response
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
  producers.value = film.value.producers
  openingCrawl.value = film.value.openingCrawl
  typeAnimation()
})

</script>

<style scoped>
.movie {
  @apply w-full;
}
.text {
  @apply ml-[2px] border-solid border-r-[1px];
}

.blinking-element {
  animation: blink .8s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>