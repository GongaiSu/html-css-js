<template>
  <div class="categories">
    <template v-for="(item) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";


const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)

</script>

<style lang="less" scoped>

.categories{
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 10px;
  &::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
  .item{
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70px;
    img{
      width: 32px;
      height: 32px;
    }
    .text{
      font-size: 14px;
      margin-top: 8px;
    }
  }
  
}

</style>