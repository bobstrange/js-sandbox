<template>
  <div id="app">
    <div
      class="bg-gray-200 min-h-screen p-8 flex items-center justify-center"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { data, DummyData } from './dummy'

export default defineComponent({
  name: 'App',
  setup() {
    const items = reactive<DummyData[]>(data)
    return { items }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
