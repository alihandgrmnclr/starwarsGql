<template>
  <div class="jedi">
    <img class="jedi_char" src="/images/jedi.png" alt="">
    <Lightsaber
      class="jedi_saber"
      saber-length="1200px"
      :saberColor="jediSaberColor"
    >
    </Lightsaber>
  </div>
</template>

<script setup>
const jediSaberColor = localStorage.getItem('jediSaberColor') || '#03e9f4';
</script>

<style lang="scss" scoped>
.jedi {
  @apply relative flex left-[15%];
  @apply sm:left-[10%] sm:mt-10;
  @apply md:left-[15%];
  @apply xl:left-[1%];
  &_char {
    @apply w-[450px] mt-10 z-10 pointer-events-none;
  }
  &_saber {
    @apply absolute top-[268px] left-[69%] scale-[0.3] rotate-[290deg];
  }
}
</style>