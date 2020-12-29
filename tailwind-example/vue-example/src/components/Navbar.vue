<template>
  <header class="bg-gray-400">
    <div class="flex items-center justify-between px-4 py-1">
      <div class="h-10 overflow-hidden">
        <img class="h-full" src="/discord.png" alt="discord" />
      </div>
      <div>
        <button type="button block" class="">
          <img
            class="h-6 w-6 fill-current"
            src="/humberger.png"
            alt="humberger"
          />
        </button>
      </div>
    </div>
    <div :class="humbergerClass" class="px-2 pt-2 pb-4">
      <a
        href="#"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-300"
        >Item 1</a
      >
      <a
        href="#"
        class="block px-2 py-1 mt-1 text-white font-semibold rounded hover:bg-gray-300"
        >Item 2</a
      >
      <a
        href="#"
        class="block px-2 py-1 mt-1 text-white font-semibold rounded hover:bg-gray-300"
        >Item 3</a
      >
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isOpen = ref(false)
    const humbergerClass = computed(() => {
      return isOpen.value ? 'block' : 'hidden'
    })
    console.log(humbergerClass)
    return { isOpen, humbergerClass }
  }
})
</script>

<style scoped></style>
