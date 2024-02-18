import axios from "axios";
import type {AxiosInstance,AxiosResponse} from "axios"
import type { IConfig } from "./type";


class GYFRequest {

  instance:AxiosInstance
  constructor(config:IConfig){
    this.instance = axios.create(config)
    
    console.log(config)
    this.instance.interceptors.request.use(config=>{
      console.log("全局请求拦截器")
      return config
    },err=>{
      return err
    })

    this.instance.interceptors.response.use(res=>{
      console.log("全局响应拦截器")
      return res.data
    },err=>{
      console.log(err)
      return err
    })
    this.instance.interceptors.request.use(config.interceptor?.requestSuccessFn,config.interceptor?.requestFailureFn)
    this.instance.interceptors.response.use(config.interceptor?.responseSuccessFn,config.interceptor?.responseFailureFn)
  }

  request<T=any>(config:IConfig){

    //单次网络请求进行拦截
    if(config.interceptor?.requestFailureFn){
      config = config.interceptor.requestFailureFn(config)
    }

    return new Promise<T>((resolve,reject)=>{
      this.instance.request<any,T>(config).then(res=>{
        if(config.interceptor?.responseSuccessFn){
          res = config.interceptor.responseSuccessFn <T>(res)
        }
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }


  get<T=any>(config:IConfig){
    return this.instance.request({...config,method:"GET"})
  }

  post<T=any>(config:IConfig){
    return this.instance.request({...config,method:"POST"})
  }
}


export default GYFRequest