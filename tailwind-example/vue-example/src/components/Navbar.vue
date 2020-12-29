<template>
  <header
    class="bg-gray-400 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-1"
  >
    <div class="flex items-center justify-between px-4 py-1 sm:p-0">
      <div class="h-10 overflow-hidden">
        <img class="h-full" src="/discord.png" alt="discord" />
      </div>
      <div class="sm:hidden">
        <button type="button block" @click="toggle" class="">
          <img
            class="h-6 w-6 fill-current"
            src="/humberger.png"
            alt="humberger"
          />
        </button>
      </div>
    </div>
    <div :class="humbergerClass" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <a
        href="#"
        class="block px-2 py-1 text-sm text-white font-semibold rounded hover:bg-gray-300"
        >Item 1</a
      >
      <a
        href="#"
        class="block px-2 py-1 mt-1 text-sm text-white font-semibold rounded hover:bg-gray-300 sm:mt-0 sm:ml-2"
        >Item 2</a
      >
      <a
        href="#"
        class="block px-2 py-1 mt-1 text-sm text-white font-semibold rounded hover:bg-gray-300 sm:mt-0 sm:ml-2"
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
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    return { isOpen, humbergerClass, toggle }
  }
})
</script>

<style scoped></style>
