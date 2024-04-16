<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>

<template>
  <ULandingSection :headline="content.headline" :title="content.title">
    <template #description>
      <div v-for="(description, index) of content.description" :key="index" class="mb-2">
        <p class="mb-2" v-html="description.paragraph" />
      </div>
    </template>
  </ULandingSection>
</template>
