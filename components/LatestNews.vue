<template>
  <div class="w-full h-full bg-cover bg-center agenda-bg">
    <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-70">
      <ULandingSection
        id="news"
        headline="Les prochains rendez-vous"
        title="Ne manquez pas nos rendez-vous à venir!"
        description="Participez à nos événements, nos ateliers interactifs, et nos soirées de networking. Chaque événement est une chance de renforcer votre réseau et d'approfondir vos connaissances. Inscrivez-vous dès maintenant pour garantir votre place!"
        :ui="{container: 'text-white', headline: 'text-white'}"
      >
        <UAlert
          icon="i-heroicons-calendar-days"
          color="red"
          variant="subtle"
          class="ml-auto mr-auto"
          :ui="{wrapper:'w-3/6'}"
          title="Cher agenda, à quand le prochain rendez-vous?"
          description="Pour l'instant, nos calendriers prennent un petit bain de détente ! Pas d'événements planifiés à l'horizon, mais ne vous inquiétez pas, nous sommes en train de concocter des rencontres qui seront à la hauteur de vos attentes. Restez connectés, de nouvelles dates seront annoncées bientôt – parce que même nos agendas ont droit à un peu de suspense !"
        />
        <span class="text-center" />
      </ULandingSection>
    </div>
  </div>
</template>

<style scoped>
.agenda-bg {
  background-image: url('~/assets/images/illustration-agenda.png');
}
</style>
