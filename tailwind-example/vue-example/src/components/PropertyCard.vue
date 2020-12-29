<template>
  <div class="bg-white border rounded-lg overflow-hidden max-w-sm">
    <div class="relative bg-red-500 pb-2/3">
      <img
        class="absolute bottom-0 h-full w-full object-cover"
        :src="property.image"
        :alt="property.image"
      />
    </div>
    <div class="p-6">
      <h4 class="font-semibold text-lg text-gray leading-tight truncate">
        {{ property.text }}
      </h4>
      <ul class="text-gray-600 text-xs uppercase tracking-wider mt-1">
        <li v-for="(tag, i) in property.tags" :key="i">
          {{ tag }}
        </li>
      </ul>
      <div>
        {{ property.formattedPrice }}
        <span class="text-gray-600 text-sm">/ wk</span>
      </div>
      <div class="mt-4">
        <span class="text-indigo-600 font-semibold">
          {{ property.rating }}/5 stars
        </span>
        <span class="text-gray-600 text-sm">
          (based on {{ property.reviewCount }} reviews and
          {{ property.likes }} likes)</span
        >
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
