<template>
  <bar-content-vue :barList="['衣服','鞋','玩具']" @btn="btnClick">
  <template v-slot:default="props" >
    <a>{{ props.item }}</a>
  </template>
  
  </bar-content-vue>
  <bar-content-vue :barList="['衣服','鞋','玩具']" @btn="btnClick">
  <template v-slot:default="props" >
    <button>{{ props.item }}</button>
  </template>
  
  </bar-content-vue>
  <h2>{{ contentList[currIndex] }}</h2>
</template>

<script>
import BarContentVue from './BarContent.vue'

export default {
  components:{
    BarContentVue
  },
  name:"App",
  data(){
    return{
      contentList:["衣服页面","鞋页面","玩具页面"],
      currIndex : 0
    }
  },
  methods:{
    btnClick(index){
      this.currIndex = index
    }
  }

}
</script>

<style scoped>

</style>