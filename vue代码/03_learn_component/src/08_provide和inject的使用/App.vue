<template>
  <home></home>
  <button @click="message='sssddss'">修改message</button>
</template>

<script>
import { computed } from 'vue'
import Home from "./Home.vue"

export default {
  components:{
    Home
  },
  name:"App",
  data(){
    return{
      message:"qwe"
    }
  },
  provide(){
    return{
      name:"zs",
      // message修改后无法自定更新
      // message:this.message
      message:computed(()=>{
        return this.message
      })
    }
  }

}
</script>

<style scoped>

</style>