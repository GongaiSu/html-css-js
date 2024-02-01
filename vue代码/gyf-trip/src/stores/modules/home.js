import { defineStore } from "pinia";
import {getHotSuggests,getCategories,getHouseList} from "@/services"

const useHomeStore = defineStore("home",{
  state:()=>({
    hosSuggests:[],
    categories:[],

    currentPage:1,
    houseList:[]
  }),
  actions:{
    async asyncGetHotSuggests(){
      const res = await getHotSuggests()
      this.hosSuggests = res.data
    },
    async asyncGetCategories(){
      const res = await getCategories()
      this.categories = res.data
    },
    async asyncGetHouseList(){
      const res =  await getHouseList(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    }
  }
})


export default useHomeStore