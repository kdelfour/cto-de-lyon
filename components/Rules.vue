<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>
<template>
  <ULandingSection
    id="rules"
    :title="content.title"
    :features="content.features"
    :ui="{
      wrapper: 'bg-sky-700', container: 'text-white', headline: 'text-white', title: 'text-white', description: 'text-white',
      features: { name: 'text-white', description: 'text-white', icon: { base: 'text-white' } },
    }"
  />
</template>
