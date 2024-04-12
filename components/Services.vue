<script setup="ts">
const features = [
  {
    name: 'Événements et Rencontres ',
    description: 'Participez à nos événements réguliers : soirées conviviales, ateliers pratiques et conférences enrichissantes pour partager des expériences et apprendre ensemble.',
    icon: 'i-heroicons-user-group'
  },
  {
    name: 'Partage de Connaissances',
    description: 'Nous encourageons le partage d\'expériences, de stratégies et de défis technologiques, favorisant ainsi un apprentissage continu et une veille technologique active.',
    icon: 'i-heroicons-chat-bubble-left-right'
  },
  {
    name: 'Réseau Professionnel',
    description: 'Accédez à un réseau diversifié de professionnels pour explorer des opportunités de collaboration, de mentorat et d\'évolution de carrière.',
    icon: 'i-heroicons-share'
  },
  {
    name: 'Ambiance Conviviale',
    description: 'Nous croyons en l\'importance de créer des liens dans un cadre détendu et amical, propice au partage et à l\'innovation.',
    icon: 'i-heroicons-face-smile'
  }
]
</script>
<template>
  <ULandingSection id="services" title="Ce Que Nous Offrons" align="right" :features="features">
    <img
      src="~assets/images/illustration-offer.png"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      sizes="75vw sm:50vw"
    >
    <template #description>
      <span>En tant que membre de <b class="text-primary text-2xl">CTO de Lyon</b>, vous bénéficiez d'un cadre où le
        partage de connaissances et l'expérience collective propulsent chacun vers de nouveaux sommets de réussite.
      </span>
    </template>
  </ULandingSection>
</template>
