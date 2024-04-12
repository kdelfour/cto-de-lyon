// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: { '/': { prerender: true } },
  nitro: { preset: 'vercel-edge' },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image'],
  colorMode: {
    preference: 'dark'
  },
  ui: {
    global: true,
    icons: ['simple-icons', 'heroicons']
  },
  image: {
  },
  runtimeConfig: {
    EVENTBRITE_TOKEN: process.env.EVENTBRITE_TOKEN,
    EVENTBRITE_ORG_ID: process.env.EVENTBRITE_ORG_ID
  }
})
