<script setup>
const publications = await useGetPublications();
</script>

<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="publication in publications.edges">
      <NuxtLink :href="`/blog/${publication.node.slug}`">{{ publication.node.title }}</NuxtLink>
    </li>
  </ul>
</template>
