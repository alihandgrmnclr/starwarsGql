<template>
  <div class="darthvader">
    <img class="darthvader_char" src="/images/darthvader.png" alt="">
    <Lightsaber
      class="darthvader_saber"
      color="red"
      style="transform: rotate(200deg)"
    >
    </Lightsaber>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.darthvader {
  @apply w-full relative hidden sm:flex;
  &_char {
    @apply absolute right-0;
  }
  &_saber {
    @apply absolute right-72 top-52;
  }
}
</style>