<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>
<template>
  <ULandingSection
    :title="content.title"
    :ui="{
      wrapper: 'bg-sky-700', container: 'text-white', headline: 'text-white', title: 'text-white', description: 'text-white',
      features: { name: 'text-white', description: 'text-white', icon: { base: 'text-white' } },
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(animator, index) in content.team"
        v-bind="animator"
        :key="index"
        :title="animator.name"
        :description="animator.job"
        :to="animator.profile"
        :icon="animator.icon"
        :ui="{ title: 'text-2xl text-center' }"
        target="_blank"
      />
    </UPageGrid>
  </ULandingSection>
</template>
