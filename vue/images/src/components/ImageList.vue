<template>
  <div class="image-list">
    <img
      :src="image.link"
      alt="image"
      v-for="image in allImages"
      :key="image.link"
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImageList',
  created() {
    this.fetchImages()
  },
  computed: {
    ...mapGetters({
      allImages: 'image/allImages'
    })
  },
  methods: {
    ...mapActions({
      fetchImages: 'image/fetchImages'
    })
  }
}
</script>

<style scoped>

</style>
