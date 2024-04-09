<script setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

useAppConfig()

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { property: 'og:title', content: 'CTO de Lyon' },
    { name: 'description', content: 'CTO de Lyon' },
    { property: 'og:description', content: 'CTO de Lyon' },
    { property: 'og:url', content: 'https://cto-de-lyon.fr/' },
    { name: 'twitter:title', content: 'CTO de Lyon' },
    { name: 'twitter:description', content: 'CTO de Lyon.' },
    { name: 'twitter:site', content: 'https://cto-de-lyon.fr/' }
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
