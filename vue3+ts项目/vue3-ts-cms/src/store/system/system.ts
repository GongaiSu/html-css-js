import { postUserInfoList } from '@/service/system/system'
import { defineStore } from 'pinia'
import type { IStore } from './type'

const useSystemStore = defineStore('system', {
  state: (): IStore => ({
    userList: [],
    totalCount: 0
  }),
  actions: {
    async postUserInfoListActive() {
      const userListResult = await postUserInfoList()
      const { list, totalCount } = userListResult.data
      this.userList = list
      this.totalCount = totalCount
    }
  }
})

export default useSystemStore
