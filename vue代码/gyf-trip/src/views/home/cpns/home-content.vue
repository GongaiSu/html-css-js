<template>
  <div class="content">
    <div class="list">
      <template v-for="(item) in houseList" :key="item.data.houseId">
        <house-list-item-v9 
          v-if="item.discoveryContentType===9" 
          :item-data="item.data"
          @click="detailClick(item.data)"
        />
        <house-list-item-v3 
          v-if="item.discoveryContentType===3" 
          :item-data="item.data" 
          @click="detailClick(item.data)" 
        />
      </template>   
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import HouseListItemV9 from '@/components/house-list-item-v9/house-list-item-v9.vue'
import HouseListItemV3 from '@/components/house-list-item-v3/house-list-item-v3.vue'
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()

const {houseList} = storeToRefs(homeStore)
const router = useRouter()

const detailClick = (item)=>{
  router.push("detail/"+item.houseId)
}

</script>

<style lang="less" scoped>

.list{
  display: flex;
  flex-wrap: wrap;
}

</style>