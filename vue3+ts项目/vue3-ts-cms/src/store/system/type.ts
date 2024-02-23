export interface IUserList {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface IFormData {
  name: string
  realname: string
  cellphone: string
  enable: number
  createAt: string
}

export interface IStore {
  userList: IUserList[]
  totalCount: number
  formData: IFormData
}
