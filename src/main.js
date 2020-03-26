import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import NewsTab from './components/NewsTab.vue'

Vue.config.productionTip = false

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
    }
  ]
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

