import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserLayout',
    component: () => import('../views/Layout.vue'),
    redirect: '/home',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: '/form',
        name: 'Form',
        component: () => import('../views/Form.vue'),
        meta: {
          title: 'Ticknet工作室招新报名表',
        },
      },
      {
        path: '/query',
        name: 'Query',
        component: () => import('../views/Query.vue'),
        meta: {
          title: '查看审核进度',
        },
      },
      {
        path: '/intro',
        name: 'Intro',
        component: () => import('../views/Intro.vue'),
        meta: {
          title: '职位介绍'
        }
      }
    ],
  },
  {
    path: '/admin',
    name: 'AdminLayout',
    component: () => import('../views/admin/Layout.vue'),
    redirect: '/admin/',
    children: [
      {
        path: '/',
        name: 'AdminHome',
        component: () => import('../views/admin/Home.vue')
      },
      
    ],
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/admin/Login.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
