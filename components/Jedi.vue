<template>
  <div class="jedi">
    <img class="jedi_char" src="/images/jedi.png" alt="">
    <Lightsaber
      class="jedi_saber"
      style="transform: rotate(255deg)"
      saber-length="220px"
    >
    </Lightsaber>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.jedi {
  @apply w-full relative hidden sm:flex;
  &_char {
    @apply w-[350px];
  }
  &_saber {
    @apply absolute top-[200px] right-[120px] scale-90;
  }
}
</style>