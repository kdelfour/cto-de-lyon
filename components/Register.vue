<script setup lang="ts">
const cta = [{
  label: 'S\'inscrire à notre newsletter',
  size: 'lg',
  'trailing-icon': 'i-heroicons-envelope-open',
  to: 'https://c26d9167.sibforms.com/serve/MUIFAPgUD9FAfkc4JDaYrcZbkyKrW6GbFnompG_YTmE1vJKCdVp6NeNXylwurQqNu8_zTdsh1HrS4i4GMHZmS1LWb6cbR9lGtlWLiOomcgLxgka1yfmusQeyOgvDLozQFQ86ZXJb1Ay1Bciuki3I06rPQ8STJvLvA8dO5tppCHDl7OWiFpkRxhBxXUCcrbRqjk907gOpx3af23-C'
}]

const contents = [
  {
    name: 'Qui peut rejoindre ?',
    description: 'L\'adhésion est ouverte et gratuite pour les professionnels occupant des postes de direction technique, tels que les CTOs, les Tech Leads, et ceux dans des rôles similaires, qui cherchent à échanger sur des sujets techniques complexes et à rester informés des dernières tendances et innovations dans le domaine de la technologie.'
  },
  {
    name: 'Pourquoi s\'inscrire à notre mailing list ?',
    description: 'En vous inscrivant, vous serez les premiers informés de nos actualités, événements à venir, workshops et rencontres exclusives. C\'est une opportunité unique de vous connecter avec des pairs de votre domaine, d\'élargir votre réseau professionnel et de partager vos connaissances et expériences.'
  },
  {
    name: 'Comment s\'inscrire ?',
    description: 'Si vous êtes un CTO, un Tech Lead, ou si vous occupez une position similaire dans le domaine de la technologie et que vous souhaitez rejoindre une communauté de pairs dédiée, nous vous invitons à vous inscrire à notre mailing list. Merci de préciser votre poste actuel et votre domaine d\'expertise lors de l\'inscription afin de faciliter la vérification de votre éligibilité.'
  }
]
</script>

<template>
  <ULandingSection
    id="joinUs"
    headline="Rejoignez-Nous !"
    title="Devenez Membre"
    description="Que vous soyez un CTO expérimenté, en début de carrière, ou un professionnel tech aspirant à un rôle de leadership, &quot;CTO de Lyon&quot; est votre communauté. Suivez notre page pour rester informé de nos événements et activités."
    :links="cta"
    :features="contents"
  />
</template>
