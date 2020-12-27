<template>
  <div>
    <img :src="property.image" :alt="property.image" />
    <h4>{{ property.text }}</h4>
    <ul>
      <li v-for="(tag, i) in property.tags" :key="i">
        {{ tag }}
      </li>
    </ul>
    <div>
      {{ property.formattedPrice }}
    </div>
    <div>
      {{ property.rating }}/5 stars (based on {{ property.reviewCount }} reviews
      and {{ property.likes }} likes)
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
