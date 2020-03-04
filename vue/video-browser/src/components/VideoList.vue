<template>
  <div class="video-list">
    <ul class="video-list__list-group">
      <VideoListItem
        :video="video"
        v-for="video in videos"
        :key="video.etag"
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
  }
}
</script>

<style scoped>

</style>
