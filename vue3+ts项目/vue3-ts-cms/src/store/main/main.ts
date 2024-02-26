import { postDepartmentList, postRoleList } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireRolesList: any[]
  entireDepartmentsList: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRolesList: [],
    entireDepartmentsList: []
  }),
  actions: {
    async postRoleAndDeparmentActive() {
      const roleListResult = await postRoleList()
      const departmentListResult = await postDepartmentList()
      this.entireRolesList = roleListResult.data.list
      this.entireDepartmentsList = departmentListResult.data.list
    }
  }
})

export default useMainStore
