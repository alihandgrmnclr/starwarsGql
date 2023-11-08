<template>
  <div class="navbar">
    <NuxtLink to="/">
      <img class="navbar_img" src="/images/starwars_logo.png" alt="">
    </NuxtLink>
    <div class="navbar_links">
      <NuxtLink class="link" to="/movies">Movies</NuxtLink>
      <NuxtLink class="link" to="/people">Characters</NuxtLink>
      <NuxtLink class="link" to="/vehicles">Vehicles</NuxtLink>
      <NuxtLink class="link" to="/starships">Starships</NuxtLink>
      <NuxtLink class="link" to="/planets">Planets</NuxtLink>
    </div>
    <NuxtLink class="link" to="/settings">Settings</NuxtLink>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @apply flex flex-col sm:flex-row h-[140px] justify-around items-center gap-1 mt-[40px] mb-[40px];
  
  &_img {
    @apply w-[240px]
  }
  &_links {
    @apply flex gap-2 mt-4 sm:mt-0 sm:gap-3;
  }
  .link {
    @apply  md:text-2xl text-sm;
  }
  .router-link-active {
    @apply underline underline-offset-2;
  }
}
</style>