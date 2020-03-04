<template>
<div class="video-list-item">
  <li>
    {{ video.snippet.title }}
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
}
</script>

<style scoped>

</style>
