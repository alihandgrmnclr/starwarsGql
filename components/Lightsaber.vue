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
  props.color === 'red'  ? saberColor.value = '#e9033f' : saberColor.value = '#03e9f4' 
})
</script>
<style scoped>

.container {
  @apply flex justify-start h-[100px] items-center relative;
}
.handle {
  @apply cursor-pointer w-[240px] h-[900px] z-10 rotate-90;
  @apply scale-[0.10];
  /* scale: 0.5; */
  background-image: url(/images/saber.png);
  filter: brightness(0.75)

}

.light-saber {
  @apply absolute ml-[160px] mt-1 rounded-xl h-[9px] bg-white;
  box-shadow: 0 0 5px v-bind(saberColor), 0 0 25px v-bind(saberColor), 0 0 50px v-bind(saberColor),
  0 0 100px v-bind(saberColor);
  animation: ignite 0.2s ease-in-out forwards;
}

@keyframes ignite {
  0% {
    @apply opacity-0 w-0;
  }
  100% {
    @apply opacity-100 w-[300px] max-w-[300px];
  }
}
</style>
