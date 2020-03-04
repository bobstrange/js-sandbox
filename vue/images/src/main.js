import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store/index'
import AuthHandler from './components/AuthHandler'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
