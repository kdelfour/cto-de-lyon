<script setup="ts">
const contents = [
  { name: 'Respect et courtoisie', description: 'Faites preuve de respect et de courtoisie envers tous. Les discussions doivent rester cordiales, même en cas de désaccord.' },
  { name: 'Pas de publicité', description: 'La promotion de produits ou services commerciaux n\'est pas autorisée. Les contrevenants seront exclus.' },
  { name: 'Contenu pertinent', description: 'Assurez-vous que tout le contenu partagé est pertinent pour le sujet du management collaboratif.' },
  { name: 'Pas de spam', description: 'Évitez les publications en série ou répétitives. Les membres fautifs seront supprimés.' },
  { name: 'Confidentialité et vie privée', description: 'Respectez la vie privée des autres membres. Ne partagez pas d\'informations personnelles sans le consentement explicite des intéressés.' },
  { name: 'Modération', description: 'Les modérateurs se réservent le droit de retirer tout contenu ou membre qui enfreint ces règles.' }]
</script>
<template>
  <ULandingSection
    id="rules"
    title="Nos règles"
    :features="contents"
    :ui="{
      wrapper: 'bg-sky-700', container: 'text-white', headline: 'text-white', title: 'text-white', description: 'text-white',
      features: { name: 'text-white', description: 'text-white', icon: { base: 'text-white' } },
    }"
  />
</template>
