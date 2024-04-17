<script setup lang="ts">
defineProps<{ content?: JSON }>()
</script>

<template>
  <div class="w-full h-full bg-cover bg-center hero-bg">
    <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-20">
      <ULandingHero :links="content.links" orientation="horizontal">
        <template #description>
          <h1 class="text-white font-black text-7xl mb-5">
            {{ content.title }}
          </h1>
          <p class="text-white">
            {{ content.description }}
          </p>
        </template>
        <template #default>
          <img src="~/assets/images/logo.png" alt="Logo">
        </template>
      </ULandingHero>
    </div>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: url('~/assets/images/bg.webp');
}
</style>
