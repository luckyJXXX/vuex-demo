import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('@/pages/youliao/index/index.vue')
const Channel = () => import('@/pages/youliao/channel/index.vue')
const Feed = () => import('@/pages/youliao/feed/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/channel',
      name: '频道',
      component: Channel
    },
    {
      path: '/feed',
      name: '动态',
      component: Feed
    }
  ]
})

export default router
