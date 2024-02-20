import { defineStore } from 'pinia'
import type { IAccountType } from '@/types'
import { accountLoginActive, accountIsLoginActive } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constant'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: localCache.getItem(LOGIN_TOKEN) ?? ''
  }),
  actions: {
    async accountLogin(account: IAccountType) {
      const res = await accountLoginActive(account)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
      localCache.setItem(LOGIN_TOKEN, res.data.token)

      router.push('/main')
    },

    async accountIsLogin() {
      const res = await accountIsLoginActive(this.token)
      return res
    }
  }
})

export default useLoginStore
