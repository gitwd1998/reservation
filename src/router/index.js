import Vue from 'vue'
import VueRouter from 'vue-router'
import WebView from '../views/WebView.vue'
import View from '../views/View.vue'

Vue.use(VueRouter)

const routes = [
  {//底部导航 * 4
    path: '/', name: 'WebView', component: WebView, redirect: '/home', children: [
      { path: '/home', name: 'Home', component: () => import('../components/Home') },
      { path: '/reservation', name: 'Reservation', component: () => import('../components/Reservation') },
      { path: '/shopping', name: 'Shopping', component: () => import('../components/Shopping') },
      { path: '/mine', name: 'Mine', component: () => import('../components/Mine') },
    ]
  },
  {//底部导航 * 2
    path: '/view', name: 'View', component: View, redirect: '', children: [
      { path: '/view/detail', name: 'Detail', component: () => import('../components/Detail') },
      { path: '/view/order', name: 'Order', component: () => import('../components/Order') },
      { path: '/view/history', name: 'History', component: () => import('../components/History') },
      { path: '/view/personal', name: 'Personal', component: () => import('../components/Personal') },
      { path: '/view/Pay', name: 'Pay', component: () => import('../components/Pay') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
