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
  @apply w-full my-2 bg-orange-400 hover:bg-orange-500 rounded-full p-4 text-black uppercase;
}
</style>