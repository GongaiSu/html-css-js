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