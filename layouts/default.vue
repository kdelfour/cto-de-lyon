<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
useAppConfig()
</script>

<template>
  <main>
    <Header />
    <slot />

    <Footer />
    <SpeedInsights />
  </main>
</template>
