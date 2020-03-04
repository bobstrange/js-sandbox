<template>
<div class="video-list-item">
  <li
    class="video-list-item__item list-group-item media"
    @click="onVideoSelect"
  >
    <img
      :src="thumbnailURL"
      alt="Video iamge"
      class="video-list-item__image"
    >
    <div class="video-list-item__title media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    thumbnailURL() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video)
    }
  }
}
</script>

<style scoped>
.video-list-item__image {
  overflow: hidden;
  border-radius: 2px;
  margin-right: 1rem;
}

.video-list-item__title {
}

.video-list-item__item {
  display: flex;
  cursor: pointer;
  align-items: center;
}

.video-list-item__item:hover {
  background-color: #eee;
}

</style>
