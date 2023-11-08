<template>
  <div class="jedi">
    <img class="jedi_char" src="/images/jedi.png" @load="imageLoaded" alt="jedi">
    <Lightsaber
      class="jedi_saber"
      saber-length="1000px"
      :saberColor="jediSaberColor"
    >
    </Lightsaber>
  </div>
</template>

<script setup>
const isLoadedImg = ref(false)
const jediSaberColor = localStorage.getItem('jediSaberColor') || '#03e9f4'

const imageLoaded = () => {
  isLoadedImg.value = true
}
</script>

<style lang="scss" scoped>
.jedi {
  @apply hidden scale-50 relative xs:flex sm:scale-[.75] sm:mt-10 xl:scale-100;
  &_char {
    @apply w-[450px] mt-10 z-10 pointer-events-none;
  }
  &_saber {
    @apply absolute top-[300px] right-[-13px] sm:top-[448px] sm:right-[8px] scale-[0.4] sm:scale-[0.5] rotate-[290deg];
  }
}
</style>