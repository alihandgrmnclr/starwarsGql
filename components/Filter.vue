<template>
  <div class="filter">
    <input
      class="filter_input"
      type="text"
      placeholder="Filter"
      :value="modelValue"
      @focusout="closeSearch"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
import { debounce } from 'lodash'

const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['filteredData', 'noResult', 'update:modelValue'])

const filteredData = debounce(() => {
  const searchTerm = props.modelValue.toLowerCase()
  const filteredArray = props.data.filter(item => item.name.toLowerCase().includes(searchTerm))

  if (filteredArray.length < 1) {
    emit('noResult', true)
  } else {
    emit('noResult', false)
    emit('filteredData', filteredArray)
  }
}, 750)

watch(() => props.modelValue, () => {
  filteredData()
})
</script>

<style lang="scss" scoped>
.filter {
  @apply relative;
  &_icon {
    @apply absolute right-0;
  }
  &_input {
    @apply bg-white mb-4 text-black p-1 rounded-md border border-yellow-300;
  }
}

</style>