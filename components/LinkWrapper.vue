<script setup>
const props = defineProps({
  title: {
    default: '',
    required: false,
    type: string,
  }
})
</script>
<template>
  <NuxtLink></NuxtLink>
</template>
