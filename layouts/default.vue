<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

useAppConfig()

useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' }
  ],
  title: 'CTO de Lyon',
  script: [
    {
      innerHTML: '(function(d, w, c) { w.BrevoConversationsID = "65d06b6dcede7a2bf61e1f6f"; w[c] = w[c] || function() { (w[c].q = w[c].q || []).push(arguments); }; var s = d.createElement("script"); s.async = true; s.src = "https://conversations-widget.brevo.com/brevo-conversations.js"; if (d.head) d.head.appendChild(s); })(document, window, "BrevoConversations");',
      body: true
    }
  ]
})
</script>

<template>
  <main>
    <Header />
    <slot />

    <Footer />
    <SpeedInsights />
  </main>
</template>
