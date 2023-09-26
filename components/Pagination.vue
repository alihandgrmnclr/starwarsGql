<template>
  <div class="paginator">
    <div class="card">
      <Paginator
        :rows="20"
        :totalRecords="totalAmount"
      >
      </Paginator>
    </div>
  </div>
</template>

<script setup>
import Paginator from "primevue/paginator"

const props = defineProps(['amount'])
const totalAmount = ref(null)

onMounted(() => {
  totalAmount.value = props.amount
})

</script>

<style scoped>
.paginator {
  @apply flex justify-center;
}
:deep(.p-paginator) {
  @apply bg-transparent;
}
</style>
