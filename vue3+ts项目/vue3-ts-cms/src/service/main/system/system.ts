import gyfRequest from '../..'

export function postUserInfoList(dataConfig: any) {
  return gyfRequest.post({
    url: '/users/list',
    data: dataConfig
  })
}

export function deleteUserById(userId: number) {
  return gyfRequest.delete({
    url: 'users/' + userId
  })
}

export function installUser(user: any) {
  return gyfRequest.post({
    url: 'users',
    data: user
  })
}

export function updateUser(userId: number, user: any) {
  return gyfRequest.patch({
    url: '/users/' + userId,
    data: user
  })
}
