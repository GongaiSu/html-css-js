<template>
  <div class="tab-bar">
    <van-tabbar v-model="currindex" active-color="#ff9854">
      <template v-for="(item,index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template v-slot:icon>
            <img v-if="index===currindex" :src="getAssetsImg(item.imgActive)" alt="">
            <img v-else :src="getAssetsImg(item.img)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<script setup>
  import tabbarData from "@/assets/data/tab-bar-data"
  import {getAssetsImg} from "@/utils/getAssest"
  import { ref } from "vue"
  const currindex = ref(0)
</script>

<style lang="less" scoped>

  .tab-bar{
    --van-tabbar-item-font-size : 12px !important;
    img{
        height: 30px;
    }
  }

 
  

</style>