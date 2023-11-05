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
  @apply w-full h-[100vh-40px] justify-center items-center;
}
.container {
  @apply justify-center w-[80%] mx-auto;
}
.toggle {
  @apply sm:absolute my-2 bottom-0 left-[50%] translate-x-[-50%];
}
</style>