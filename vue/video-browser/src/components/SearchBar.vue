<template>
  <div>
    <input type="text" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      this.$emit('searchTermChange', event.target.value)
    }
  }
}
</script>

<style>

</style>
