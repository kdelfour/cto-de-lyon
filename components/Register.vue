<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>

<template>
  <ULandingSection
    id="joinUs"
    :headline="content.headline"
    :title="content.title"
    :description="content.description"
    :links="content.links"
    :features="content.features"
  />
</template>
