<template>
  <div class="page">
    <Navbar/>
    <div class="container">
      <slot/>
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
</style>