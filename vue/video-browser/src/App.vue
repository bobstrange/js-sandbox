<template>
  <div class="container">
    <SearchBar
      @searchTermChange="onSearchTermChange"
      class="search-bar"
    />
    <div class="row">
      <VideoDetail
        :video="selectedVideo"
        class="video-detail col-md-8"
      />
      <VideoList
        :videos="videos"
        @videoSelect="onVideoSelect"
        class="videos col-md-4"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

import axios from 'axios'
import { API_KEY } from '../tmp-secret'

export default {
  name: 'App',
  data() {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  methods: {
    async onSearchTermChange(searchTerm) {
      const result = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }
      )
      this.videos = result.data.items;
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style scoped>

.search-bar {
  margin: 1rem;
}

.video-detail {

}

.videos {

}

</style>
