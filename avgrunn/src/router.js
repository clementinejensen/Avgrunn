import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from './views/FrontPage.vue'
import ChooseYourSide from './views/ChooseYourSide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'frontPage',
      component: FrontPage
    },
    {
      path: '/ChooseYourSide',
      name: 'chooseYourSide',
      component: ChooseYourSide
    }
  ]
})
