<template>
  <aside v-if="isOpen">
    <h1>This is the flyout!</h1>
    <button @click="$emit('close')">Close X</button>
    <slot />
  </aside>
</template>

<script setup>
emits: ['close'];

defineProps({
  isOpen: false,
});
</script>


<style scoped>
aside {
  background-color: black;
  color: white;
  height: 100%;
  position: absolute;
  top: 0;
  min-width: 20rem;
}

button {
  position: absolute;
  right: -60px;
  top: 0;
  background-color: black;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
}

</style>
