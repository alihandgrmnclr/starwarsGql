<template>
  <div>
    <div class="information">
      <h1 class="information_header"></h1>
      <p class="information_text">Welcome to a galaxy far, far away, where you can step into the Star Wars universe! 
        This project allows you to explore the Star Wars universe using the 
        <a class="information_link" href="https://studio.apollographql.com/public/star-wars-swapi/variant/current/home" target="_blank" rel="noopener noreferrer">Apollo GraphQL API</a>. 
        The application on the  main page lets you discover some of the most iconic elements of the Star Wars universe, including 
        Jedi knights, Sith Lords, distant planets, and legendary starships. Feel the Force and dive deep into the world of Star Wars.</p>
        <p class="mt-5">May the Force be with you!</p>
        <div class="information_char">
          <DarthVader v-if="dark"></DarthVader>
          <Jedi v-else></Jedi>
        </div>
    </div>
  </div>
</template>

<script setup>
const dark = ref(true)
</script>

<style lang="scss" scoped>
.information {
  @apply mt-10 w-full md:w-[60%];
  &_header {
    @apply text-xl font-semibold; 
  }
  &_text {
    @apply mt-4;
  }
  &_link {
    @apply text-blue-700 font-semibold;
  }
  &_char {
    @apply hidden md:flex sm:absolute top-[15%] right-0 lg:right-[5%];
  }
}
</style>
