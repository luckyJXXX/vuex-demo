import Vue from 'vue'
import Router from 'vue-router'

// const Index = () => import('@/pages/youliao/index')
// const Channel = () => import('@/pages/youliao/channel')
// const Feed = () => import('@/pages/youliao/feed')

// vue
const Index = () => import('@/pages/vue/index')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: '频道',
    //   component: Index
    // },
    // {
    //   path: '/channel',
    //   name: '频道',
    //   component: Channel
    // }, {
    //   path: '/feed',
    //   name: '频道',
    //   component: Feed
    // }
    {
      path: '/',
      name: '导航',
      component: Index
    }
  ]
})

// router.beforeEach(({meta, path}, from, next) => {
//     const isLogin = hasAuthToken() // true用户已登录， false用户未登录

//     // 不需要验证的地址
//     if (/^\/example/.test(path)) return next()
//     const noLoginArr = ['/pwd']
//     for (let i = 0, len = noLoginArr.length; i < len; i++) {
//         if (noLoginArr[i] === path) {
//         next()
//         return
//         }
//     }

//     if (path === '/login' && isLogin) {
//         clearSession()
//         location.reload()
//     }
//     if (path !== '/login' && !isLogin) {
//         return next({ path: '/login' })
//     }
//     next()
// })

export default router
