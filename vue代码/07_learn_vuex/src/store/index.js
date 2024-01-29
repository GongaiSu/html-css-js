import { createStore } from "vuex";
import HomeModlue from "./module/home.js"

const store = createStore({
  state:{
    counter:100,
    name:"gyf",
    age:18,
    firends:[
      {id:"111",name:"张三1",age:19},
      {id:"112",name:"张三2",age:20},
      {id:"113",name:"张三3",age:35},
    ],
    // banners:[]
  },
  getters:{
    DoubleCounter(state){
      return state.counter*2
    },
    getFirendsAge(state){
      return state.firends.reduce((preValue,item)=>{
        return preValue +item.age
      },0)
    },
    getFirendById(state){
      return (id)=>{
        return state.firends.find(item=>item.id===id)
      }
    },
    message(state,getters){
      return `name:${state.name},getFirendsAge:${getters.getFirendsAge}`
    },
  },
  mutations:{
    incomment(state){
      state.counter++
    },
    changeName(state,playoad){
      state.name = playoad.name
    },
    // changeBanner(state,banners){
    //   state.banners = banners
    // }
  },
  actions:{
    incommentAction(content){
      content.commit("incomment")
    },
    changeNameAction({commit},playoad){
      commit("changeName",playoad)
    },
    // async AsyncHomeMultidataAction(content){
    //   const res = await fetch("http://123.207.32.32:8000/home/multidata")
    //   const data = await res.json()
    //   content.commit("changeBanner",data.data.banner.list)
    // }
  },
  modules:{
    home:HomeModlue
  }
})

export default store