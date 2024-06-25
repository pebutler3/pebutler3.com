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
      <p><strong>Current Position: </strong>I am a Senior Software Engineer on the Kapost Team @ Upland with a focus on
        the front-end.</p>
      <p>Living in <strong>Denver, Colorado</strong></p>
      <div class="recent-articles">
        <div class="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="https://noodles-ui.vercel.app">Noodles UI</a>
              <span class="label label--beta"><em>Beta</em></span>
            </li>
          </ul>
        </div>
        <h2>Recent Articles</h2>
        <ul>
          <li v-for="(article, i) in publications.edges" :key="article.node.id">
            <a :href="`/blog/${article.node.slug}`">{{ article.node.title }}</a>
            <span class="label label--latest" v-if="i === 0">Latest</span>
          </li>
          <li v-for="article in articles" :key="article.id">
            <a :href="article.url">{{ article.title }}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
h2 {
  background-color: black;
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
  margin: 1rem 0;
}

li {
  align-items: center;
  display: flex;
}

li span {}

li a {
  border-bottom: 1px solid;
  margin: 0.25rem 0;
  text-decoration: none;
}

.recent-articles {
  background-color: var(--lighter-purple);
  border-radius: 5px;
  padding: 1rem;
}

.label {
  font-size: 10px;
  font-weight: bold;
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  width: auto;
}

.label--latest {
  background-color: var(--light-purple);
  border-radius: 5000px;
  color: purple;
}

.label--beta {
  background-color: var(--bright-blue);
  border-radius: 5000px;
  color: purple;
}
</style>
