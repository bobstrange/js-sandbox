<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item title">
      <h1>Image Storage</h1>
    </router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="menu__box">
        <router-link
          to="/"
          class="item menu__item"
        >
          Galleries
        </router-link>
        <router-link to="/upload" class="item menu__item">
          Upload
        </router-link>
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
