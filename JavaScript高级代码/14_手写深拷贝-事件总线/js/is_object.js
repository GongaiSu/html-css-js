function isObject(obj){
  const type = typeof obj
  const flag = (obj!==null)&&(type ==="object"||type==="function")
  return flag
}