<template>
  <div class="tab-bar">

    <template v-for="(item,index) in tabbarData" :key="index">
      <div 
        class="tab-bar-item"
        :class="{avtive:index===currindex}"
        @click="itemClick(index,item)"
      >
        <img v-if="index===currindex" :src="getAssetsImg(item.imgActive)" alt="">
        <img v-else :src="getAssetsImg(item.img)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>

  </div>
</template>

<script setup>
  import tabbarData from "@/assets/data/tab-bar-data"
  import {getAssetsImg} from "@/utils/getAssest"
  import { ref } from "vue"
  import { useRouter } from "vue-router"


  const router = useRouter()
  const currindex = ref(0)
  const itemClick = (index,item)=>{
    currindex.value = index
    router.push(item.path)
  }

</script>

<style lang="less" scoped>

.tab-bar{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #f3f3f3;
    .tab-bar-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
      &.active {
        color:var(--primary-color);
      }
      img{
        width: 36px;
      }
      .text{
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }

</style>