import gyfRequest from '../request'

export function getHotSuggests(){
  return gyfRequest.get({
    url:"/home/hotSuggests"
  })
}

export function getCategories(){
  return gyfRequest.get({
    url:"/home/categories"
  })
}

export function getHouseList(currentPage){
  return gyfRequest.get({
    url:"/home/houselist",
    params:{
      page:currentPage
    }
  })
}