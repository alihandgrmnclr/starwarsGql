<template>
  <div class="navbar">
    <NuxtLink to="/">
      <img class="navbar_img" src="/images/starwars_logo.png" alt="">
    </NuxtLink>
    <div class="navbar_links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/people">Characters</NuxtLink>
      <NuxtLink to="/vehicles">Vehicles</NuxtLink>
      <NuxtLink to="/starships">Starships</NuxtLink>
      <NuxtLink to="/planets">Planets</NuxtLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>


.navbar {
  @apply flex flex-col sm:flex-row justify-around items-center gap-1 mt-[50px] mb-12;
}

.navbar_img {
  @apply w-[240px]
}

.navbar_links {
  @apply flex gap-2 text-xs mt-4 sm:mt-0 sm:gap-3 sm:text-base;
}

a {
  @apply text-white font-bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.router-link-active {
  @apply underline underline-offset-2;
}

</style>