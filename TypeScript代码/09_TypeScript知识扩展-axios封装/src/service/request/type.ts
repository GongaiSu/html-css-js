import {AxiosRequestConfig,AxiosResponse} from "axios"

export interface IInterceptor<>  {
  requestSuccessFn?:(config:AxiosRequestConfig)=>AxiosRequestConfig
  requestFailureFn?:(err:any)=>any
  responseSuccessFn?:<T = AxiosResponse>(config:T)=>T
  responseFailureFn?:(err:any)=>any
}

export interface IConfig<> extends AxiosRequestConfig{

  interceptor?:IInterceptor
  
}