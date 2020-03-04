<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Seach word"
      @input="onInput"
      class="search-bar__input"
    >
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

<style scoped>
.search-bar {
}

.search-bar__input {
  width: 50%;
  padding: 3px 1rem;
  font-size: 1rem;
  border-radius: 10rem;
  outline-style: none;
}

</style>
