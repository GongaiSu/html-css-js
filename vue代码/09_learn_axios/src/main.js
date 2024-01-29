import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'

createApp(App).mount('#app')



axios.interceptors.request.use((config)=>{
  config.headers.token="gyf"
  return config
})

axios.interceptors.response.use((res)=>{
  return res.data
},(err)=>{
  return err
})

axios.request({
  url:"http://123.207.32.32:8000/home/multidata",
  method:"get"
}).then(res=>{
  console.log("res:",res);
}).catch(err=>{
  console.log("err:",err)
})
