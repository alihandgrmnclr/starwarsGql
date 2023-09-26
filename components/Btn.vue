<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.btn {
  @apply my-2 bg-yellow-400 hover:bg-yellow-500 rounded-full p-4 text-black uppercase;
}
</style>