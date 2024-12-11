import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VotingPage from '../views/VotingPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/vote', 
    name: 'Vote', 
    component: VotingPage 
  },
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
