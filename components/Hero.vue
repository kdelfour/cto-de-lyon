<template>
  <div class="w-full h-full bg-cover bg-center hero-bg">
    <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-20">
      <ULandingHero
        :links="[{ label: 'Rejoignez nous', icon: 'i-heroicons-hand-thumb-up', size: 'lg', to: '#joinUs' }]"
        orientation="horizontal"
      >
        <template #description>
          <h1 class="text-white font-black text-7xl">
            CTO de Lyon 🚀
          </h1>
          <p class="text-white">
            Rejoignez une communauté dynamique de leaders technologiques qui façonnent l'avenir à travers collaboration
            et innovation. Élargissez votre réseau, partagez vos idées, et avancez dans votre carrière au sein d'un
            écosystème vibrant et soutenant.
          </p>
        </template>
        <template #default>
          <NuxtImg src="logo.png" alt="Logo" provider="static" />
        </template>
      </ULandingHero>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: url('~/assets/images/bg.png');
}
</style>
