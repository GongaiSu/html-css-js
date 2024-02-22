import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constant'
import { localCache } from '@/utils/cache'
import { firstRoute } from '@/utils/map-menu'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  // const loginStore = useLoginStore()
  // let isLogin = false
  // loginStore.accountIsLogin().then((res) => {
  //   console.log(res)
  //   if (res.code === 500) {
  //     isLogin = true
  //   }
  // })
  firstRoute
  const token = localCache.getItem(LOGIN_TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/main' && token) {
    return firstRoute.path
  }
})

export default router
