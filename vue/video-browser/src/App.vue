<template>
  <div>
    <SearchBar @searchTermChange="onSearchTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar'
import axios from 'axios'
import { API_KEY } from '../tmp-secret'

export default {
  name: 'App',
  components: {
    SearchBar
  },
  methods: {
    async onSearchTermChange(searchTerm) {
      console.log('apikey', API_KEY)
      const result = await axios.get(
        'https://www.google.apis.com/youtube/v3/search',
        {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }
      )
      console.log(result.data)
    }
  }
}
</script>

<style>

</style>
