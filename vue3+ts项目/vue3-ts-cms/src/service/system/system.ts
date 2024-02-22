import gyfRequest from '..'

export function postUserInfoList() {
  return gyfRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
