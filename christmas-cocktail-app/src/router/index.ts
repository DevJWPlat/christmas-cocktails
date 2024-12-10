import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminPage from '../views/AdminPage.vue'
import hlj from '@/views/hlj.vue'
import VotingPage from '../views/VotingPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/hlj',
    name: 'hlj',
    component: hlj
  },
  { path: '/vote', name: 'Vote', component: VotingPage },
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
