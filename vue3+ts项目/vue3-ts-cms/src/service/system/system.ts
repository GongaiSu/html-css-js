import gyfRequest from '..'

export function postUserInfoList(dataConfig: any) {
  return gyfRequest.post({
    url: '/users/list',
    data: dataConfig
  })
}
