<script setup>
const publications = await useGetPublications();
</script>
<template>
  <div class="work-bio">
    <Bio :publications="publications" />
    <Work />
  </div>
  <CompanyStrip />
  <p>Do id consectetur aliquip labore exercitation do non incididunt dolor deserunt velit irure dolor nostrud do. Tempor quis mollit amet. Et deserunt culpa in. Nulla occaecat tempor consectetur commodo Lorem. Do amet Lorem cupidatat irure sunt ullamco elit commodo exercitation. Consectetur pariatur aliquip pariatur Lorem commodo ex dolore laborum voluptate.</p>

  <p>Lorem officia aliquip aliquip irure id exercitation est. Ea qui aliquip sit sit laboris pariatur aliqua elit incididunt eiusmod. Deserunt eiusmod adipisicing culpa adipisicing voluptate consectetur laboris ut. Dolore veniam laboris ullamco aliquip anim fugiat pariatur ipsum mollit occaecat est qui sunt duis laboris. Dolore velit cillum dolor proident anim quis commodo nisi ullamco incididunt ullamco. Incididunt ipsum laborum est sunt officia sunt enim id exercitation. Ea cupidatat ipsum nisi quis ea eu exercitation exercitation. Quis eu do commodo officia ut cillum Lorem magna aliquip.</p>

  <p>Deserunt tempor esse cupidatat quis non tempor aute ut do sunt reprehenderit duis nisi veniam. Culpa pariatur in in adipisicing nisi laborum sit aliqua fugiat duis occaecat. Laboris quis nostrud dolore ut sit proident do enim et aliquip laboris. Ad ipsum ea sunt cillum mollit esse exercitation eu irure id deserunt mollit quis. Consectetur incididunt deserunt Lorem deserunt qui laborum Lorem tempor id deserunt et mollit Lorem commodo.</p>
</template>
