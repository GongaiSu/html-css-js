import { defineStore } from "pinia";

const usrHome = defineStore("home",{
  state:()=>({
    banners:[]
  }),
  actions:{
    async AsyncHomeMultidata(){
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      console.log(data);
      this.banners = data.data.banner.list
    }
  }
})

export default usrHome