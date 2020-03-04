<template>
  <div class="ui secondary pointing menu">
    <a href="#" class="item title">
      <h1>Image Storage</h1>
    </a>

    <div class="right menu">
      <a
        href="#"
        class="ui item"
        @click="login"
      >
        Login
      </a>
      <a class="ui item">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Header",
  methods: {
    ...mapActions({ login: 'auth/login' })
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}

</style>
