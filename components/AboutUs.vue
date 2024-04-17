<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>

<template>
  <ULandingSection id="aboutUs" :title="content.title" align="left">
    <template #description>
      <div v-for="(description, index) of content.description" :key="index" class="mb-2">
        <p class="mb-2" v-html="description.paragraph" />
      </div>
    </template>
    <img
      src="~assets/images/illustration-about.webp"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    >
  </ULandingSection>
</template>
