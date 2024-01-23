<template>

  <div>
    <template v-for="(item) in comList" :key="item">
      <button :class="{active:currItem===item}"
              @click="btnClick(item)">
        {{ item }}
      </button>
    </template>

    <keep-alive include="home,about">
      <component
         :is="currItem"
         name="zs"
         @homebtn="btnClicHhome"
    />
    </keep-alive>
    
  </div>
</template>

<script>
import Home from "./view/Home.vue"
import About from "./view/About.vue"
import Category from "./view/Category.vue"
export default {
  name:"App",
  components:{
    Home,About,Category
  },
  data(){
    return{
      comList:["home","about","category"],
      currItem : "home" 
    }
  },
  methods:{
    btnClick(item){
      this.currItem = item
    },
    btnClicHhome(item){
      console.log("App:",item);
    }
  }

}
</script>

<style scoped>
.active{
  color: red;
}

</style>