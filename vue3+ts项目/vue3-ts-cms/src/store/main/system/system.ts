import {
  postUserInfoList,
  deleteUserById,
  installUser,
  updateUser
} from '@/service/main/system/system'
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
    },

    async deleteUserByIdActive(userId: number) {
      const userListResult = await deleteUserById(userId)
      this.postUserInfoListActive({ size: 10, offset: 0 })
    },
    async installUserActive(user: any) {
      const userResult = await installUser(user)
      this.postUserInfoListActive({ size: 10, offset: 0 })
    },
    async updateUserActive(userId: number, user: any) {
      const userResult = await updateUser(userId, user)
      this.postUserInfoListActive({ size: 10, offset: 0 })
    }
  }
})

export default useSystemStore
