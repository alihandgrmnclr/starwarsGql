<template>
  <div class="darthvader">
    <img class="darthvader_char" src="/images/darthvader.png" alt="">
    <Lightsaber
      class="darthvader_saber"
      color="red"
      style="transform: rotate(195deg)"
      saber-length="280px"
    >
    </Lightsaber>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.darthvader {
  @apply w-[350px] relative hidden sm:flex;
  &_saber {
    @apply absolute top-[140px] right-[50%];
    scale: .75; 
  }
}
</style>