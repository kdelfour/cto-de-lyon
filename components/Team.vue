<script setup lang="ts">
const team = [
  {
    name: 'Xavier Gorse ',
    job: 'CEO @ Elao',
    profile: 'https://www.linkedin.com/in/xgorse/',
    icon: 'i-heroicons-user'
  },
  {
    name: 'Xavier Barry',
    job: 'CTO CTPO @ pHack-Man',
    profile: 'https://www.linkedin.com/in/xavierbarry/',
    icon: 'i-heroicons-user'
  },
  {
    name: 'Yann Verneau',
    job: 'Co-founder, CTO @ Co-CTO',
    profile: 'https://www.linkedin.com/in/yann-verneau/',
    icon: 'i-heroicons-user'
  },
  {
    name: 'Hugo Dupré',
    job: 'Co-founder, CEO @ Co-CTO',
    profile: 'https://www.linkedin.com/in/hugodupre/',
    icon: 'i-heroicons-user'
  },
  {
    name: 'Kevin Delfour',
    job: '🚀 Associate Director @ MAX Digital Services Lyon',
    profile: 'https://www.linkedin.com/in/kevindelfour/',
    icon: 'i-heroicons-user'
  }
]
</script>
<template>
  <ULandingSection
    title="L'équipe"
    :ui="{
      wrapper: 'bg-sky-700', container: 'text-white', headline: 'text-white', title: 'text-white', description: 'text-white',
      features: { name: 'text-white', description: 'text-white', icon: { base: 'text-white' } },
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(animator, index) in team"
        v-bind="animator"
        :key="index"
        :title="animator.name"
        :description="animator.job"
        :to="animator.profile"
        :icon="animator.icon"
        target="_blank"
      />
    </UPageGrid>
  </ULandingSection>
</template>
