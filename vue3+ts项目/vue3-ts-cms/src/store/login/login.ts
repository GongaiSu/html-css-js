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

interface IState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: localCache.getItem(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getItem('userInfo') ?? {},
    userMenus: localCache.getItem('userMenus') ?? {}
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

      router.push('/main')
    },

    async accountIsLogin() {
      const res = await accountIsLoginActive(this.token)
      return res
    }
  }
})

export default useLoginStore
