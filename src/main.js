import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import NewsTab from './components/NewsTab.vue'
import Preferences from './components/Preferences.vue'
import Database from './assets/Database/Database.js'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$db', { value: Database });

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/:id',
      name: 'Search',
      component: NewsTab,
      params: true
    },
    {
      path: '/preferences',
      name: 'Preferences',
      component: Preferences
    }
  ]
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

