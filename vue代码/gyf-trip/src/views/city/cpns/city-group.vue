<template>
  <div class="city-group">
    <van-index-bar>
      <template v-for="(group,index) in groupData.cities">
        <van-index-anchor :index="group.group" />
        <template v-for="(city,index) in group.cities" :key="index">
          <van-cell :title="city.cityName" />
        </template>
      </template>
      
    </van-index-bar>

  </div>
</template>

<script setup>
defineProps({
  groupData:{
    type:Object,
    default:()=>({})
  }

})
</script>

<style lang="less" scoped>



</style>