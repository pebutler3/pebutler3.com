<template>
  <Nav :avatar="state.github?.avatar" :githubProfileUrl="state.github?.profileUrl" />
  <div class="work-bio">
    <Bio
      :publicRepos="state.github?.publicRepos"
      publicReposUrl="https://github.com/pebutler3?tab=repositories"
    >
      <div class="recent-articles">
        <h2>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            </path>
          </svg>
          Recent Articles
        </h2>
        <ul class="articles">
          <li v-for="article in articles" :key="article.id">
            <ArticleLink :url="article.url" :title="article.title" />
          </li>
        </ul>
        <hr />
        <Projects />
      </div>
    </Bio>
    <Work />
  </div>
  <Flyout :isOpen="state.flyoutOpen" @close="closeFlyout">
    <ul>
      <li><a href="#">Link #1</a></li>
      <li><a href="#">Link #2</a></li>
      <li><a href="#">Link #3</a></li>
    </ul>
  </Flyout>
</template>

<script>
import { onMounted, reactive } from 'vue';
import ArticleLink from './components/ArticleLink.vue';
import Nav from './components/Nav.vue';
import Work from './components/Work.vue';
import Bio from './components/Bio.vue';
import Flyout from './components/Flyout.vue';
import Projects from './components/Projects.vue';

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

export default {
  components: {
    ArticleLink,
    Nav,
    Work,
    Bio,
    Flyout,
    Projects,
  },

  setup() {
    const state = reactive({
      flyoutOpen: false,
    });

    const closeFlyout = () => state.flyoutOpen = !state.flyoutOpen;

    onMounted(async () => {
      const res = await fetch('https://api.github.com/users/pebutler3');
      const data = await res.json();
      state.github = {
        avatar: data.avatar_url,
        publicRepos: data.public_repos,
        profileUrl: data.html_url,
      }
    });

    return {
      state,
      articles,
      closeFlyout,
    }
  }
}
</script>

<style>

:root {
  --extra-lightgrey: #f9f9f9;
  --hr-height: 2px;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  margin: 0;
}

hr {
  background-color: black;
  border: 0;
  height: var(--hr-height);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.work-bio {
  display: flex;
  flex-direction: column;
}

@media (min-width: 500px) {

  .work-bio {
    flex-direction: row;
  }
}

.work {
    flex: 1;
}

/* utilities */
.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

</style>
