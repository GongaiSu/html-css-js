<template>
  <nav-bar>
    <template v-slot:left>
      <a href="#">查看</a>
    </template>
    <template v-slot:center>
      <button>11</button>
    </template>
    <template v-slot:right>
      <a href="#">百度一下</a>
    </template>
    
    
  </nav-bar>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  name:"App",
  components:{
    NavBar
  }

}
</script>

<style>

</style>