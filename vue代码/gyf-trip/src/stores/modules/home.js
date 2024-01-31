import { defineStore } from "pinia";
import {getHotSuggests} from "@/services"

const useHomeStore = defineStore("home",{
  state:()=>({
    hosSuggests:[]
  }),
  actions:{
    async asyncGetHotSuggests(){
      const res = await getHotSuggests()
      this.hosSuggests = res.data
    }
  }
})


export default useHomeStore