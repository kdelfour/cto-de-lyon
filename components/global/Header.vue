<script setup lang="ts">
const links = [{
  label: 'Qui sommes nous ?',
  icon: 'i-heroicons-book-open',
  to: '#aboutUs'
}, {
  label: 'Ce Que Nous Offrons',
  icon: 'i-simple-icons-stackblitz',
  to: '#services'
}, {
  label: 'Les prochains rendez-vous',
  icon: 'i-heroicons-map',
  to: '#news'
}, {
  label: 'Rejoignez nous',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '#joinUs'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      CTO de Lyon
    </template>

    <template #right>
      <UButton icon="i-heroicons-envelope-open" label="S'inscrire" to="https://c26d9167.sibforms.com/serve/MUIFAPgUD9FAfkc4JDaYrcZbkyKrW6GbFnompG_YTmE1vJKCdVp6NeNXylwurQqNu8_zTdsh1HrS4i4GMHZmS1LWb6cbR9lGtlWLiOomcgLxgka1yfmusQeyOgvDLozQFQ86ZXJb1Ay1Bciuki3I06rPQ8STJvLvA8dO5tppCHDl7OWiFpkRxhBxXUCcrbRqjk907gOpx3af23-C" />
      <UColorModeButton />
    </template>
  </UHeader>
</template>
