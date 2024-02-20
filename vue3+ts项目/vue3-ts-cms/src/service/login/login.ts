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
