import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import GYFRequest from './request'
import { LOGIN_TOKEN } from '@/global/constant'

const gyfRequest = new GYFRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestSuccessFn(config) {
      config.headers.Authorization = 'Bearer ' + localCache.getItem(LOGIN_TOKEN)
      return config
    }
  }
})

export default gyfRequest
 