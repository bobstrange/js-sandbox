<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item title">
      <h1>Image Storage</h1>
    </a>

    <div class="right menu">
      <div v-if="isLoggedIn" class="menu__box">
        <a class="item menu__item">
          Galleries
        </a>
        <a class="item menu__item">
          Upload
        </a>
        <a
          class="item menu__item"
          @click="logout"
        >
          Logout
        </a>

      </div>

      <div v-else class="menu__box">
        <a
          href="#"
          class="ui item menu__item"
          @click="login"
        >
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      logout: 'auth/logout'
    })
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}

.menu__box {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu__item {
  height: 100%;
}

</style>
