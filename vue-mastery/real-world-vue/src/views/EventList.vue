<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { EventService } from '@/services/EventService'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    new EventService()
      .getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style></style>
