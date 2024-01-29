export default {
  namespaced:true,
  state:{
    banners:[]
  },
  mutations:{
    changeBanner(state,banners){
      state.banners = banners
    }
  },
  actions:{
    async AsyncHomeMultidataAction(content){
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      content.commit("changeBanner",data.data.banner.list)
    }
  }
}