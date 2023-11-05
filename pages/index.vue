<template>
  <div class="index page">
    <div class="information">
      <h1 class="information_header"></h1>
      <p class="information_text">Welcome to a galaxy far, far away, where you can step into the Star Wars universe! 
        This project allows you to explore the Star Wars universe using the 
        <a class="information_link" href="https://studio.apollographql.com/public/star-wars-swapi/variant/current/home" target="_blank" rel="noopener noreferrer">Apollo GraphQL API</a>. 
        The application on the  main page lets you discover some of the most iconic elements of the Star Wars universe, including 
        Jedi knights, Sith Lords, distant planets, and legendary starships. Feel the Force and dive deep into the world of Star Wars.</p>
        <p class="mt-[20px]">May the Force be with you!</p>
    </div>
    <div class="char">
      <DarthVader v-if="isDark"></DarthVader>
      <Jedi v-else></Jedi>
    </div>
  </div>
</template>

<script setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<style lang="scss" scoped>
.index {
  .information {
  @apply mt-[40px] w-full lg:w-[500px] xl:w-[650px] sm:text-lg;
  &_header {
    @apply text-xl font-semibold; 
  }
  &_text {
    @apply mt-[20px];
  }
  &_link {
    @apply text-blue-700 font-semibold;
  }
}
  .char {
    @apply hidden right-[10%] top-40;
    @apply sm:flex;
    @apply lg:absolute ;
    @apply lg:left-[40%];
  }
}
</style>
