import Vue from 'vue'
import Router from 'vue-router'
import FrontPageIdea from './views/FrontPageIdea.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'frontPage',
      component: FrontPageIdea
    }
  ]
})
