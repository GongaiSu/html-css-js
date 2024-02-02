<template>
  <div class="home">
    <nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <div v-if="showScrollTop">显示文字</div>
    <home-content />
  </div>
</template>

<script setup>
import NavBar from "./cpns/nav-bar.vue";
import HomeSearchBox from"./cpns/home-search-box.vue"  
import HomeCategories from"./cpns/home-categories.vue"  
import HomeContent from"./cpns/home-content.vue"  
import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll"
import { computed, watch } from "vue";
const homeStore  = useHomeStore()
homeStore.asyncGetHotSuggests()
homeStore.asyncGetCategories()
homeStore.asyncGetHouseList()


const {isReachBottom,scrollTop} = useScroll()

watch(isReachBottom,(newValue)=>{
  if(newValue){
    homeStore.asyncGetHouseList().then(()=>{
      isReachBottom.value=false
    })
  }
})
const showScrollTop = computed(()=>{
  return scrollTop.value > 100
})


</script>

<style lang="less" scoped>

  .home{
    padding-bottom: 60px;
    .banner{
      img{
        width: 100%;
      }
    }

  }

</style>