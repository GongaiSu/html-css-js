<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city,index) in groupData.hotCities" :key="index">
            <div class="city" @click="vancellClick(city)" >{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city,index) in group.cities" :key="index">
          <van-cell :title="city.cityName" @click="vancellClick(city)" />
        </template>
      </template>
      
    </van-index-bar>

  </div>
</template>

<script setup>
import { computed } from "vue";
import useCityStore from '@/stores/modules/city'
import { useRouter } from "vue-router";
const router = useRouter()


const cityStore = useCityStore()


const props = defineProps({
  groupData:{
    type:Object,
    default:()=>({})
  }
})

const indexList = computed(()=>{
    const list =  props.groupData.cities.map(item => item.group)
    list.unshift("#")
    return list
  })

  const vancellClick = (city)=>{
    cityStore.selectedCity = city
    router.back()
  }

  
</script>

<style lang="less" scoped>

.city-group{
  --van-index-bar-index-active-color:var(--primary-color) !important;
  .list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;

    .city{
      width: 70px;
      height: 28px;
      border-radius: 14px;
      text-align: center;
      font-size: 12px;
      color: #000;
      background-color: #fff4ec;
      line-height: 28px;
      margin: 10px 0;
    }
  }
}


</style>