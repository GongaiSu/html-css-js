import gyfRequest from '..'
import type { IAccountType } from '@/types'

export function accountLoginActive(account: IAccountType) {
  return gyfRequest.post({
    url: '/login',
    data: { name: account.username, password: account.password }
  })
}

export function accountIsLoginActive(token: string) {
  return gyfRequest.get({
    url: '/isLogin',
    headers: {
      token
    }
  })
}

export function getUserInfoById(id: number) {
  return gyfRequest.get({
    url: '/users/' + id
  })
}

export function getMenuByRoleId(id: number) {
  return gyfRequest.get({
    url: `/role/${id}/menu`
  })
}
