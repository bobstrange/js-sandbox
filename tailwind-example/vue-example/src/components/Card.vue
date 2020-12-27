<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img :src="item.image" alt="" class="h-32 w-32 flex-shrink-0" />
    <div class="px-6 py-4">
      <p class="text-md">{{ item.text }}</p>
      <ul>
        <li
          class="rounded bg-indigo-400 px-2 inline-block ml-2 text-sm text-white"
          v-for="tag of item.tags"
          :key="tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { DummyData } from '../dummy'

export default defineComponent({
  setup(props) {
    const item = computed(() => props.data)
    return { item }
  },
  props: {
    data: {
      type: Object as PropType<DummyData>,
      required: true
    }
  }
})
</script>

<style scoped></style>
