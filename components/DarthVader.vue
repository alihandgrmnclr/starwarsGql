<template>
  <div class="darthvader">
    <img class="darthvader_char" src="/images/darthvaderStand.png" alt="">
    <Lightsaber
      class="darthvader_saber"
      :saberColor="darthSaberColor"
      saber-length="1080px"
    >
    </Lightsaber>
  </div>
</template>

<script setup>
const darthSaberColor = localStorage.getItem('darthSaberColor') || '#e9033f';
</script>

<style lang="scss" scoped>
.darthvader {
  @apply relative flex left-[35%];
  @apply sm:scale-[0.8] sm:left-[35%];
  @apply lg:scale-[1] lg:left-[5%] lg:ml-32;
  &_char {
    @apply w-[250px] pointer-events-none z-10;
  }
  &_saber {
    @apply absolute top-[515px] left-[45%] rotate-[160deg] scale-[0.4];
  }
}
</style>w