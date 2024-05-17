<script setup>
const publications = await useGetPublications();
</script>
<template>
  <div class="work-bio">
    <Bio :publications="publications" />
    <Work />
  </div>
  <CompanyStrip />
</template>
