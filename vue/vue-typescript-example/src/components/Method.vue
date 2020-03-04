<template>
  <div @click="onClick">
    test
  </div>
  <div @click="onClick2">
    test
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      bounds: null as ClientRect | DOMRect | null
    }
  },
  methods: {
    // { target: HTMLElement } としておくことで、 event.targetの型をあらかじめ絞り込める
    onClick({ target }: { target: HTMLElement }) {
      this.bounds = target.getBoundingClientRect()
    },
    // event自体を扱う必要がある場合は↓のように `instanceof` で絞り込む
    onClick2(event: Event) {
      if (!event.isTrusted) return
      if (event.target instanceof HTMLElement) {
        this.bounds = event.target.getBoundingClientRect()
      }
    }
  }
})
</script>
