<template>
  <div class="wrapper">
    <section class="bio">
      <h2>About:</h2>
      <p>I am a Senior Software Engineer @ Upland with a focus on the front-end.</p>
      <p>Living in <b>Denver, Colorado</b> with
        <a class="bio__repos-link" :href="publicReposUrl">{{ publicRepos }}</a>
        <b>Public Repos</b>
      </p>
    </section>
    <slot />
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
  flex-direction: column;
  padding: 2rem;
}

.bio__repos-link {
    padding-right: 0.25rem;
}
</style>
