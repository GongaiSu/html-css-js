import { getCityAll } from "@/services";
import { defineStore } from "pinia";

const useCityStore = defineStore("city",{
  state:()=>({
    allCities:{},
    selectedCity:{cityName:"北京"}
  }),

  actions:{
    async AsyncCityAll(){
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore