import { postUserInfoList } from '@/service/system/system'
import { defineStore } from 'pinia'
import type { IStore } from './type'

const useSystemStore = defineStore('system', {
  state: (): IStore => ({
    userList: [],
    totalCount: 0,
    formData: {
      name: '',
      realname: '',
      cellphone: '',
      enable: 1,
      createAt: ''
    }
  }),
  actions: {
    async postUserInfoListActive(dataConfig: any) {
      const userListResult = await postUserInfoList(dataConfig)
      const { list, totalCount } = userListResult.data
      this.userList = list
      this.totalCount = totalCount
    }
  }
})

export default useSystemStore
