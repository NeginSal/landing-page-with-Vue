import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/firstPage',
    name: 'FirstPage',
    component: FirstPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
