<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in detailMainPart" :key="index">
        <van-swipe-item class="list">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <template v-for="(value,key) in categoryGrouping" :key="key">
            <span class="item" :class="{active:key==detailMainPart[active]?.enumPictureCategory}">
              <span>{{ getName(value[0].title) }}</span>
              <span v-if="key==detailMainPart[active]?.enumPictureCategory">{{getCategoryIndex(detailMainPart[active])}}/{{value.length }}</span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { datePickerProps } from "vant";
import { computed, ref } from "vue"


const props = defineProps({
  detailMainPart:{
    type:Array,
    default:()=>[]
  }
})

const categoryGrouping = {}

for (const item of props.detailMainPart) {
  if(!categoryGrouping[item.enumPictureCategory]){
    categoryGrouping[item.enumPictureCategory] = []
  }
  categoryGrouping[item.enumPictureCategory].push(item)
}


const getName = (name)=>{
  return name.replace("：","").replace("【","").replace("】","")
}

const getCategoryIndex = (item)=>{
  const valueList = categoryGrouping[item.enumPictureCategory]
  return valueList.findIndex(data => data ===item)+1
}

</script>

<style lang="less" scoped>

.swipe{
  .swipe-list{
    .list{
      img{
        width: 100%;
      }
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    border-radius: 8px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);

    .item{
      padding: 0 3px;

      &.active{
        border-radius: 3px;
        color: #333;
        background-color: #fff;
        
      }
    }
  }
}

</style>