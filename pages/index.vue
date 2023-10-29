<template>
  <div>
    <DarthVader></DarthVader>
    <div class="information">
      <h1 class="information_header"></h1>
      <p class="information_text">Welcome to a galaxy far, far away, where you can step into the Star Wars universe! 
        This project allows you to explore the Star Wars universe using the 
        <a href="http://https://studio.apollographql.com/public/star-wars-swapi/variant/current/home" target="_blank" rel="noopener noreferrer">Apollo GraphQL API</a>. 
        The application on the  main page lets you discover some of the most iconic elements of the Star Wars universe, including 
        Jedi knights, Sith Lords, distant planets, and legendary starships. Feel the Force and dive deep into the world of Star Wars.</p>
        <p class="mt-5">May the Force be with you!</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.information {
  @apply mt-10 w-full sm:w-[60%];
  &_header {
    @apply text-xl font-semibold; 
  }
  &_text {
    @apply mt-4;
  }
}
</style>
