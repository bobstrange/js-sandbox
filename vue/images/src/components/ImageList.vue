<template>
  <div>
    <div
      class="image-list"
      v-if="isLoggedIn"
    >
      <img
        :src="image.link"
        alt="image"
        v-for="image in allImages"
        :key="image.link"
      >
    </div>
    <div v-else>
      Please log in
    </div>
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
      allImages: 'image/allImages',
      isLoggedIn: 'auth/isLoggedIn'
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
.image-list {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}

</style>
