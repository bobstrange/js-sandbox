<template>
  <div class="video-list">
    <ul class="video-list__list-group list-group">
      <VideoListItem
        :video="video"
        v-for="video in videos"
        :key="video.etag"
        @videoSelect="onVideoSelect"
        class="video-list__list-item"
      />
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video)
    }
  },
}
</script>

<style scoped>
.video-list__list-item:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
