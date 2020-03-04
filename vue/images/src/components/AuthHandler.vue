<template>
  <div>
    Redirecting please wait ...
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthHandler',
  methods: {
    ...mapActions({
      finalizeLogin: 'auth/finalizeLogin'
    })
  },
  created() {
    this.finalizeLogin(window.location.hash)
  }
}
</script>
