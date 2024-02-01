import { defineStore } from "pinia";
import {getHotSuggests,getCategories} from "@/services"

const useHomeStore = defineStore("home",{
  state:()=>({
    hosSuggests:[],
    categories:[]
  }),
  actions:{
    async asyncGetHotSuggests(){
      const res = await getHotSuggests()
      this.hosSuggests = res.data
    },
    async asyncGetCategories(){
      const res = await getCategories()
      this.categories = res.data
    }
  }
})


export default useHomeStore