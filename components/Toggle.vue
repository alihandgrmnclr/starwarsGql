<template>
  <div>
    <div class="toggle" :class="[isDark ? 'bg-slate-700 toggle_dark' : 'bg-white']">
      <div class="toggler" :class="[isDark ? 'toggler_dark' : 'toggler_light']"></div>
      <button class="toggle_input" @click="toggleDark()"></button>
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<style lang="scss" scoped>
.toggle {
  @apply cursor-pointer relative w-24 h-10 rounded-full z-20;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &_dark {
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.25),
            0px 0px 25px rgba(255, 255, 255, 0.12),
            0px 0px 25px rgba(255, 255, 255, 0.12),
            0px 0px 25px rgba(255, 255, 255, 0.17),
            0px 0px 25px rgba(255, 255, 255, 0.09);

  }
  &_input {
    @apply opacity-0 absolute top-0 w-full h-full;
  }
  .toggler {
    @apply absolute mx-1 top-1 w-10 h-8 rounded-full;

    &_light {
      @apply translate-x-[48px] bg-center;
      background-image: url(/images/jediLogo.png);
      background-size: 62px;
    }
    &_dark {
      @apply bg-center;
      background-image: url(/images/sithLogo.png);
      background-size: 36px;
    }
  }
}

</style>