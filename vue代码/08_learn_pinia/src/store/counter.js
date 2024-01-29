import { defineStore } from "pinia";
import useUser from "./user";

const useCounter = defineStore("counter",{
  state:()=>({
    count:0,
    firends:[
      {id:"111",name:"zs"},
      {id:"112",name:"ls"}
    ]
  }),
  getters:{
    doubleCounter(state){
      return state.count*2
    },

    doubleCounterAndOne(){
      return this.count*2 +1
    },
    firendById(){
      return function(id){
        return this.firends.find(item=>item.id===id)
      }
    },
    showMessage(){
      const userStore = useUser()

      return `userName:${userStore.name}---count:${this.count}`
    }


  }
})

export default useCounter