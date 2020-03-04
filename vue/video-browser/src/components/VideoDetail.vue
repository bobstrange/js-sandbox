<template>
  <div
    class="video-detail"
    v-if="video"
  >
    <div class="video-detail__content embed-responsive embed-responsive-16by9">
      <iframe :src="videoURL" class="embed-responsive-item"></iframe>
    </div>

    <div class="video-detail__details">
      <h3 class="video-detail__title">
        {{ title }}
      </h3>
      <p class="video-detail__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    snippet() {
      return this.video && this.video.snippet || {}
    },
    videoURL() {
      const { videoId } = this.video.id
      console.log('VideoURL: ', `https://www.youtube.com/embed/${videoId}`)
      return `https://www.youtube.com/embed/${videoId}`
    },
    title() {
      return this.snippet.title
    },
    description() {
      return this.snippet.description
    }
  },
}
</script>

<style scoped>
.video-detail {
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.video-detail__content {
  margin-bottom: 2rem;
  border-radius: 3px;
}

.video-detail__details {
}

.video-detail__title {
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.video-detail__description {
  font-size: 0.9rem;
  word-wrap: none;
}

</style>
