// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  routeRules: { '/': { prerender: true } },
  nitro: { preset: 'vercel-edge' },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  colorMode: {
    preference: 'dark'
  },
  ui: {
    global: true,
    icons: ['simple-icons', 'heroicons']
  },
  image: {},
  site: {
    url: 'https://cto-de-lyon.fr/',
    name: 'CTO de Lyon',
    description: 'Une communauté dynamique de leaders technologiques qui façonnent l\'avenir à travers collaboration et innovation',
    defaultLocale: 'fr'
  },
  runtimeConfig: {
    EVENTBRITE_TOKEN: process.env.EVENTBRITE_TOKEN,
    EVENTBRITE_ORG_ID: process.env.EVENTBRITE_ORG_ID
  }
})
