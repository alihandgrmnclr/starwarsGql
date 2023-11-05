<template>
  <div class="jedi">
    <img class="jedi_char" src="/images/jedi.png" alt="">
    <Lightsaber
      class="jedi_saber"
      saber-length="1000px"
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
  @apply hidden xs:flex scale-50 relative sm:scale-[.75] xl:scale-100;
  @apply sm:mt-10;
  &_char {
    @apply w-[450px] mt-10 z-10 pointer-events-none;
  }
  &_saber {
    @apply absolute top-[300px] right-[-13px] sm:top-[448px] sm:right-[8px] scale-[0.4] sm:scale-[0.5] rotate-[290deg];
  }
}
</style>