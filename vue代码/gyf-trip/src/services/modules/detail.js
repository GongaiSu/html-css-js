import gyfRequest from '../request'

export function getDetailInfos(houseId){
  return gyfRequest.get({
    url:"/detail/infos",
    params:{
      houseId
    }
  })

}