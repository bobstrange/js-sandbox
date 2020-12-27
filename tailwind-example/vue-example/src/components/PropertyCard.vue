<template>
  <div></div>
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
