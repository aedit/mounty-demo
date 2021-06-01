import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/movies',
    name: 'Movies',
    redirect: '/movies/top-rated',
    component: () => import('../views/Movies.vue'),
    meta: {
      title: 'Movies'
    },
    children: [
      {
        path: 'top-rated',
        component: () => import('../components/Movies/TopRated.vue'),
        meta: {
          title: 'Top Rated Movies',
          component: 'top_rated'
        }
      },
      {
        path: 'upcoming',
        component: () => import('../components/Movies/Upcoming.vue'),
        meta: {
          title: 'Upcoming Movies',
          component: 'upcoming'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

export default router
