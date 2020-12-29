<template>
  <div class="max-w-md">
    <div class="relative pb-5/6">
      <img
        class="absolute bottom-0 h-full w-full object-cover rounded-lg shadow-md"
        :src="property.image"
        :alt="property.image"
      />
    </div>
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h4 class="font-semibold text-lg text-gray leading-tight truncate">
          {{ property.text }}
        </h4>
        <ul class="mt-1">
          <li class="inline" v-for="(tag, i) in property.tags" :key="i">
            <span
              class="inline-block bg-blue-300 text-gray-700 font-semibold text-xs px-2 py-0.5
          rounded-full mr-1"
            >
              {{ tag }}
            </span>
          </li>
        </ul>
        <div class="mt-1">
          <span class="inline-block text-gray-800 font-semibold text-sm">{{
            property.formattedPrice
          }}</span>
          <span class="inline-block ml-1 text-gray-600 text-xs">/ wk</span>
        </div>
        <div class="mt-4">
          <span class="inline-block text-indigo-600 text-sm font-semibold">
            {{ property.rating }}/5 stars
          </span>
          <span class="text-gray-600 text-xs leading-tight">
            (based on {{ property.reviewCount }} reviews and
            {{ property.likes }} likes)</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { DummyData } from '../dummy'

export default defineComponent({
  setup(props) {
    const item = computed(() => props.property)
    return { item }
  },
  props: {
    property: {
      type: Object as PropType<DummyData>,
      required: true
    }
  }
})
</script>

<style scoped></style>
