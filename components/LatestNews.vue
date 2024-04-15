<script setup lang="ts">
const { data } = await useFetch('/api/fetchEvents')
</script>

<template>
  <div class="bg-cover bg-center agenda-bg">
    <div class="bg-gray-900 bg-opacity-70">
      <ULandingSection
        id="news"
        headline="Les prochains rendez-vous"
        title="Ne manquez pas nos rendez-vous à venir!"
        class="m-5"
        description="Participez à nos événements, nos ateliers interactifs, et nos soirées de networking. Chaque événement est une chance de renforcer votre réseau et d'approfondir vos connaissances. Inscrivez-vous dès maintenant pour garantir votre place!"
        :ui="{
          container: 'text-white', headline: 'text-white', title: 'text-white', description: 'text-white',
        }"
      >
        <template v-if="data.pagination['object_count'] == 0">
          <UAlert
            icon="i-heroicons-calendar-days"
            color="red"
            variant="solid"
            class="ml-auto mr-auto"
            :ui="{ wrapper: 'w-3/6' }"
            title="Cher agenda, à quand le prochain rendez-vous?"
            description="Pour l'instant, nos calendriers prennent un petit bain de détente ! Pas d'événements planifiés à l'horizon, mais ne vous inquiétez pas, nous sommes en train de concocter des rencontres qui seront à la hauteur de vos attentes. Restez connectés, de nouvelles dates seront annoncées bientôt – parce que même nos agendas ont droit à un peu de suspense !"
          />
        </template>
        <template v-else>
          <ULandingGrid>
            <ULandingCard
              v-for="event in data.events"
              :key="event.id"
              target="_blank"
              :to="event.url"
              class="col-span-6"
            >
              <template #title>
                <NuxtImg sizes="100vw" :src="event.logo.url" />
                <h1 class="text-xl">
                  {{ event.name.text }}
                </h1>
              </template>
              <template #description>
                <em>
                  Le {{ new Date(event.start.local).toLocaleDateString('fr-FR') }} à {{ new
                    Date(event.start.local).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}<br>
                  Nombre de place disponible : {{ event.capacity }}
                </em>

                <p class="text-lg my-3">
                  {{ event.description.text }}
                </p>

                <p />
                <UButton block :to="event.url">
                  Réserver ma place
                </UButton>
              </template>
            </ULandingCard>
          </ULandingGrid>
        </template>
      </ULandingSection>
    </div>
  </div>
</template>

<style scoped>
.agenda-bg {
  background-image: url('~/assets/images/illustration-agenda.png');
}
</style>
