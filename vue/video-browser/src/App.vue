<template>
  <div class="container">
    <SearchBar
      @searchTermChange="onSearchTermChange"
      class="search-bar"
    />
    <VideoList
      :videos="videos"
      class="videos"
    />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'

import axios from 'axios'
import { API_KEY } from '../tmp-secret'

export default {
  name: 'App',
  data() {
    return {
      videos: []
    }
  },
  components: {
    SearchBar,
    VideoList
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
    }
  }
}
</script>

<style scoped>
.search-bar {
  margin: 1rem;
}

.videos {

}

</style>
