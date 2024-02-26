import { defineStore } from 'pinia'
import type { IAccountType } from '@/types'
import {
  accountLoginActive,
  accountIsLoginActive,
  getUserInfoById,
  getMenuByRoleId
} from '@/service/login/login'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constant'
import router from '@/router'
import { firstRoute, mapMenusToRoutes } from '@/utils/map-menu'
import useMainStore from '../main/main'

interface IState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: '',
    userInfo: {},
    userMenus: {}
  }),
  actions: {
    async accountLogin(account: IAccountType) {
      const res = await accountLoginActive(account)
      const id = res.data.id
      this.token = res.data.token
      localCache.setItem(LOGIN_TOKEN, this.token)

      const userInfoResult = await getUserInfoById(id)
      this.userInfo = userInfoResult.data

      const userMenusResult = await getMenuByRoleId(this.userInfo.role.id)
      this.userMenus = userMenusResult.data

      localCache.setItem('userInfo', this.userInfo)
      localCache.setItem('userMenus', this.userMenus)

      const mainStore = useMainStore()
      mainStore.postRoleAndDeparmentActive()

      //添加动态路由
      const routers = mapMenusToRoutes(this.userMenus)
      routers.forEach((item) => {
        router.addRoute('main', item)
      })

      router.push(firstRoute?.path)
    },

    async accountIsLogin() {
      const res = await accountIsLoginActive(this.token)
      return res
    },
    loadLocalCacheAction() {
      const token = localCache.getItem(LOGIN_TOKEN)
      const userInfo = localCache.getItem('userInfo')
      const userMenus = localCache.getItem('userMenus')
      console.log(userMenus)
      if (token && userInfo && userMenus) {
        console.log('进入了刷新页面')

        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        const mainStore = useMainStore()
        mainStore.postRoleAndDeparmentActive()

        const routers = mapMenusToRoutes(this.userMenus)
        routers.forEach((item) => {
          router.addRoute('main', item)
        })
      }
    }
  }
})

export default useLoginStore
