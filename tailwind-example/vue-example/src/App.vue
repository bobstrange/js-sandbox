<template>
  <div id="app">
    <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
      <PropertyCard :property="items[0]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { data, DummyData } from './dummy'
import PropertyCard from './components/PropertyCard.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const items = reactive<DummyData[]>(data)
    return { items }
  },
  components: { PropertyCard }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
