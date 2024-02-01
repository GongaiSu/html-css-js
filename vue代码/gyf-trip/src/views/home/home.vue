<template>
  <div class="home">
    <nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
  </div>
</template>

<script setup>
import NavBar from "./cpns/nav-bar.vue";
import HomeSearchBox from"./cpns/home-search-box.vue"  
import HomeCategories from"./cpns/home-categories.vue"  
import useHomeStore from "@/stores/modules/home";
const homeStore  = useHomeStore()
homeStore.asyncGetHotSuggests()
homeStore.asyncGetCategories()


</script>

<style lang="less" scoped>

  .home{
    .banner{
      img{
        width: 100%;
      }
    }

  }

</style>