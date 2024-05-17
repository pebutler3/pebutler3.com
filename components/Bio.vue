<script setup>
defineProps({
  publications: {
    type: Object,
    default: [],
  }
});

const articles = [
  {
    id: 0,
    url: 'https://sparkbox.com/foundry/creating_a_headless_cms_with_graphcms',
    title: 'Going Headless with GraphCMS'
  },
  {
    id: 1,
    url: 'https://sparkbox.com/foundry/build_a_blog_with_gridsome_vue.js_framework_for_JAMstack_apps',
    title: 'Gridsome: Let\'s Build Something!'
  },
];
</script>

<template>
  <div class="wrapper">
    <section class="bio">
      <h2>About</h2>
      <p>With over 11 years of experience, my unwavering commitment to continuous learning has positioned me as a
        consistent and innovative member of numerous teams. From fast-growing startups to social media companies and
        some of the world's most recognizable brands, I've successfully navigated varied environments, always hitting
        the ground running.</p>
      <p><strong>Current Position: </strong>I am a Senior Software Engineer @ Upland with a focus on the front-end.</p>
      <p>Living in <strong>Denver, Colorado</strong></p>
      <h2>Recent Articles</h2>
      <ul>
        <li v-for="article in publications.edges" :key="article.node.id">
          <a :href="`/blog/${article.node.slug}`">{{ article.node.title }}</a>
        </li>
        <li v-for="article in articles" :key="article.id">
          <a :href="article.url">{{ article.title }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
h2 {
  background: black;
  color: white;
  display: inline-block;
  padding: 0.25rem 1rem;
}

.wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;
}

.bio__repos-link {
  padding-right: 0.25rem;
}

ul {
  margin-top: 1rem;
}
</style>
