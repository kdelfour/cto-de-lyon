<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <div id="home">
    <Hero v-if="page && page.sections.hero" :content="page.sections.hero" />
    <AboutUs v-if="page && page.sections.about" :content="page.sections.about" />
    <Team v-if="page && page.sections.team" :content="page.sections.team" />
    <Services v-if="page && page.sections.services" :content="page.sections.services" />
    <Events v-if="page && page.sections.events" :content="page.sections.events" />
    <Register v-if="page && page.sections.register" :content="page.sections.register" />
    <Rules v-if="page && page.sections.rules" :content="page.sections.rules" />
    <ContactUs v-if="page && page.sections.contact" :content="page.sections.contact" />
  </div>
</template>
