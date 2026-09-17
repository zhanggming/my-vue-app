import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          title: '首页',
          component: () => import("@/views/dashboard/index.vue"),
        },
        {
          path: '/projects',
          name: 'projects',
          title: '作品列表',
          component: () => import("@/views/projects/index.vue"),
        },
        {
          path: '/about',
          name: 'about',
          title: '关于我',
          component: () => import("@/views/about/index.vue"),
        },
        {
          path: '/contact',
          name: 'contact',
          title: '联系我',
          component: () => import("@/views/contact/index.vue"),
        },
        {
          path: '/projects/:id',
          // name: 'projects',
          title: '作品详情',
          component: () => import("@/views/projects/index.vue"),
        },
      ],
    },
  ],
})

export default router
