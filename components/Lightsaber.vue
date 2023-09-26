<template>
  <div>
    <div class="container">
      <div class="handle" @click="toggleSaber"></div>
      <div v-if="showSaber" class="light-saber"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['color'])
const showSaber = ref(false)
const saberColor = ref('#03e9f4')
const toggleSaber = () => {
  showSaber.value = !showSaber.value
}

onMounted(() => {
  props.color === 'red'  ? saberColor.value = '#03e9f4' : saberColor.value = '#e9033f' 
})
</script>
<style scoped>

.container {
  @apply flex justify-start h-[100px] items-center relative;
}
.handle {
  @apply cursor-pointer w-[240px] h-[900px] z-10 rotate-90 scale-[0.1];
  @apply sm:scale-[0.25];
  background-image: url(/images/saber.png);
}

.light-saber {
  @apply absolute mt-2 ml-[150px] rounded-xl h-2 bg-white;
  @apply sm:ml-[210px] sm:h-[22px] sm:mt-3;
  box-shadow: 0 0 5px v-bind(saberColor), 0 0 25px v-bind(saberColor), 0 0 50px v-bind(saberColor),
  0 0 100px v-bind(saberColor);
  animation: ignite 0.2s ease-in-out forwards;
}

@keyframes ignite {
  0% {
    @apply opacity-0 w-0;
  }
  100% {
    @apply opacity-100 w-[45vw] max-w-[800px];
  }
}
</style>
