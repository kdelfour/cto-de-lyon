// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  routeRules: { '/': { prerender: true } },
  nitro: { preset: 'vercel-edge' },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image'],
  colorMode: { preference: 'dark' },
  ui: {
    global: true,
    icons: ['simple-icons', 'heroicons']
  },
  app: {
    head: {
      title: 'CTO de Lyon',
      htmlAttrs: { lang: 'fr' },
      meta: [
        {
          name: 'description',
          content:
            "Une communauté dynamique de leaders technologiques qui façonnent l'avenir à travers collaboration et innovation"
        },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        {
          innerHTML:
            '(function(d, w, c) { w.BrevoConversationsID = "65d06b6dcede7a2bf61e1f6f"; w[c] = w[c] || function() { (w[c].q = w[c].q || []).push(arguments); }; var s = d.createElement("script"); s.async = true; s.src = "https://conversations-widget.brevo.com/brevo-conversations.js"; if (d.head) d.head.appendChild(s); })(document, window, "BrevoConversations");',
          tagPosition: 'bodyClose'
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
      charset: 'utf-8'
    }
  },
  image: {},
  runtimeConfig: {
    EVENTBRITE_TOKEN: process.env.EVENTBRITE_TOKEN,
    EVENTBRITE_ORG_ID: process.env.EVENTBRITE_ORG_ID
  }
})
