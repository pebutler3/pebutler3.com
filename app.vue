<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>

<style>
:root {
  --hr-height: 2px;

  /* colors */
  --extra-lightgrey: #f9f9f9;
  --light-purple: #ffa6ff;
  --lighter-purple: #ffa6ff7a;
  --bright-blue: #00e7ff;
}

body {
  margin: 0;
}

#__nuxt {
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

@media(min-width: 500px) {

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
