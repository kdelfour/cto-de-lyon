<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>
<template>
  <ULandingSection id="services" title="Ce que nous offrons" align="right" :features="content.features">
    <img
      src="~assets/images/illustration-offer.webp"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      sizes="75vw sm:50vw"
    >
    <template #description>
      <div v-for="(description, index) of content.description" :key="index" class="mb-2">
        <p class="mb-2" v-html="description.paragraph" />
      </div>
    </template>
  </ULandingSection>
</template>
