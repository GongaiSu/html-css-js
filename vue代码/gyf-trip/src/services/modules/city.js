import gyfRequest from '../request'

export function getCityAll(){
  return gyfRequest.get({
    url:"/city/all"
  })

}