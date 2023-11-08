<template>
  <div class="darthvader">
    <img class="darthvader_char" src="/images/darthvaderStand.png" @load="imageLoaded" alt="darthvader">
    <Lightsaber
      class="darthvader_saber"
      v-if="isLoadedImg"
      :saberColor="darthSaberColor"
      saber-length="1080px"
    >
    </Lightsaber>
  </div>
</template>

<script setup>
const isLoadedImg = ref(false)
const darthSaberColor = localStorage.getItem('darthSaberColor') || '#e9033f'

const imageLoaded = () => {
  isLoadedImg.value = true
}
</script>

<style lang="scss" scoped>
.darthvader {
  @apply relative hidden scale-50 xs:flex sm:scale-[0.8] lg:scale-[1] lg:ml-32;
  &_char {
    @apply w-[250px] pointer-events-none z-10;
  }
  &_saber {
    @apply absolute top-[515px] left-[45%] rotate-[160deg] scale-[0.4];
  }
}
</style>