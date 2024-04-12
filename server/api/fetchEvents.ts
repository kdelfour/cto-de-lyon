const runtimeConfig = useRuntimeConfig()

const token = runtimeConfig.EVENTBRITE_TOKEN
const orgId = runtimeConfig.EVENTBRITE_ORG_ID

const url = `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/?status=live`

export default defineEventHandler(() =>
  $fetch(url, {
    method: 'GET',
    watch: false,
    headers: {
      authorization: `Bearer ${token}`
    }
  }).catch(error => console.error(error))
)
