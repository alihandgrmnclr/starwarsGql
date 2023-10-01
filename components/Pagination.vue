<template>
  <div class="paginator">
    <div class="card">
      <!-- <Paginator
        :rows="20"
        :totalRecords="totalAmount"
        @page="updatePage"
      >
      </Paginator> -->
    <div class="card">
        <Paginator
          :rows="props.perPage" 
          :totalRecords="totalAmount"
          template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          @page="updatePage"
        >
        </Paginator>  
    </div>
    </div>
    </div>


</template>

<script setup>
import Paginator from "primevue/paginator"

const props = defineProps(['amount', 'perPage'])
const $emits = defineEmits(['changePage'])
const totalAmount = ref(null)

onMounted(() => {
  totalAmount.value = props.amount
})

const updatePage = (page) => {
  $emits('changePage', page)
}

</script>

<style scoped>
.paginator {
  @apply flex justify-center mt-20;
}
:deep(.p-paginator) {
  @apply bg-transparent;
}
</style>
