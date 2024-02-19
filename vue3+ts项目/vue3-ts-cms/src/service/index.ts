import { BASE_URL, TIME_OUT } from './config'
import GYFRequest from './request'

const gyfRequest = new GYFRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default gyfRequest
