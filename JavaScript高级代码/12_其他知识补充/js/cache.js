class Cache{
  constructor(isLocal=true){
    this.storage = isLocal?localStorage:sessionStorage
  }
  setCache(key,value){
    if(!value){
      throw new Error("value不能为空")
    }
    this.storage.setItem(key,JSON.stringify(value))
  }
  getCache(key){
    const value = this.storage.getItem(key)
    if(value){
      return JSON.parse(value)
    }
  }
  removeCache(key){
    this.storage.removeItem(key)
  }
  clear(){
    this.storage.clear()
  }
}

const localCache = new Cache()
const sessionCache = new Cache(false)