<template>
  <div>
    <div class="container">
      <div class="handle" @click="toggleSaber"></div>
      <div v-if="showSaber" class="light-saber"></div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps(['saberLength', 'saberColor'])
const showSaber = ref(true)
const saberColor = ref(props.saberColor)

const toggleSaber = () => {
  showSaber.value = !showSaber.value
}

watch(() => props.saberColor, (newColor) => {
  saberColor.value = newColor
})
</script>
<style scoped>

.container {
  @apply flex h-[100px] justify-start items-center relative z-[1];
}
.handle {
  @apply cursor-pointer w-[104px] h-[436px] z-10 rotate-90;
  background-image: url(/images/saber1.png);
  filter: brightness(0.75)
}

.light-saber {
  @apply absolute ml-[180px] mt-2 rounded-full h-[46px] bg-white;
  box-shadow: 0 0 5px v-bind(saberColor), 0 0 25px v-bind(saberColor), 0 0 50px v-bind(saberColor),
  0 0 100px v-bind(saberColor);
  animation: ignite 0.2s ease-in-out forwards;
}

@keyframes ignite {
  0% {
    @apply opacity-0 w-0;
  }
  100% {
    @apply opacity-100 w-[v-bind(saberLength)];
  }
}
</style>
