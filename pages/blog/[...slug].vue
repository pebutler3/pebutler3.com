<script setup>
const post = await useGetPost('6644f2e0c7132af66cb86eca')
</script>

<template>
  <article>
    <h1>{{ post.title }}</h1>
    <section v-html="post.content.html" />
  </article>
</template>

<style>
article {
  max-width: 75%;
  margin: auto;
}

code {
  background: pink;
  padding: 0.25rem 1rem;
  border-radius: 5px;
}
</style>
