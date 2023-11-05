<template>
    <div class="page">
      <Navbar/>
      <div class="container">
      <slot/>
      <Toggle class="toggle"></Toggle>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar"
</script>

<style scoped>
.page {
  @apply w-full justify-center items-center;
}
.container {
  @apply justify-center w-[80%] mx-auto;
}
.toggle {
  @apply my-2 bottom-0 left-[50%] translate-x-[-50%];
}
</style>