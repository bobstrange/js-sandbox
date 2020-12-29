<template>
  <div class="antialiased text-gray-900">
    <Navbar />
    <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
      <PropertyCard :property="items[0]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { data, DummyData } from './dummy'
import PropertyCard from './components/PropertyCard.vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const items = reactive<DummyData[]>(data)
    return { items }
  },
  components: { PropertyCard, Navbar }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
