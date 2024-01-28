<template>
  <div class="app">
    <h2>App Content</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">其他</router-link>
    <router-link to="/user/123">用户123</router-link>
    <router-link to="/user/321">用户321</router-link>
    <span @click="homeClick">首页</span>
    <button @click="aboutClick">其他</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';



  const router = useRouter()


  function homeClick(){
    router.push({
      path:"/home",
      query:{
        name:"zs",
        age:18
      }
    })
  }

  function aboutClick(){
    router.push("/about")
  }

</script>

<style>

  .router-link-active{
    color: red;
    font-size: 20px;
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }
</style>
