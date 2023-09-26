<template>
  <div>
    
    <input class="filter" type="text" v-model="filterText" @input="filterData" placeholder="Filter">
  </div>
</template>

<script setup>
const emit = defineEmits('')
const filterText = ref('')

const filterData = () => {

}

</script>

<style scoped>
.filter {
  @apply text-black p-1 rounded-md;
}
</style>