<template>
  <div class="container flex">
    <div>
      <div class="max-w-md px-4 py-4 mx-auto object-center">
        <h1 class="text-xl text-gray-900">Cute pets</h1>
        <p class="text-gray-600">Here are very cute dogs there :-p</p>
        <ul>
          <li v-for="item in items" :key="item.id">
            <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
              <Card :data="item" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { data, DummyData } from './dummy'
import Card from './components/Card.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const items = reactive<DummyData[]>(data)
    return { items }
  },
  components: { Card }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
