import { BASE_URL, TIME_OUT } from "./config";
import GYFRequest from "./request";



const gyfRequest = new GYFRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT
})


export const gyfRequest2 = new GYFRequest({
  baseURL:"http://codercba.com:1888/airbnb/api",
  timeout:8000,
  interceptor:{
    requestSuccessFn:(config)=>{
      console.log("airbnb接口请求成功拦截")
      return config
    },
    requestFailureFn:(err)=>{
      return err
    },
    responseSuccessFn:(config)=> {
      console.log("airbnb接口响应成功拦截")
      return config
    },
    responseFailureFn:(err)=> {
      return err
    },

  }
})


export default gyfRequest