import gyfRequest from '..'

export function postRoleList() {
  return gyfRequest.post({
    url: 'role/list'
  })
}

export function postDepartmentList() {
  return gyfRequest.post({
    url: '/department/list'
  })
}
