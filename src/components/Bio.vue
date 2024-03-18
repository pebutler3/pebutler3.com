<template>
  <div class="wrapper">
    <section class="bio">
      <h2>About</h2>
      <p>With over 11 years of experience, my unwavering commitment to continuous learning has positioned me as a consistent and innovative member of numerous teams. From fast-growing startups to social media companies and some of the world's most recognizable brands, I've successfully navigated varied environments, always hitting the ground running.</p>
      <p><strong>Current Position: </strong>I am a Senior Software Engineer @ Upland with a focus on the front-end.</p>
      <p>Living in <strong>Denver, Colorado</strong></p>
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
  flex: 1;
  flex-direction: column;
  padding: 2rem;
}

.bio__repos-link {
    padding-right: 0.25rem;
}
</style>
