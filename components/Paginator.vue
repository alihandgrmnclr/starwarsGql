<template>
  <div class="paginator">
    <button
      class="btn"
      :class="{disabled: pageNumber == 1 || props.isFetching}"
      :disabled="pageNumber == 1 || props.isFetching"
      @click="changePage('first')"
    >
      <span>&lt&lt</span>
    </button>
    <button
      :class="{disabled: pageNumber == 1 || props.isFetching}"  
      :disabled="pageNumber == 1 || props.isFetching"
      @click="changePage('prev')"
      class="btn"
    >
      <span>&lt</span>
    </button>
    <span>Showing {{ fromNumber }} to {{ toNumber }}</span>
    <button
      class="btn"
      :class="{disabled: pageNumber == totalPage || props.isFetching}"
      :disabled="pageNumber == totalPage || props.isFetching"
      @click="changePage('next')"
    >
      <span>&gt</span>
    </button>
    <button
      class="btn"
      :class="{disabled: pageNumber == totalPage || props.isFetching}"
      :disabled="pageNumber == totalPage || props.isFetching"
      @click="changePage('last')"
    >
      <span>&gt&gt</span>
    </button>
  </div>
</template>
<script setup>
const props = defineProps(['amount', 'perPage', 'isFetching'])
const $emits = defineEmits(['changePage', 'setTotalPage'])

const pageNumber = ref(1)
const pageIndex = ref(0)
const totalPage = ref(Math.ceil(props.amount / props.perPage))
const startNumber = ref(1)
const endNumber = ref(props.amount)

const pageObj = computed(() => {
  const page = {
    number: pageNumber.value,
    pageCount: totalPage.value
  }
  return page
}) 

const fromNumber = computed(() => {
  return startNumber.value + (pageIndex.value * props.perPage)
})
const toNumber = computed(() => {
  endNumber.value = fromNumber.value + props.perPage - 1
  if (endNumber.value > props.amount) {
    endNumber.value = props.amount
  }
  return endNumber.value
})

const changePage = (action) => {
  const pageActions = {
    first: firstPage,
    prev: prevPage,
    next: nextPage,
    last: lastPage
  }
  return pageActions[action]()
}
function firstPage () {
  pageNumber.value = 1
  pageIndex.value = 0
  $emits('changePage', pageObj.value)
}
function prevPage () {
  pageNumber.value --
  pageIndex.value --
  $emits('changePage', pageObj.value)
}
function nextPage () {
  pageNumber.value ++
  pageIndex.value ++
  $emits('changePage', pageObj.value)
}
function lastPage () {
  pageNumber.value = totalPage.value
  pageIndex.value = totalPage.value - 1
  $emits('changePage', pageObj.value)
}

</script>
<style scoped>
.paginator {
  @apply flex gap-4 justify-center items-center sm:text-lg;
}
.btn {
  @apply hover:bg-white rounded-full w-12 h-12 hover:border border-blue-400;
}
.disabled {
  @apply text-gray-300 cursor-not-allowed hover:bg-transparent hover:border-0;
}
</style>