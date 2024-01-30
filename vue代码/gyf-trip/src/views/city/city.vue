<template>
  <div class="city bar-top">
    <div class="top">
        <van-search 
        v-model="searchValue" 
        placeholder="地市/区域/位置" 
        show-action 
        shape="round"
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabactive" color="#ff9864">
        <template v-for="(value,key,index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      



      <template v-for="(value,key,index) in allCities" :key="index">
        <city-group v-show="tabactive===key" :group-data="value"></city-group>
        <city-group v-show="tabactive===key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import CityGroup from './cpns/city-group.vue'

// 上面的搜索框
  const searchValue = ref("")
  console.log(searchValue.value)
  const router =  useRouter()
  const cancelClick = ()=>{
    router.back()
  }
// 内容
const tabactive = ref()
const cityStore = useCityStore()
cityStore.AsyncCityAll()
const {allCities} = storeToRefs(cityStore)

const currentGroup = computed(()=>{ return allCities.value[tabactive.value]})

 




</script>

<style lang="less" scoped>

.city{
  .top{
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>