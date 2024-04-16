<script setup lang="ts">
defineProps<{ content?: JSON }>()
const { data } = await useFetch('/api/fetchEvents')
</script>

<template>
  <div class="bg-cover bg-center agenda-bg">
    <div class="bg-gray-900 bg-opacity-70">
      <ULandingSection
        id="news"
        :headline="content.headline"
        :title="content.title"
        :description="content.description"
        :ui="{
          container: 'text-white', headline: 'text-white', title: 'text-white', description: 'text-white',
        }"
        class="m-5"
      >
        <template v-if="data.pagination['object_count'] == 0">
          <UAlert
            :icon="content.message.empty.icon"
            :ui="{ wrapper: 'w-3/6' }"
            :title="content.message.empty.title"
            :description="content.message.empty.description"
            color="red"
            variant="solid"
            class="ml-auto mr-auto"
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
