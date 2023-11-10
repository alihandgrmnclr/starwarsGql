<template>
  <div>
    <div>
      <span class="listItem-Header">
        {{ label }}:
      </span>
      <span>
        <template v-if="link">
          <NuxtLink class="text-blue-700 font-semibold" :to="link">{{ value || 'unkown' }}</NuxtLink>
        </template>
        <template v-else>
          <span>
            {{ value || 'unkown' }}
            <slot name="suffix">
              {{ suffix }}
            </slot>
          </span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup>
const { label, value, suffix, link } = defineProps(["label", "value", "suffix", "link"])
</script>
